import { Svg } from "./Icons";
import { GITHUB, LINKEDIN } from "../data/portfolio";

const LINKS = ["home", "about", "skills", "experience", "projects", "contact"];

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="nav">
      <a href="#home" className="brand">Portfolio<span>.</span></a>
      <nav>
        {LINKS.map((s) => (
          <a key={s} href={`#${s}`}>{s[0].toUpperCase() + s.slice(1)}</a>
        ))}
      </nav>
      <div className="nav-end">
        <a className="icon-btn" href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Svg name="linkedin" /></a>
        <a className="icon-btn" href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Svg name="github" /></a>
        <button className="icon-btn" onClick={onToggleTheme} aria-label="Switch theme">
          {theme === "dark" ? "☀" : "☾"}
        </button>
      </div>
    </header>
  );
}
