import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Styles/App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import AdminDashboard from "./components/AdminDashboard";
import StarBackground from "./components/StarBackground";
import { Analytics } from "@vercel/analytics/react";
import SocialSidebar from "./components/SocialSidebar";

// Create a Home component for the single-page sections
const Home = () => (
  <>
    <Navbar />
    <SocialSidebar />
    <main className="app-content" style={{ position: "relative", zIndex: 1 }}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="app">
        <StarBackground />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Admin Route */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
