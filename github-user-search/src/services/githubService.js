// services/githubService.js

import axios from 'axios';

const githubService = {
  fetchUserData: async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  },
};

export default githubService;