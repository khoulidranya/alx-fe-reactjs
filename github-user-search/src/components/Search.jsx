// src/components/Search.jsx
import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";  // This imports the fetchUserData function

const Search = () => {
  const [username, setUsername] = useState(""); // State to hold the username input
  const [userData, setUserData] = useState(null); // State to hold the user data from the API
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State to handle errors

  // Handle input field change
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  // Handle form submission to trigger API call
  const handleSearch = async (e) => {
    e.preventDefault();  // Prevent default form submission behavior
    setLoading(true);     // Set loading state to true when API call starts
    setError(null);       // Clear any previous error messages
    setUserData(null);    // Clear any previous user data

    try {
      const data = await fetchUserData(username); // Fetch user data from GitHub API
      setUserData(data); // Store fetched data in state
    } catch (err) {
      setError("Looks like we can't find the user"); // Set error message if the user is not found
    } finally {
      setLoading(false); // Set loading to false once the request completes
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
          onChange={handleInputChange}  // Update the username state as user types
        />
        <button type="submit">Search</button>
      </form>

      {/* Loading state */}
      {loading && <p>Loading...</p>}

      {/* Error message */}
      {error && <p>{error}</p>}

      {/* Display user data if available */}
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
