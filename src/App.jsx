import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdmin = location.pathname === "/admin";

  return (
    <>
      {!isAdmin && <Navbar />}
      <main className="app-content" style={{ position: "relative", zIndex: 1 }}>
        {children}
      </main>
      {!isAdmin && <Footer />}
    </>
  );
};

const Home = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Blog />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="app">
        <StarBackground />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </Layout>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
