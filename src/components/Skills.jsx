import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import {
  FaReact,
  FaJava,
  FaDatabase,
  FaCodeBranch,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiGit,
} from "react-icons/si";
import "../Styles/Skills.css";

// Helper to map database names to icons
const getIcon = (name) => {
  // Fixed typo here: removed "CX"
  const lowerName = name.toLowerCase();
  if (lowerName.includes("react")) return <FaReact />;
  if (lowerName.includes("java") && !lowerName.includes("script"))
    return <FaJava />;
  if (lowerName.includes("script")) return <SiJavascript />;
  if (lowerName.includes("spring")) return <SiSpringboot />;
  if (lowerName.includes("html")) return <SiHtml5 />;
  if (lowerName.includes("css")) return <SiCss3 />;
  if (lowerName.includes("sql") || lowerName.includes("data"))
    return <FaDatabase />;
  if (lowerName.includes("git")) return <SiGit />;
  return <FaLaptopCode />; // Default icon
};

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "skills"));
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };
    fetchSkills();
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">System Diagnostics</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">:: TECHNICAL ARSENAL ::</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card-tech">
              <div className="tech-header">
                <h3 className="tech-name">{skill.name}</h3>
                <div className="tech-icon">{getIcon(skill.name || "")}</div>
              </div>

              <div className="energy-bar-container">
                <div
                  className="energy-fill"
                  style={{ width: skill.level }}
                ></div>
              </div>

              <div className="tech-status">
                <span>STATUS: ONLINE</span>
                <span>{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
