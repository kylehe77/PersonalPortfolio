import React from 'react';
import '../styles/Resume.css';
import resumePdf from '../assets/Tianhua_HE_Resume.pdf';

const Resume = ({ pdfUrl }) => {
  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      <div className="pdf-embed">
        <iframe
          src={resumePdf}
          title="My Resume"
          width="100%"
          height="600"
        ></iframe>
      </div>
      <div className="download-link">
        <a href={resumePdf} download className="download-button">
          <span className="download-icon">&#8595;</span>
          Download Resume
        </a>
      </div>
    </div>
  );
};


export default Resume;