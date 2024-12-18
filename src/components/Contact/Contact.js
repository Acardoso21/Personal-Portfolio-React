import React, { useState } from 'react';
import { FaCheckCircle,FaEnvelope } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Use the environment variable for the Formspree endpoint
  const formspreeEndpoint = process.env.REACT_APP_FORMSPREEIO;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
        } else {
          setError('There was an issue with your submission, please try again.');
        }
      })
      .catch(() => setError('There was an error submitting the form.'));
  };

  return (
    <section id="contact" className="contact">
      <div className="text-banner">
        <div className='text-card'>
          <h2>Contact Me</h2>
          <p>
            I’d love to hear from you! Whether it's a project or a question, feel free to reach out:
          </p>
        </div>
      </div>
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
        <div className='thank-you-card'>
          <p className="thank-you-message">
            <FaCheckCircle className="success-icon" /> Thank you for reaching out!<br />
            I will get back to you soon.
          </p>
        </div>
      )}

      {error && <div className="error-card">
        <p className="error-message">
          Sorry, there seems to be a problem with this form, Please try emailing.
        </p> 
        <button href="mailto:contactme@andrecardoso.me" className="contact-link">
            <FaEnvelope size={24} />
        </button>
          </div>}

    </section>
  );
}

export default Contact;