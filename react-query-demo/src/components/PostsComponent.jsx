// src/components/PostsComponent.jsx

import React from 'react';
import { useQuery } from 'react-query';

const PostsComponent = () => {
  // Fetch posts directly using the API endpoint
  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return response.json();
  };

  // Use React Query's useQuery hook with custom options
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 10, // Cache data for 10 minutes
    staleTime: 1000 * 60 * 5,  // Mark data as fresh for 5 minutes
    refetchOnWindowFocus: false, // Disable refetching on window focus
    keepPreviousData: true,     // Keep the previous data while fetching new data
  });

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
