import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faProjectDiagram, faFileAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1 id="logo">Kyle He's Portfolio</h1>
        <nav>
          <ul>
            <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
            <li><Link to="/about"><FontAwesomeIcon icon={faUser} /> About</Link></li>
            <li><Link to="/projects"><FontAwesomeIcon icon={faProjectDiagram} /> Projects</Link></li>
            <li><Link to="/resume"><FontAwesomeIcon icon={faFileAlt} /> Resume</Link></li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;