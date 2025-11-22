//
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "../Styles/Navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#hero" className="logo">
          A.PURI{" "}
          {/* <span style={{ fontSize: "0.5em", verticalAlign: "super" }}>
            v2.0
          </span> */}
        </a>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {["about", "skills", "projects", "blog", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
    </nav>
  );
}
