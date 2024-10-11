// src/components/Home/Home.js
import React from 'react';
import { Typed } from 'react-typed'; // Ensure this is installed
import './Home.css';

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm [Your Name], a passionate <Typed
            strings={["Developer", "Designer", "Creator"]} // Place your Typed component here
            typeSpeed={50} // Speed of typing
            backSpeed={70} // Speed of backspacing
            loop // Loop the typing
          />.
        </p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
    </section>
  );
}

export default Home;
