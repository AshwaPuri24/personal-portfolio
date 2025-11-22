import "./Styles/App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Blog from "./components/Blog";
import StarBackground from "./components/StarBackground";

function App() {
  return (
    <div className="app">
      <StarBackground />
      <Navbar />
      <main className="app-content" style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
