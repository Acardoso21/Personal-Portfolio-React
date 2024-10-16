import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Helper function to render scroll links based on the page
  const renderScrollLinks = (page) => {
    switch (page) {
      case '/':
        return (
          <>
            <ScrollLink to="heroSection" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              Home
            </ScrollLink>
            <ScrollLink to="aboutMESection" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              About Me
            </ScrollLink>
            <ScrollLink to="projectsSection" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
              Projects
            </ScrollLink>
            <ScrollLink to="experienceSection" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
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

      <div className="header-center">
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
    </nav>
  );
};

export default Header;
