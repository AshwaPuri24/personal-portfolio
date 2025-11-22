import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "../Styles/SocialSidebar.css";

export default function SocialSidebar() {
  return (
    <div className="social-sidebar">
      <ul className="social-list">
        <li className="social-item">
          <a
            href="https://github.com/AshwaPuri24"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="social-icon-side" />
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://linkedin.com/in/ashwani-kumar-puri"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="social-icon-side" />
          </a>
        </li>
        <li className="social-item">
          <a
            href="https://twitter.com/#"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="social-icon-side" />
          </a>
        </li>
        <li className="social-item">
          <a href="mailto:puriashwa886@gmail.com" aria-label="Email">
            <FaEnvelope className="social-icon-side" />
          </a>
        </li>
      </ul>
      <div className="social-line"></div>
    </div>
  );
}
