import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add styles

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Ryan Pyles</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
