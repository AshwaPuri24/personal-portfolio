//
import { FaCode, FaServer } from "react-icons/fa";
import "../Styles/About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Crew Profile</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">:: BIOMETRIC DATA LOADED ::</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-heading">Designation: Full Stack Developer</h3>
            <p className="about-description">
              &gt;&gt; IDENTITY: Ashwani Kumar Puri
              <br />
              &gt;&gt; ORIGIN: New Delhi, India
              <br />
              &gt;&gt; MISSION: Engineering robust web applications with Java
              Spring Boot and React.
            </p>
            <p className="about-description">
              My journey in the tech cosmos began with a Bachelor's in Computer
              Applications. I specialize in navigating complex backend systems
              and constructing high-performance frontend interfaces. I approach
              every mission with laser focus on clean, maintainable code.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Missions</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Efficiency</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Online</span>
              </div>
            </div>
          </div>

          <div className="about-skills">
            <h4 className="skills-title">OPERATIONAL MODULES</h4>
            <div className="skills-grid-vertical">
              <div className="skill-card">
                <div className="skill-icon">
                  <FaCode />
                </div>
                <h5 className="skill-title">Frontend Systems</h5>
                <p className="skill-description">
                  React, HTML5, CSS3, Modern JavaScript
                </p>
              </div>

              <div className="skill-card">
                <div className="skill-icon">
                  <FaServer />
                </div>
                <h5 className="skill-title">Backend Core</h5>
                <p className="skill-description">
                  Java Spring Boot, Node.js Architectures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
