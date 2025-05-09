import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaEnvelope, FaGitkraken, FaInstagram, FaGitSquare, FaLinkedin, FaAtom } from 'react-icons/fa';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">Sameer Dhanda</div>
      <ul className="nav-links">
        <li>
          <Link to="home" smooth={true} duration={500}>
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            <FaAtom /> Projects
          </Link>
        </li>
        <li>
          <Link to="resume" smooth={true} duration={500}>
            <FaUser /> Resume
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            <FaEnvelope /> Contact
          </Link>
        </li>
        <li>
          <a href="https://github.com/sd12354" target="_blank" rel="noopener noreferrer">
            <FaGitSquare />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/sameer_dhanda_" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sameer-dhanda-b97437224/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </nav>
  );
}
