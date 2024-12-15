// src/components/Search.jsx
import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Import the API service function

const Search = () => {
  const [username, setUsername] = useState(""); // State for username input
  const [location, setLocation] = useState(""); // State for location input
  const [minRepos, setMinRepos] = useState(""); // State for minimum repositories input
  const [userData, setUserData] = useState([]); // State for storing a list of user data
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
    setUserData([]); // Reset userData when searching again

    try {
      const data = await fetchUserData(username, location, minRepos); // Fetch user data with advanced search criteria
      setUserData(Array.isArray(data) ? data : [data]); // Ensure it's an array even for a single user
    } catch (err) {
      setError("Looks like we cant find the user");
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

      {/* Use .map() to display list of users */}
      {userData.length > 0 && (
        <div className="mt-6 space-y-4">
          {userData.map((user) => (
            <div key={user.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center">
                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{user.name || "No Name Available"}</h3>
                  <p className="text-sm text-gray-500">{user.location || "No location available"}</p>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
