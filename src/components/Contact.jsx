'use client';
import { useState } from 'react';
import { contact } from '@/data/content';
import '@/styles/components.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>{contact.title}</h2>
            <p>{contact.subtitle}</p>
            
            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">📧</div>
                <div className="contact-detail-text">{contact.info.email}</div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">📱</div>
                <div className="contact-detail-text">{contact.info.phone}</div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon">📍</div>
                <div className="contact-detail-text">{contact.info.address}</div>
              </div>
            </div>

            <div className="contact-socials">
              {contact.socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="contact-social"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.name.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder={contact.form.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder={contact.form.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                className="form-textarea"
                placeholder={contact.form.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary form-submit">
              {contact.form.submitText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
