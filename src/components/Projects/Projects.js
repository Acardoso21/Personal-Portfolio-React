import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      name: "Project 1",
      description: "A cool project built with React.",
      link: "https://github.com/your-username/project-1"
    },
    {
      name: "Project 2",
      description: "Another project using Node.js and Express.",
      link: "https://github.com/your-username/project-2"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
