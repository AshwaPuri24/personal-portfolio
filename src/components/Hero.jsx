//
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import "../Styles/Hero.css";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-greeting">:: SYSTEM ONLINE ::</span>
            <h1 className="hero-name">Ashwani Kumar Puri</h1>

            <div className="hero-subtitle">
              <TypeAnimation
                sequence={[
                  "> Full Stack Engineer",
                  1500,
                  "> Space Enthusiast",
                  1500,
                  "> React / Java Expert",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontFamily: "monospace" }} // Monospace for terminal look
                repeat={Infinity}
              />
            </div>

            <p className="hero-description">
              Mission Status: Building scalable web applications using Java
              Spring Boot and React. Specialized in secure backend systems and
              high-performance frontend interfaces.
            </p>
          </div>

          <div className="hero-actions">
            <a href="#contact" className="hero-btn primary">
              Init Communication
            </a>
            <a href="assets/Resume.pdf" download className="hero-btn secondary">
              <FaFileDownload /> Download Data
            </a>
          </div>

          {/* Optional: Add social links styled as small data buttons here if desired */}
        </div>

        <div className="hero-image">
          <div className="profile-image-wrapper">
            <img
              src="assets/profile-photo.png"
              alt="Ashwani Kumar Puri"
              className="profile-image"
            />
            <div className="image-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
