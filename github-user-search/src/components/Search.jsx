// components/Search.jsx

import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.get(`https://api.github.com/users/${inputValue}`);
      onSearch(response.data);
    } catch (err) {
      setError('Looks like we can\'t find the user');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button type="submit">Search</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Search;
