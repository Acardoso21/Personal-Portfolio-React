// src/components/Home/Home.js
import React from 'react';
// import Typed from 'react-typed'; // Import Typed correctly
import './Home.css';

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm Andre Cardoso, a passionate {' Developer'}
          {/* <Typed
            strings={['Developer', 'Designer', 'Creator']} // Typing effect for these words
            typeSpeed={50}
            backSpeed={70}
            loop
          /> */}
        </p>
        <a href="#projects" className="cta-button">
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Home;
