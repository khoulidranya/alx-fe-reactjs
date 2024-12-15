// App.jsx

import React, { useState } from 'react';
import Search from './components/Search';
import githubService from './services/githubService';

function App() {
  const [userData, setUserData] = useState(null);

  const handleSearch = (data) => {
    setUserData(data);
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt={userData.login} />
          <h2>{userData.login}</h2>
          <a href={`https://github.com/${userData.login}`} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      )}
    </div>
  );
}

export default App;
