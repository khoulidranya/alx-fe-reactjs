// src/queries/posts.js

// Centralized API URL
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Fetch function
export const fetchPosts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
