//
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import AnimatedSection from "./AnimatedSection";
import "../Styles/Projects.css";

// Manually defining data here to ensure it matches the space theme immediately
const projectsData = [
  {
    title: "AI Recipe Core",
    description:
      "Neural network integration for culinary synthesis. Analyzes ingredient availability to generate optimal nutritional instructions.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "AI API"],
    image: "/assets/recipe-gen.jpg", // Ensure you have this image or a placeholder
    githubLink: "https://github.com/AshwaPuri24",
    liveLink: "#",
  },
  {
    title: "Habit Tracker v2",
    description:
      "Behavioral analysis module. Tracks user efficiency patterns and optimizes daily routine algorithms.",
    technologies: ["React", "Java", "MySQL", "JWT"],
    image: "/assets/habit-tracker.jpg",
    githubLink: "https://github.com/AshwaPuri24",
    liveLink: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Holographic Deck</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">:: PROJECT SIMULATIONS ::</p>
        </div>

        <div className="projects-container">
          <div className="projects-scroller">
            {projectsData.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <Tilt
                  className="Tilt"
                  perspective={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.3}
                  glareColor="#00f3ff"
                  scale={1.02}
                >
                  <div className="project-card">
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                      <div className="project-links">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub className="project-icon" />
                        </a>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaExternalLinkAlt className="project-icon" />
                        </a>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="project-technologies">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="tech-tag">
                            [{tech}]
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tilt>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
