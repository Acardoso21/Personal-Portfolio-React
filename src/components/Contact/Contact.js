import React, { useState } from 'react';
import './Contact.css';
// import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll just simulate form submission
    setSubmitted(true);
    console.log(formData);
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>
        I’d love to hear from you! Whether it's a project or a question, feel free to reach out:
      </p>
      {/* <div className="contact-links">
        <a href="mailto:contactme@andrecardoso.me" className="contact-link">
          <FaEnvelope /> Email
        </a>
        <a href="https://www.linkedin.com/in/andrecardoso" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/andrecardoso" target="_blank" rel="noopener noreferrer" className="contact-link">
          <FaGithub /> GitHub
        </a>
      </div> */}
      
      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      ) : (
        <p className="thank-you-message">Thank you for reaching out! I will get back to you soon.</p>
      )}
    </section>
  );
}

export default Contact;
