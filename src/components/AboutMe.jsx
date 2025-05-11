import React from 'react';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-card glass-effect">
        <img
          src="https://static.vecteezy.com/system/resources/previews/045/711/185/non_2x/male-profile-picture-placeholder-for-social-media-forum-dating-site-chat-operator-design-social-profile-template-default-avatar-icon-flat-style-free-vector.jpg"
          alt="Anil Navik"
          className="profile-img"
        />
        <div className="about-me-content">
          <h1>👨‍💻 Anil Navik</h1>
          <h3>Full Stack Web Developer</h3>
          <p>
          I'm Anil Navik a Full Stack Python Developer who interact turning ideas into functional web application. I have
          knowledge in Python and Django in backend and I'm comfortable with front-end technologies like HTML,
          CSS, JavaScript and React Js. Eager to contribute my skills and knowledge to deliver innovative solutions and
          drive organizational success
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
