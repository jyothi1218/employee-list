import React, { useState } from "react";

const EmployeeList = () => {

  const [employees, setEmployees] = useState([
    { id: 1, name: "Ravi", role: "Manager" },
    { id: 2, name: "Priya", role: "Developer" }
  ]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: employees.length + 1,
      name: name,
      role: role
    };

    setEmployees([...employees, newEmployee]);

    setName("");
    setRole("");
  };

  return (
    <div>

      <h2>Total Employees: {employees.length}</h2>

      <h2>Employee List</h2>

      {employees.map((emp) => (
        <p key={emp.id}>
          {emp.name} - {emp.role}
        </p>
      ))}

      <h2>Add Employee</h2>

      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Enter Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

    </div>
  );
};

export default EmployeeList;