import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Projects.css';

const ProjectCard = ({ title, description, technologies, repoUrl }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="technologies">
      {technologies.map((tech, index) => (
        <span key={index} className="tech-tag">{tech}</span>
      ))}
    </div>
    <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="repo-link">
      <FontAwesomeIcon icon={faGithub} /> View on GitHub
    </a>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React to showcase my projects and skills.",
      technologies: ["React", "CSS", "JavaScript", "HTML"],
      repoUrl: "https://github.com/yourusername/portfolio"
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;