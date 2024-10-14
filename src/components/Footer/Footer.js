// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Andre Cardoso. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="#!">LinkedIn</a></li>
          <li><a href="#!">GitHub</a></li>
          <li><a href="#!">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
