import { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import "../Styles/Blog.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const blogData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(blogData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Captain's Log</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">:: INTERNAL DATABASE ::</p>
        </div>

        <div className="blog-grid">
          {loading ? (
            <p style={{ textAlign: "center", color: "var(--accent-cyan)" }}>
              Decrypting Archives...
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
                    LOG DATE:{" "}
                    {post.createdAt
                      ? new Date(
                          post.createdAt.seconds * 1000
                        ).toLocaleDateString()
                      : "Unknown"}
                  </span>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-desc">{post.desc}</p>
                  {/* Link to internal route instead of external URL */}
                  <Link to={`/blog/${post.id}`} className="read-link">
                    Access File <FaExternalLinkAlt />
                  </Link>
                </div>
              </AnimatedSection>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
