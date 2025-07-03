import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-links">
        <a href="mailto:sahanag2809@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
        <a href="tel:+918296781247" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPhone} /> Phone
        </a>
        <a href="https://www.linkedin.com/in/sahana-g-953443224/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a href="https://github.com/SahanaG2003" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="https://www.instagram.com/_idle_minds?igsh=NnNoZjBlYjJneG5n" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
        <a href="https://www.youtube.com/@idle_minds2709" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} /> YouTube
        </a>
      </div>
    </section>
  );
}

export default Contact;
