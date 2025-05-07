import React from 'react';
import { FaHome, FaUser, FaEnvelope, FaGit, FaInstagram, FaGitkraken } from 'react-icons/fa';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">Sameer Dhanda <span></span></div>
      <ul className="nav-links">
        <li><FaHome /> Home</li>
        <li><FaUser /> Projects</li>
        <li><FaUser /> Resume</li>
        <li><FaEnvelope /> Contact</li>
        <li><FaGitkraken /></li>
        <li><FaInstagram /></li>
      </ul>
    </nav>
  );
}
