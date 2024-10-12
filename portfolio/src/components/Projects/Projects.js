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
      name: "TicTacToe Python",
      description: "One of my very first projects in python was creating a game of tictactoe with a cli based GUI where the user would play verses the computer.",
      link: "https://github.com/Acardoso21/TicTacToe/blob/main/tiktactoe_V2.py"
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
