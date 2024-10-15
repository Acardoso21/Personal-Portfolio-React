import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Andre Cardoso. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="mailto:contactme@andrecardoso.me" className="contact-link">
            <FaEnvelope size={24} /> Email
          </a></li>
          <li><a href="https://www.linkedin.com/in/andre-cardoso-/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaLinkedin size={24} /> LinkedIn
          </a></li>
          <li><a href="https://github.com/acardoso21" target="_blank" rel="noopener noreferrer" className="contact-link">
            <FaGithub size={24} /> GitHub
          </a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
