import { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import "../Styles/Blog.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch from Dev.to (using a default tag 'java' if you don't have posts yet)
    // Once you have Dev.to posts, switch 'tag=java' to 'username=yourusername'
    fetch("https://dev.to/api/articles?tag=java&per_page=3")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Captain's Log</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">:: INCOMING TRANSMISSIONS ::</p>
        </div>

        <div className="blog-grid">
          {loading ? (
            <p style={{ textAlign: "center", color: "var(--accent-cyan)" }}>
              Loading Data Stream...
            </p>
          ) : (
            posts.map((post, index) => (
              <AnimatedSection
                key={post.id}
                delay={index * 0.2}
                direction="left"
              >
                <div className="blog-card">
                  <span className="blog-date">
                    LOG DATE: {new Date(post.published_at).toLocaleDateString()}
                  </span>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-desc">{post.description}</p>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noreferrer"
                    className="read-link"
                  >
                    Decrypt Data <FaExternalLinkAlt />
                  </a>
                </div>
              </AnimatedSection>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
