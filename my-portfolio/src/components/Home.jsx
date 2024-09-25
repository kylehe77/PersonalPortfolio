import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Home.css';
import homePageImageGif from '../assets/homePageImage.gif';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "A Computer Systems Graduate & Full Stack Developer";

  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        setTimeout(() => setText(fullText.slice(0, text.length + 1)), 100);
      } else {
        setIsTyping(false);
      }
    } else {
      if (text.length > 0) {
        setTimeout(() => setText(text.slice(0, -1)), 50);
      } else {
        setIsTyping(true);
      }
    }
  }, [text, isTyping]);

  const navigate = useNavigate();
  const goToProjects = () => {
    navigate('/projects');
  };

  return (
    <section className="home">
      {/* Flex container for intro text and image */}
      <div className="intro-container">
        <div className="intro">
          <h1 className="intro-text">Hi There! <span className="wave">👋</span></h1>
          <h2 className="intro-text name">I'm <span className="highlight">Kyle He</span></h2>
          <p className="intro-text role">{text}<span className="cursor">|</span></p>

          <div className="social-links">
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

          <button className="cta-button" onClick={goToProjects}>View My Projects</button>
        </div>

        <div className="image-gif">
          <img src={homePageImageGif} alt="Kyle He" className="homepage-image" />
        </div>

      </div>
    </section>
  );
};

export default Home;
