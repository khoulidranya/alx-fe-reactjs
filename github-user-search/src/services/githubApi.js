import axios from "axios";

const BASE_URL = "https://api.github.com";

// Fetch user data by username
export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
