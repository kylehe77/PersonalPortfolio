import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Designed and Developed by Kyle He</p>
        <p>Copyright © {new Date().getFullYear()} KH</p>
        <div className="social-links1">
            <a href="https://github.com/kylehe77" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/tianhua-he/" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <FaLinkedin />
            </a>
            <a href="mailto:kylehe77@gmail.com" onClick={(e) => e.stopPropagation()}>
              <FaEnvelope />
            </a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;