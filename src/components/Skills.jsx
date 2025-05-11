import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React',
    'SQL', 'Python', 'Django',
  ];

  return (
    <div className="skills-container">
      <div className="skills-card">
        <h1>🚀 My Skills</h1>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skills-item">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
