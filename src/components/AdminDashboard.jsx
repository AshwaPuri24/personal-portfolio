import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../Styles/Contact.css"; // Reusing contact styles for forms

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("blog");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Form States
  const [blogData, setBlogData] = useState({
    title: "",
    desc: "",
    content: "",
    image: "",
  });
  const [projectData, setProjectData] = useState({
    title: "",
    desc: "",
    tech: "",
    link: "",
    github: "",
    image: "",
  });
  const [skillData, setSkillData] = useState({
    name: "",
    level: "50%",
    category: "frontend",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("Access Denied: " + error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const addToDatabase = async (collectionName, data) => {
    setLoading(true);
    try {
      await addDoc(collection(db, collectionName), {
        ...data,
        createdAt: new Date(),
      });
      alert("Data Uploaded to Mainframe Successfully.");
      // Reset forms
      setBlogData({ title: "", desc: "", content: "", image: "" });
      setProjectData({
        title: "",
        desc: "",
        tech: "",
        link: "",
        github: "",
        image: "",
      });
      setSkillData({ name: "", level: "50%", category: "frontend" });
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Upload Failed.");
    }
    setLoading(false);
  };

  if (!user) {
    return (
      <div
        className="contact-section"
        style={{ minHeight: "100vh", paddingTop: "100px" }}
      >
        <div className="container" style={{ maxWidth: "500px" }}>
          <div className="section-header">
            <h2 className="section-title" style={{ color: "red" }}>
              RESTRICTED ACCESS
            </h2>
            <p className="section-subtitle">:: AUTHORIZED PERSONNEL ONLY ::</p>
          </div>
          <form onSubmit={handleLogin} className="contact-form">
            <div className="form-group">
              <input
                type="email"
                placeholder="Commander Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Access Code"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="submit-btn">
              AUTHENTICATE
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div
      className="contact-section"
      style={{ minHeight: "100vh", paddingTop: "100px" }}
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mission Control</h2>
          <p className="section-subtitle">:: WELCOME COMMANDER ::</p>
          <button
            onClick={handleLogout}
            className="submit-btn"
            style={{ marginTop: "1rem", borderColor: "red", color: "red" }}
          >
            LOGOUT
          </button>
        </div>

        {/* Control Tabs */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          {["blog", "project", "skill"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="submit-btn"
              style={{
                background:
                  activeTab === tab ? "var(--accent-cyan)" : "transparent",
                color: activeTab === tab ? "black" : "var(--accent-cyan)",
              }}
            >
              ADD {tab.toUpperCase()}
            </button>
          ))}
        </div>

        <div
          className="contact-form"
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          {/* BLOG FORM */}
          {activeTab === "blog" && (
            <>
              <h3 style={{ color: "white", marginBottom: "1rem" }}>
                New Log Entry
              </h3>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title"
                  value={blogData.title}
                  onChange={(e) =>
                    setBlogData({ ...blogData, title: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Description (Snippet)"
                  value={blogData.desc}
                  onChange={(e) =>
                    setBlogData({ ...blogData, desc: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Cover Image URL"
                  value={blogData.image}
                  onChange={(e) =>
                    setBlogData({ ...blogData, image: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <textarea
                  rows="10"
                  placeholder="Content (Markdown Supported)"
                  value={blogData.content}
                  onChange={(e) =>
                    setBlogData({ ...blogData, content: e.target.value })
                  }
                ></textarea>
              </div>
              <button
                onClick={() => addToDatabase("blogs", blogData)}
                disabled={loading}
                className="submit-btn"
              >
                {loading ? "UPLOADING..." : "PUBLISH LOG"}
              </button>
            </>
          )}

          {/* PROJECT FORM */}
          {activeTab === "project" && (
            <>
              <h3 style={{ color: "white", marginBottom: "1rem" }}>
                New Project Blueprint
              </h3>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Project Title"
                  value={projectData.title}
                  onChange={(e) =>
                    setProjectData({ ...projectData, title: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Tech Stack (comma separated)"
                  value={projectData.tech}
                  onChange={(e) =>
                    setProjectData({ ...projectData, tech: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Image URL"
                  value={projectData.image}
                  onChange={(e) =>
                    setProjectData({ ...projectData, image: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="GitHub URL"
                  value={projectData.github}
                  onChange={(e) =>
                    setProjectData({ ...projectData, github: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Live Demo URL"
                  value={projectData.link}
                  onChange={(e) =>
                    setProjectData({ ...projectData, link: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Project Description"
                  value={projectData.desc}
                  onChange={(e) =>
                    setProjectData({ ...projectData, desc: e.target.value })
                  }
                ></textarea>
              </div>
              <button
                onClick={() => addToDatabase("projects", projectData)}
                disabled={loading}
                className="submit-btn"
              >
                {loading ? "UPLOADING..." : "DEPLOY PROJECT"}
              </button>
            </>
          )}

          {/* SKILL FORM */}
          {activeTab === "skill" && (
            <>
              <h3 style={{ color: "white", marginBottom: "1rem" }}>
                System Upgrade
              </h3>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Skill Name (e.g. React)"
                  value={skillData.name}
                  onChange={(e) =>
                    setSkillData({ ...skillData, name: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Proficiency (e.g. 90%)"
                  value={skillData.level}
                  onChange={(e) =>
                    setSkillData({ ...skillData, level: e.target.value })
                  }
                />
              </div>
              <button
                onClick={() => addToDatabase("skills", skillData)}
                disabled={loading}
                className="submit-btn"
              >
                {loading ? "UPLOADING..." : "INSTALL UPGRADE"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
