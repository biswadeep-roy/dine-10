import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="social-media">
          <a
            href="https://github.com/biswadeep-roy"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
          >
            <img
              src="images/github.png"
              alt="GitHub"
              className="social-media-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/biswadeep-roy-022804219/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
          >
            <img
              src="images/linkdin.png"
              alt="LinkedIn"
              className="social-media-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/your-instagram-link"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-link"
          >
            <img
              src="images/insta.png"
              alt="Instagram"
              className="social-media-icon"
            />
          </a>
          <a
            href="mailto:biswadeeproy1230@gmail.com"
            className="social-media-link"
          >
            <img
              src="images/email.png"
              alt="Email"
              className="social-media-icon"
            />
          </a>
        </div>
        <div className="copyright">
          <p>&copy; 2023 Dine 10. All Rights Reserved.</p>
          <p>Designed by biswadeep-roy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
