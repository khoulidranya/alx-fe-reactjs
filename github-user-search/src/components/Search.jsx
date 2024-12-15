// src/components/Search.jsx
import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";  // Import the fetchUserData function

const Search = () => {
  const [username, setUsername] = useState(""); // State to capture the username input
  const [userData, setUserData] = useState(null); // State for storing fetched user data
  const [loading, setLoading] = useState(false); // State for tracking the loading state
  const [error, setError] = useState(null); // State for error messages

  // Handle input changes
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  // Handle form submission to trigger search
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);    // Start loading
    setError(null);      // Clear any previous error messages
    setUserData(null);   // Clear previous user data

    try {
      const data = await fetchUserData(username); // Call the API to fetch user data
      setUserData(data); // Store the fetched data
    } catch (err) {
      // If an error occurs, set the error message
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div>
      {/* Search Form */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search GitHub user"
          value={username}
          onChange={handleInputChange}  // Update username state
        />
        <button type="submit">Search</button>
      </form>

      {/* Show loading message while API call is in progress */}
      {loading && <p>Loading...</p>}

      {/* Show error message if no user is found */}
      {error && <p>{error}</p>}  {/* This will display "Looks like we can't find the user" */}

      {/* Show user data if fetched successfully */}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h3>{userData.name}</h3>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
