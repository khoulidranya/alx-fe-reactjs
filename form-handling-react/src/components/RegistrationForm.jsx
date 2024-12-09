import React, { useState } from "react";

const RegistrationForm = () => {
    // State for form data
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // State for error messages
    const [error, setError] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!username || !email || !password) {
            setError("All fields are required");
            return;
        }

        setError("");
        console.log("Form Submitted:", { username, email, password });
        alert("User Registered Successfully!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={username} // Controlled component
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={email} // Controlled component
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={password} // Controlled component
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
