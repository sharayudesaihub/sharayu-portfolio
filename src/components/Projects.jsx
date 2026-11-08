import Section from "./Section";
import Tilt from "./Tilt";
import { PROJECTS } from "../data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid2">
        {PROJECTS.map((p) => (
          <Tilt key={p.title} className="project" max={8}>
            <img src={p.image} alt={`${p.title} preview`} />
            <div className="pbody">
              <p className="meta">{p.type}</p>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <ul className="pills small">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              <div className="cta small-cta">
                {p.live && <a className="btn primary" href={p.live} target="_blank" rel="noreferrer">Live demo</a>}
                {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noreferrer">GitHub</a>}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </Section>
  );
}
