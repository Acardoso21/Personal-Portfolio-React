// src/components/About/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          I'm Andre Cardoso, a Computer Engineering student at Northeastern University with a strong foundation in software development and a proven ability to learn new technologies quickly. My technical skills include proficiency in Python, C++, and Java, and I've gained hands-on experience through technical consulting at Cisco.
        </p>
        <p>
          In addition to my technical background, I've demonstrated leadership skills through my role as a stage manager in theater, which has honed my organizational and teamwork abilities. I'm fluent in English, Portuguese, and Spanish, allowing me to navigate diverse environments with ease.
        </p>
        <p>
          I was born in Lisbon, Portugal, and lived there for the first five years of my life. My family then relocated to New York City due to my father’s job, where I grew up. After living in New York with my family, I moved to Boston to pursue my studies at Northeastern University. I'm currently taking a sabbatical from school to reflect and decide on my next challenge.
        </p>
        <p>
          I'm excited to explore new opportunities where I can leverage my technical skills and diverse experiences to make an impact.
        </p>
      </div>
    </section>
  );
}

export default About;
