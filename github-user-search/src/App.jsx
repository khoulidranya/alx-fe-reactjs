// App.jsx

import React, { useState } from 'react';
import Search from './components/Search';
import githubService from './services/githubService';

function App() {
  const [userData, setUserData] = useState(null);

  const handleSearch = async (username) => {
    try {
      const userData = await githubService.fetchUserData(username);
      setUserData(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt={userData.name} />
          <h2>{userData.name}</h2>
          <a href={userData.html_url}>View Profile</a>
        </div>
      )}
    </div>
  );
}

export default App;