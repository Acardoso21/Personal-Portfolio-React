// src/components/Home/mobile/HomeMobile.js

import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './HomeMobile.css'; // Import mobile-specific CSS

function HomeMobile() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-mobile" id="heroSection">
        <div className="hero-content-mobile">
          <h1>Welcome!</h1>
          <p>I'm Andre Cardoso</p>
          <ScrollLink to="aboutMESection" smooth={true} duration={500} className="cta-button-mobile">
            Learn More
          </ScrollLink>
        </div>
      </section>

      {/* About Me Section */}
      <section id="aboutMESection" className="about-me-section-mobile">
        <h2 data-aos="fade-up">About Me</h2>
        <div className="about-me-content-mobile" data-aos="fade-up">
          <p>
            I'm a Computer Engineering student with a passion for software development and a knack for quickly learning new technologies.
          </p>
          <p>
            Experienced in Python, C++, and Java, with hands-on experience at Cisco.
          </p>
          <p>
            Fluent in English, Portuguese, and Spanish.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projectsSection" className="projects-section-mobile">
        <h2 data-aos="fade-up">Projects</h2>
        <div className="project-item-mobile" data-aos="fade-up">
          <h3>Twitter Wordle Bot</h3>
          <p>
            Developed a bot analyzing Wordle tweets to calculate average guesses and track letter frequencies.
          </p>
        </div>
        <div className="project-item-mobile" data-aos="fade-up">
          <h3>Voron3d.Wiki</h3>
          <p>
            Deployed Wiki.js for the Voron3D community, enhancing website analytics and secure authentication skills.
          </p>
        </div>
        <div className="project-item-mobile" data-aos="fade-up">
          <h3>TicTacToe</h3>
          <p>
            Created a Tic-Tac-Toe game to strengthen problem-solving and understand game logic.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experienceSection" className="experience-section-mobile">
        <h2 data-aos="fade-up">Experience</h2>
        <div className="experience-item-mobile" data-aos="fade-up">
          <h3>Cisco TAC Engineer</h3>
          <p>
            Enhanced customer satisfaction through swift problem-solving on the Webex TAC team.
          </p>
        </div>
        <div className="experience-item-mobile" data-aos="fade-up">
          <h3>Vodafone CI/CD Developer</h3>
          <p>
            Automated code integration and deployment processes, improving pipeline efficiency at Vodafone.
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomeMobile;
