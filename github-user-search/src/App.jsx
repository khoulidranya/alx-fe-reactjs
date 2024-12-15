// src/App.js
import React from "react";
import Search from "./components/Search";
// src/index.js (or src/main.js or App.js, depending on your project setup)
import './index.css';  // Make sure this line is added to import Tailwind CSS styles


const App = () => {
  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search />
    </div>
  );
};

export default App;
