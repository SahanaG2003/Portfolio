import React, { useState, useRef, useEffect } from 'react';
import './navbar.css';
import profileImg from '../assets/profile.jpg'; // adjust path if needed

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  // ✅ Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      {/* Logo with image */}
      <div className="logo-container">
        <img src={profileImg} alt="profile" />
        <div className="logo" style={{ fontFamily: 'Montserrat, sans-serif' }}>Sahana G</div>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Button and Hamburger */}
      <div className="nav-actions">
        <button className="btn">Hire Me</button>

        <div
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
