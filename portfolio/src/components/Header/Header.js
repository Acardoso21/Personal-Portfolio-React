import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';

const Header = () => {
  const location = useLocation();

  // Helper function to render scroll links based on the page
  const renderScrollLinks = (page) => {
    switch (page) {
      case '/':
        return (
          <>
            <ScrollLink to="heroSection" smooth={true} duration={500}>
              Home
            </ScrollLink>
            <ScrollLink to="projectsSection" smooth={true} duration={500}>
              Projects
            </ScrollLink>
            <ScrollLink to="contactSection" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </>
        );
      case '/about':
        return (
          <>
            <ScrollLink to="aboutSection1" smooth={true} duration={500}>
              Overview
            </ScrollLink>
            <ScrollLink to="aboutSection2" smooth={true} duration={500}>
              Team
            </ScrollLink>
            <ScrollLink to="aboutSection3" smooth={true} duration={500}>
              History
            </ScrollLink>
          </>
        );
      case '/projects':
        return (
          <>
            <ScrollLink to="projectsSection1" smooth={true} duration={500}>
              Web Projects
            </ScrollLink>
            <ScrollLink to="projectsSection2" smooth={true} duration={500}>
              Software Projects
            </ScrollLink>
            <ScrollLink to="projectsSection3" smooth={true} duration={500}>
              Open Source
            </ScrollLink>
          </>
        );
      case '/contact':
        return (
          <>
            <ScrollLink to="contactSection1" smooth={true} duration={500}>
              Contact Form
            </ScrollLink>
            <ScrollLink to="contactSection2" smooth={true} duration={500}>
              Location
            </ScrollLink>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="header">
      <div className="header-left">
        {/* Home Button/Label on the left */}
        <RouterLink to="/">Home</RouterLink>
      </div>

      <div className="header-center">
        {/* Dynamically render in-page scrolling links based on the current route */}
        {renderScrollLinks(location.pathname)}
      </div>

      <div className="header-right">
        {/* Permanent links in smaller font and settings button */}
        <RouterLink to="/about" className="small-link">About</RouterLink>
        <RouterLink to="/projects" className="small-link">Projects</RouterLink>
        <RouterLink to="/contact" className="small-link">Contact</RouterLink>
        <button className="settings-button" onClick={() => alert('Settings will be programmed later')}>
          ⚙️
        </button>
      </div>
    </nav>
  );
};

export default Header;
