import { useEffect, useState } from "react";
import {
  getEmployees,
  deleteEmployee
} from "./services/employeeService";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const fetchEmployees = async () => {
  const res = await getEmployees();
  const sortedData = res.data.sort((a, b) => a.id - b.id); // sort ascending by ID
  setEmployees(sortedData);
};


  const handleEdit = (emp) => {
    setSelectedEmployee(emp);
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchEmployees();
  };

  const clearSelection = () => setSelectedEmployee(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="app-container">
      <h1>Employee Management System</h1>
      <EmployeeForm
        selectedEmployee={selectedEmployee}
        refreshEmployees={fetchEmployees}
        clearSelection={clearSelection}
      />
      <EmployeeList
        employees={employees}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
