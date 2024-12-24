import React, { useState } from 'react';
import './contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form verilerini işleme veya gönderme işlemi
    alert('Form Submitted');
  };

  return (
    <div className="contact-container">
      <main className="contact-main">
        <section className="contact-info">
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us using the form below.</p>
        </section>

        <section className="contact-form">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your name"
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
            />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Enter your message"
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="contact-footer">
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default Contact;
