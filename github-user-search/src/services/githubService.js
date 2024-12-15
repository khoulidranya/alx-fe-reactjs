import axios from "axios";

// Function to fetch user data from GitHub with search parameters
export const fetchUserData = async (username, location = '', minRepos = 0) => {
  try {
    // Construct the search query with parameters
    let query = `q=${username}`;
    
    if (location) {
      query += `+location:${location}`;
    }
    
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // Make the API request to search for users based on the query
    const response = await axios.get(`https://api.github.com/search/users?q={query}`);

    // Return the data from the response
    return response.data.items; // This will be an array of user objects
  } catch (error) {
    // If there's an error, throw a specific message
    throw new Error("Looks like we can't find the user");
  }
};
