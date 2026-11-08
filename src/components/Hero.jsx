import Tilt from "./Tilt";
import { Svg } from "./Icons";
import useTyper from "../hooks/useTyper";
import { PROFILE, GITHUB, LINKEDIN } from "../data/portfolio";

export default function Hero() {
  const role = useTyper(PROFILE.roles);

  return (
    <div id="home" className="hero">
      <div className="hero-3d">
        <Tilt className="stage" max={10}>
          <div className="ring" />
          <div className="blob" />
          <img className="photo" src={PROFILE.portrait} alt={`${PROFILE.name} portrait`} />
          <div className="chip c1">MERN Stack</div>
          <div className="chip c2">SQL</div>
          <div className="chip c3">Java</div>
        </Tilt>
      </div>

      <div className="hero-text">
        <p className="hello">Hello, I’m</p>
        <h1>{PROFILE.name}</h1>
        <p className="role">And I’m a <b>{role}</b><i className="caret" /></p>
        <p className="lead">{PROFILE.intro}</p>
        <div className="socials">
          <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Svg name="linkedin" /></a>
          <a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><Svg name="github" /></a>
        </div>
        <div className="cta">
          <a className="btn primary" href="#contact">Hire me</a>
          <a className="btn" href={PROFILE.cv} download>Download CV</a>
        </div>
      </div>
    </div>
  );
}
