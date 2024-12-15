// src/components/Search.jsx
import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Import the API service function

const Search = () => {
  const [username, setUsername] = useState(""); // State for username input
  const [location, setLocation] = useState(""); // State for location input
  const [minRepos, setMinRepos] = useState(""); // State for minimum repositories input
  const [userData, setUserData] = useState(null); // State for storing user data
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(null); // State for error message

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "location") {
      setLocation(value);
    } else if (name === "minRepos") {
      setMinRepos(value);
    }
  };

  // Handle form submission to trigger API call
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username, location, minRepos); // Fetch user data with advanced search criteria
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>
      
      {/* Search Form with Tailwind CSS styling */}
      <form onSubmit={handleSearch} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">GitHub Username</label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter GitHub username"
              value={username}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input
              id="location"
              name="location"
              type="text"
              placeholder="Enter location (optional)"
              value={location}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
            <input
              id="minRepos"
              name="minRepos"
              type="number"
              placeholder="Enter min repositories"
              value={minRepos}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering for Loading, Error, and Success */}
      {loading && <p className="text-center mt-4 text-blue-500">Loading...</p>}
      
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      {/* Display user data if the API call is successful */}
      {userData && (
        <div className="mt-6 text-center">
          <img src={userData.avatar_url} alt={userData.login} className="w-24 h-24 rounded-full mx-auto" />
          <h3 className="text-xl font-semibold mt-4">{userData.name || "No Name Available"}</h3>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-2 block">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
