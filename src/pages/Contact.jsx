import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaBook } from 'react-icons/fa'; // Import icons
import '../assets/styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  return (
    <div id='contact' className="contact-section">
      <div className="connect-links">
        <p className='mb-4 text-2xl text-yellow-600'>Connect with me:</p>
        <div className="connect-link-container mb-5">
          <a href="https://www.linkedin.com/in/farinattar/" target="_blank" rel="noopener noreferrer" className="connect-link">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/FARINATTAR" target="_blank" rel="noopener noreferrer" className="connect-link">
            <FaGithub size={30} />
          </a>
          {/* <a href="https://www.geeksforgeeks.org/user/farinatp6o1/" target="_blank" rel="noopener noreferrer" className="connect-link">
            <FaBook size={30} />
          </a> */}
          <a href="https://www.instagram.com/_farin_attar/?hl=en" target="_blank" rel="noopener noreferrer" className="connect-link">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>

      <div className="contact-header mt-10">
        <h2 style={{ marginTop: '40px' }}>Leave a message</h2>

        <p>We'd love to hear from you! Drop us a message and we'll get back to you ASAP.</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-container">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder=" "
            className="input-field"
          />
          <label className="input-label">Name</label>
        </div>

        <div className="input-container">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder=" "
            className="input-field"
          />
          <label className="input-label">Email</label>
        </div>

        <div className="input-container">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder=" "
            className="input-field"
          />
          <label className="input-label">Message</label>
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
