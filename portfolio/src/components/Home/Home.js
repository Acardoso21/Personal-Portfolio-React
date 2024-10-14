import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './Home.css';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" id="heroSection">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>
            Hi, I'm Andre Cardoso, a passionate {' Developer'}
          </p>
          <ScrollLink to="projectsSection" smooth={true} duration={500} className="cta-button">
            View My Work
          </ScrollLink>
        </div>
      </section>

      <section id="projectsSection" className="projects-section">
        <h2 data-aos="fade-up">Featured Projects</h2>
        <div className="projects-container">
          <div className="featured-project" data-aos="zoom-in-up">
            <h3>Major Project</h3> {/* Title moved to top */}
            <p>This project showcases my work on a full-stack application using React and Node.js. The application has real-time data updates, user authentication, and more.</p>
          </div>

          <div className="minor-projects">
            <div className="minor-project" data-aos="fade-right">
              <h4>Minor Project 1</h4>
              <p>This is a simple, responsive portfolio site built with HTML, CSS, and JavaScript.</p>
            </div>
            <div className="minor-project" data-aos="fade-left">
              <h4>Minor Project 2</h4>
              <p>An open-source Python library that I developed to automate file handling tasks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="aboutMESection" className="about-me-section">
        <h2 data-aos="fade-up">About Me</h2>
        <div className="about-me-content">
          <div className="about-left" data-aos="fade-right">
            <p>
              I'm Andre Cardoso, a Computer Engineering student at Northeastern University with a strong foundation in software development and a proven ability to learn new technologies quickly. My technical skills include proficiency in Python, C++, and Java, and I've gained hands-on experience through technical consulting at <strong>Cisco</strong>.
            </p>
            <p>
              In addition to my technical background, I've demonstrated leadership skills through my role as a <strong>stage manager</strong> in theater, which has honed my organizational and teamwork abilities. I'm fluent in English, Portuguese, and Spanish, allowing me to navigate diverse environments with ease.
            </p>
          </div>
          <div className="about-right" data-aos="fade-left">
            <p>
              I was born in Lisbon, Portugal, and lived there for the first five years of my life. My family then relocated to New York City due to my father’s job, where I grew up. After living in New York with my family, I moved to Boston to pursue my studies at Northeastern University. I'm currently taking a sabbatical from school to reflect and decide on my next challenge.
            </p>
            <p>
              I'm excited to explore new opportunities where I can leverage my technical skills and diverse experiences to make an impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
