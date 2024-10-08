import React from 'react';
import { Typed } from 'react-typed';
import './Home.css';

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm [Your Name], a passionate <Typed
            strings={["Web Developer", "Designer", "Content Creator"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />.
        </p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
    </section>
  );
}

export default Home;
