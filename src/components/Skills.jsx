import { FaReact, FaJava, FaDatabase, FaCodeBranch } from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSpringboot,
  SiGit,
} from "react-icons/si";
import "../Styles/Skills.css";

const skillsData = [
  { icon: <FaReact />, name: "React.js", level: "90%" },
  { icon: <SiJavascript />, name: "JavaScript", level: "85%" },
  { icon: <FaJava />, name: "Java", level: "80%" },
  { icon: <SiSpringboot />, name: "Spring Boot", level: "80%" },
  { icon: <SiHtml5 />, name: "HTML5", level: "95%" },
  { icon: <SiCss3 />, name: "CSS3", level: "90%" },
  { icon: <FaDatabase />, name: "SQL / DB", level: "85%" },
  { icon: <SiGit />, name: "Git Control", level: "85%" },
  { icon: <FaCodeBranch />, name: "REST APIs", level: "80%" },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">System Diagnostics</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">:: TECHNICAL ARSENAL ::</p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card-tech">
              <div className="tech-header">
                <h3 className="tech-name">{skill.name}</h3>
                <div className="tech-icon">{skill.icon}</div>
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
