import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Protected Routes with Nested Routes */}
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <Routes>
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
              </Routes>
            </ProtectedRoute>
          }
        />

        {/* Dynamic Route for Blog Post */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Add this route if needed */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
