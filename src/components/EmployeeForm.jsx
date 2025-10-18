import { useState, useEffect } from "react";
import { addEmployee, updateEmployee, patchEmployee } from "../services/employeeService";

const EmployeeForm = ({ selectedEmployee, refreshEmployees, clearSelection }) => {
  const [employee, setEmployee] = useState({ name: "", email: "", department: "" });

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee(selectedEmployee);
    } else {
      setEmployee({ name: "", email: "", department: "" });
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedEmployee) {
      await updateEmployee(employee.id, employee);
    } else {
      await addEmployee(employee);
    }
    refreshEmployees();
    clearForm();   // <-- Reset fields after submit
    clearSelection();
  };

  const handlePatch = async () => {
    if (employee.id) {
      await patchEmployee(employee.id, { email: employee.email });
      refreshEmployees();
      clearForm();   // <-- Reset fields after patch
      clearSelection();
    }
  };

  const clearForm = () => {
    setEmployee({ name: "", email: "", department: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>{selectedEmployee ? "Update Employee" : "Add Employee"}</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={employee.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={employee.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="department"
        placeholder="Enter department"
        value={employee.department}
        onChange={handleChange}
        required
      />
      <button type="submit">{selectedEmployee ? "Update" : "Add"}</button>
      {selectedEmployee && (
        <button type="button" onClick={handlePatch}>
          Patch Email
        </button>
      )}
    </form>
  );
};

export default EmployeeForm;
