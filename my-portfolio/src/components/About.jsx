import React from 'react';
import { 
  SiC, 
  SiJavascript, 
  SiCss3, 
  SiHtml5, 
  SiCsharp, 
  SiDotnet, 
  SiPython, 
  SiGit, 
  SiReact,
  SiOpenjdk // We'll use this for Java
} from 'react-icons/si';
import profilePIC from '../assets/profilePic.jpg';
import '../styles/About.css';

const About = () => {
  const skills = [
    { name: 'C', icon: SiC },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'CSS', icon: SiCss3 },
    { name: 'HTML', icon: SiHtml5 },
    { name: 'C#', icon: SiCsharp },
    { name: '.NET', icon: SiDotnet },
    { name: 'Python', icon: SiPython },
    { name: 'Git', icon: SiGit },
    { name: 'Java', icon: SiOpenjdk },
    { name: 'React', icon: SiReact },
  ];

  return (
    <section className="about-section">
      <div className="about-content">
        <div className="personal-info">
          <h2 className="section-title">About Me</h2>
          <img src={profilePIC} alt="Kyle He" className="profile-picture" />
          <h3 className="name">Kyle He</h3>
          <p className="tagline">Computer Systems Graduate & Full Stack Developer</p>
          <p className="bio">
            As a recent graduate in Computer Systems with a passion for full-stack development,
            I bring a fresh perspective and a strong foundation in various programming languages
            and technologies. My academic background, combined with hands-on project experience,
            has equipped me with the skills to tackle complex challenges in software development.
          </p>
          <p className="bio">
            I'm enthusiastic about creating efficient, user-friendly applications and am always
            eager to learn and adapt to new technologies. My goal is to contribute to innovative
            projects that make a positive impact on people's lives through technology.
          </p>
        </div>

        <div className="skills-section">
          <h3 className="skills-title">Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <skill.icon className="skill-icon" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;