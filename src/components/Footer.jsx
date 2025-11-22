//
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../Styles/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3 className="footer-logo">ASHWA.SYSTEMS</h3>
          <p className="footer-tagline">// END OF TRANSMISSION //</p>

          <div className="footer-social">
            <a
              href="https://github.com/AshwaPuri24"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Star Map"
            >
              <FaGithub className="social-icon" />
            </a>
            <a
              href="https://linkedin.com/in/ashwani-kumar-puri"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Frequency"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://twitter.com/#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Comms"
            >
              <FaTwitter className="social-icon" />
            </a>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              &copy; {currentYear} Ashwani Kumar Puri. All Systems Nominal.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
