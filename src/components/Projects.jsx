import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-card">
        <h2>Healthcare Appointment System</h2>
        <p>
          A full-featured appointment booking web app built with Django. Includes user
          authentication, doctor/patient dashboards, and email verification.
        </p>
        <div className="project-links">
          <a href="#"  rel="noopener noreferrer">Live Demo</a>
          <a href="#"  rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <div className="project-card">
        <h2>News Portal App</h2>
        <p>
          A React JS news portal built with Vite. Features category filtering, search,
          dark mode, and responsive design using React Bootstrap and Axios.
        </p>
        <div className="project-links">
          <a href="#"  rel="noopener noreferrer">Live Demo</a>
          <a href="#"  rel="noopener noreferrer">GitHub</a>
        </div>
      </div>

      <div className="project-card">
        <h2>Quiz App</h2>
        <p>
          A fun and interactive quiz application using React. Displays score, handles
          questions dynamically, and is mobile-friendly.
        </p>
        <div className="project-links">
          <a href="#"  rel="noopener noreferrer">Live Demo</a>
          <a href="#"  rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
