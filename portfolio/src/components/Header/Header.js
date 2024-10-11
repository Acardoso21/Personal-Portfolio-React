import React from 'react';
import './Header.css'; // You can create this CSS file for styling the header.

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
