import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import project2Image from '../assets/Project2.png';
import project1Image from '../assets/Project1.png';
import '../styles/Projects.css';

const ProjectCard = ({ title, description, technologies, repoUrl, image }) => (
  <div className="project-card">
    <div className="project-image">
      <img src={image} alt={title} />
    </div>
    <div className="project-content">
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
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React to showcase my projects and skills.",
      technologies: ["React", "CSS", "JavaScript", "HTML"],
      repoUrl: "https://github.com/kylehe77/PersonalPortfolio",
      image: project1Image
    },
    {
      title: "Handwritten-Recognition Application",
      description: "This ia a project required us to design and implement a application that recognizes handwritten digits and English letters. This application was bulit as the Project 1 for COMPSYS 302 of University of Auckland.",
      technologies: ["Python", "PyQt5", "Pytorch", "NumPy","OpenCV", "PIL"],
      repoUrl: "https://github.com/kylehe77/Handwritten-Recognition",
      image: project2Image
    },
    {
      title: "Handwritten-Recognition Application",
      description: "This ia a project required us to design and implement a application that recognizes handwritten digits and English letters. This application was bulit as the Project 1 for COMPSYS 302 of University of Auckland.",
      technologies: ["Python", "PyQt5", "Pytorch", "NumPy","OpenCV", "PIL"],
      repoUrl: "https://github.com/kylehe77/Handwritten-Recognition",
      image: project2Image
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