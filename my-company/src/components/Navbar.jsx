import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#f8f9fa", // Light background color
        display: "flex",           // Flexbox for layout
        justifyContent: "center",  // Center-align links
        padding: "10px",           // Padding around the nav
        borderBottom: "1px solid #ccc" // Bottom border
      }}
    >
      <Link to="/" style={{ margin: "0 15px", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/about" style={{ margin: "0 15px", textDecoration: "none" }}>
        About
      </Link>
      <Link to="/services" style={{ margin: "0 15px", textDecoration: "none" }}>
        Services
      </Link>
      <Link to="/contact" style={{ margin: "0 15px", textDecoration: "none" }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
