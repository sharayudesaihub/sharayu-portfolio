import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import { PROFILE } from "./data/portfolio";
import "./styles/portfolio.css";

export default function Portfolio() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className="pf" data-theme={theme}>
      <div className="aurora" aria-hidden="true" />
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <footer>© {new Date().getFullYear()} {PROFILE.name}, All Rights Reserved</footer>
    </div>
  );
}
