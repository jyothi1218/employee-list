import React, { useState } from "react";

const AddEmployee = () => {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");

    const submit = (e) => {
        e.preventDefault();
        alert("Employee Name: " + name + " Role: " + role);
        setName("");
        setRole("");
    };

    return (
        <div>
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

export default AddEmployee;