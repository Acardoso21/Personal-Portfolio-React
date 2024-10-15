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
      
      <section id="projectsSection" className="projects-section">
        <h2 data-aos="fade-up">Featured Projects</h2>
        <div className="projects-container">
          <div className="featured-project" data-aos="zoom-in-up">
            <h3>Twitter Wordle bot</h3> {/* Title moved to top */}
            <p>For this project, I developed a Twitter bot focused on analyzing Wordle-related tweets. I chose this project to enhance my data analysis skills using public data and gain experience with Twitter's developer tools. The bot scans tweets where users share their Wordle results, then calculates the average number of guesses required to solve the Wordle for each day. Additionally, it tracks how many green, yellow, and gray letters appear in each user's guesses.</p>
            <p>A custom-made algorithm was also developed to attempt solving the daily Wordle puzzle. The bot publishes the algorithm's success rate and compares it to the data collected from real Twitter users, providing an interesting benchmark of human versus algorithm performance. By combining various resources, including online articles and Twitter's documentation, I gained valuable insights into managing and analyzing large datasets while working with social media APIs.</p>
          </div>

          <div className="minor-projects">
            <div className="minor-project" data-aos="fade-right">
              <h4>Voron3d.Wiki</h4>
              <p>For this project, I deployed a self-hosted instance of Wiki.js for the Voron3D community. It provided a structured knowledge base for 3D printing enthusiasts. During the project, I gained experience with website analytics, learning how to track user engagement and improve content visibility. Additionally, I implemented a secure authentication system, deepening my understanding of access control and security protocols. This project enhanced my skills in website management and analytics while supporting a growing online community.</p>
            </div>
            <div className="minor-project" data-aos="fade-left">
              <h4>TicTacToe</h4>
              <p>During the COVID-19 pandemic, I embarked on one of my first personal projects: creating a Tic-Tac-Toe game. This project allowed me to program a computer opponent for the user to play against, which was a valuable learning experience as an early programmer. It helped me strengthen my problem-solving skills, practice implementing game logic, and understand the basics of human-computer interaction. This project laid a strong foundation for more complex programming challenges later on.</p>
            </div>
          </div>
        </div>
      </section>


      <section id="experienceSection" className="experience-section">
        <h2 data-aos="fade-up">Work Experience</h2>
        <div className="experience-container">
          <div className="featured-experience" data-aos="zoom-in-up">
            <h3>Cisco TAC Engineer</h3> {/* Title moved to top */}
            <p>In my role on the Webex TAC team, I honed my customer handling skills and developed a knack for swift problem-solving, enhancing customer satisfaction and service efficiency. I worked closely with customers to identify and resolve technical issues, ensuring minimal downtime and smooth operations.</p>
            <p>On the CUCM Call Manager team, I gained a deep understanding of IP phone systems, learning how to diagnose and troubleshoot complex issues related to Cisco's voice communication technologies. I set up virtual machines to replicate customer environments, allowing me to simulate and resolve issues quickly. This experience not only improved my technical expertise but also strengthened my ability to manage multiple cases simultaneously, prioritize tasks, and deliver solutions that improved customer experience.</p>
          </div>
          <div className="featured-experience" data-aos="zoom-in-up">
            <h3>Vodafone CI/CD Developer</h3> {/* Title moved to top */}
            <p>As a CI/CD software developer at Vodafone, I was responsible for automating code integration and deployment processes, significantly improving pipeline efficiency and quality. I utilized a range of DevOps tools to create automated workflows that reduced errors and manual intervention, ensuring rapid, reliable software releases.</p>
            <p>My role involved implementing continuous integration (CI) and continuous deployment (CD) pipelines, optimizing version control systems, and automating build and release processes. I collaborated closely with cross-functional teams to ensure seamless integration of code into production, resulting in faster delivery times and fewer deployment issues. This experience strengthened my ability to work in large-scale, high-pressure environments, delivering consistent and error-free results while driving the adoption of best practices in DevOps and automation.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
