// src/components/Home/Home.js
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Home.css';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" id="heroSection">
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
          {/* Use ScrollLink for smooth scrolling to the Projects section */}
          <ScrollLink to="projectsSection" smooth={true} duration={500} className="cta-button">
            View My Work
          </ScrollLink>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projectsSection" style={{ height: '100vh', backgroundColor: '#e0e0e0' }}>
        <h2>My Projects</h2>
        {/* Add your project cards or content here */}
      </section>

      {/* Contact Section */}
      <section id="contactSection" style={{ height: '100vh', backgroundColor: '#d0d0d0' }}>
        <h2>Contact Me</h2>
        {/* Add your contact form or details here */}
      </section>
    </div>
  );
}

export default Home;
