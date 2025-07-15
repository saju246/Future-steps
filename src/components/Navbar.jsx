import React, { useState } from 'react';
import Logo from '../assets/Logo-future-steps.png';
import './Navbar.css';

function Navbar({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (section) => {
    scrollToSection(section);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#">
        <img className="navbar-logo" src={Logo} alt="Future Steps" />
        </a>

        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><button onClick={() => handleScroll('home')}>Home</button></li>
          <li><button onClick={() => handleScroll('about')}>About Us</button></li>
          <li><button onClick={() => handleScroll('programs')}>Programs</button></li>
          <li><button onClick={() => handleScroll('courses')}>Courses</button></li>
          <li><button onClick={() => handleScroll('admission')}>Admission</button></li>
          <li><button onClick={() => handleScroll('contact')}>Contact Us</button></li>

         
          <li className="mobile-call">
            <a href="tel:+971505280523" className="mobile-call-btn">Call Now</a>
          </li>
        </ul>

        
        <button
          className="navbar-call"
          onClick={() => window.location.href = 'tel:+971505280523'}
        >
          Call Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
