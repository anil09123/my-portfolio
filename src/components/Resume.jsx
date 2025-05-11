import React from 'react';
import '../styles/Resume.css';
import resumePdf from '../assets/Anil_Navik.pdf';

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-card">
        <h1>📄 My Resume</h1>
        <p>If you’d like to learn more about my work experience and skills, feel free to download my resume below.</p>
        <a 
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer" 
          download 
          className="download-btn"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
