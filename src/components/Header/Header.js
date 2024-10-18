import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const renderScrollLinks = (page) => {
    switch (page) {
      case '/':
        return (
          <>
            <ScrollLink to="aboutMESection" smooth={true} duration={1} onClick={() => setMenuOpen(false)}>
              About Me
            </ScrollLink>
            <ScrollLink to="projectsSection" smooth={true} duration={1} onClick={() => setMenuOpen(false)}>
              Projects
            </ScrollLink>
            <ScrollLink to="experienceSection" smooth={true} duration={1} onClick={() => setMenuOpen(false)}>
              Experience
            </ScrollLink>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <nav className={`header ${isMenuOpen ? 'open' : ''}`}>
      <div className="header-left">
        <RouterLink to="/">Home</RouterLink>
      </div>

      {/* Show scroll links for larger screens */}
      <div className={`header-center ${isMenuOpen ? 'active' : ''}`}>
        {renderScrollLinks(location.pathname)}
      </div>

      <div className="header-right">
        <RouterLink to="/contact" className="small-link">Contact</RouterLink>
        <button className="settings-button" onClick={() => alert('Settings will be programmed later')}>
          ⚙️
        </button>
      </div>

      {/* Hamburger Menu Toggle for Mobile */}
      <button className="hamburger" onClick={() => setMenuOpen(!isMenuOpen)}>
        ☰
      </button>

      {/* Conditionally render links for mobile */}
      {isMenuOpen && (
        <div className="dropdown">
          {renderScrollLinks(location.pathname)}
          <RouterLink to="/contact" className="small-link" onClick={() => setMenuOpen(false)}>Contact</RouterLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
