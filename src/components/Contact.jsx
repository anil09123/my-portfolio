import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Me</h1>
        <form>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Your Email" />
          </div>

          <div className="form-group">
            <label>Message:</label>
            <textarea placeholder="Your Message"></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;