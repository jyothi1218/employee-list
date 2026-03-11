import React, { useState } from "react";

const EmployeeState = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Total Employees: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Add Count
            </button>
        </div>
    );
};

export default EmployeeState;