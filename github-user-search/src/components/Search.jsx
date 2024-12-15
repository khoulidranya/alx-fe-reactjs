// src/components/Search.jsx
import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";  // Import the API service function

const Search = () => {
  const [username, setUsername] = useState("");  // State to hold the username input
  const [userData, setUserData] = useState(null);  // State to hold the fetched user data
  const [loading, setLoading] = useState(false);  // State to track the loading status
  const [error, setError] = useState(null);  // State to handle any error messages

  // Handle input field changes
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  // Handle form submission to trigger the API call
  const handleSearch = async (e) => {
    e.preventDefault();  // Prevent default form submission behavior
    setLoading(true);     // Set loading to true to show loading message
    setError(null);       // Reset any previous error message
    setUserData(null);    // Reset previous user data

    try {
      const data = await fetchUserData(username);  // Fetch user data from GitHub API
      setUserData(data);  // Store the fetched user data in state
    } catch (err) {
      setError("Looks like we cant find the user");  // Set error message if the user is not found
    } finally {
      setLoading(false);  // Set loading to false once the request is completed
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
          onChange={handleInputChange}  // Update the username state as the user types
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional Rendering for Loading, Error, and Success */}
      {loading && <p>Loading...</p>}  {/* Display loading message while fetching data */}
      
      {error && <p>{error}</p>}  {/* Display error message if the API call fails */}

      {/* Display user data if the API call is successful */}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h3>{userData.name || "No Name Available"}</h3>  {/* Display name or fallback text */}
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
