import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import AnimatedSection from "./AnimatedSection";
import "../Styles/Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

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
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.2}>
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
                      <img
                        src={project.image || "/assets/project.jpg"}
                        alt={project.title}
                      />
                      <div className="project-links">
                        <a
                          href={project.github || project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub className="project-icon" />
                        </a>
                        <a
                          href={project.link || project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaExternalLinkAlt className="project-icon" />
                        </a>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.desc || project.description}</p>
                      <div className="project-technologies">
                        {(typeof project.tech === "string"
                          ? project.tech.split(",")
                          : project.technologies || []
                        ).map((tech, i) => (
                          <span key={i} className="tech-tag">
                            [{tech.trim()}]
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
