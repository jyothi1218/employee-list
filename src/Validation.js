import React, { useState } from "react";

const Validation = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const submit = (e) => {
        e.preventDefault();

        if (!email.includes("@")) {
            setError("Invalid Email");
        } else {
            setError("");
            alert("Form Submitted Successfully");
        }
    };

    return (
        <div>
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Validation;