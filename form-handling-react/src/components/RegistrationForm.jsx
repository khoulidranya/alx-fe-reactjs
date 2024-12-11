import React, { useState } from "react";

const RegistrationForm = () => {
    // State for form inputs
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // State for error messages
    const [errors, setErrors] = useState({});

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation logic
        const newErrors = {};
        if (!username) {
            newErrors.username = "Username is required.";
        }
        if (!email) {
            newErrors.email = "Email is required."; // Explicit check for email
        }
        if (!password) {
            newErrors.password = "Password is required."; // Explicit check for password
        }

        // If there are validation errors, update the `errors` state
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors); // Using setErrors to store validation messages
            return;
        }

        // If no errors, clear errors and proceed
        setErrors({});
        console.log("Form Submitted Successfully:", { username, email, password });
        alert("User Registered Successfully!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
            </div>
            <div>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
            <div>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
