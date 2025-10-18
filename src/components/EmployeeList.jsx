const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="list-container">
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
  <tr key={emp.id}>
    <td>{index + 1}</td>  {/* This shows 1,2,3,... continuously */}
    <td>{emp.name}</td>
    <td>{emp.email}</td>
    <td>{emp.department}</td>
    <td>
      <button onClick={() => onEdit(emp)}>Edit</button>
      <button onClick={() => onDelete(emp.id)}>Delete</button>
    </td>
  </tr>
))}

          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeList;
