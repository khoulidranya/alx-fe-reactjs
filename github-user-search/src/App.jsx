import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import fetchGitHubUser from './services/fetchGitHubUser';

const App = () => {
  const [userProfile, setUserProfile] = useState(null);

  const handleSearch = async (username) => {
    try {
      const userData = await fetchGitHubUser(username);
      setUserProfile(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {userProfile && (
        <div>
          <h2>User Profile</h2>
          <p>Name: {userProfile.name}</p>
          <p>Username: {userProfile.login}</p>
          {/* Add more profile details as needed */}
        </div>
      )}
    </div>
  );
};

export default App;