import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import ReactMarkdown from "react-markdown";
import "../Styles/Blog.css";

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, "blogs", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost(docSnap.data());
      } else {
        console.log("No such document!");
      }
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  if (loading)
    return (
      <div style={{ paddingTop: "100px", textAlign: "center", color: "white" }}>
        Loading Transmission...
      </div>
    );
  if (!post)
    return (
      <div style={{ paddingTop: "100px", textAlign: "center", color: "white" }}>
        Data Corrupted or Missing.
      </div>
    );

  return (
    <section
      className="blog-section"
      style={{ paddingTop: "120px", minHeight: "100vh" }}
    >
      <div className="container" style={{ maxWidth: "800px" }}>
        <Link
          to="/"
          style={{
            color: "var(--accent-cyan)",
            textDecoration: "none",
            marginBottom: "2rem",
            display: "block",
          }}
        >
          &larr; RETURN TO BASE
        </Link>

        <div
          className="blog-card"
          style={{ borderLeft: "none", padding: "3rem" }}
        >
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "2rem",
              }}
            />
          )}
          <h1
            style={{
              fontSize: "2.5rem",
              color: "var(--accent-cyan)",
              marginBottom: "1rem",
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              fontFamily: "monospace",
              marginBottom: "2rem",
            }}
          >
            LOG DATE:{" "}
            {new Date(post.createdAt.seconds * 1000).toLocaleDateString()}
          </p>

          <div
            className="markdown-content"
            style={{ color: "white", lineHeight: "1.8" }}
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
}
