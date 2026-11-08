import Section from "./Section";
import { EXPERIENCE, EDUCATION } from "../data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience and education">
      <div className="two">
        <div className="timeline">
          <h3 className="sub">Experience</h3>
          {EXPERIENCE.map((e) => (
            <div className="node" key={e.title + e.org}>
              <h4>{e.title}</h4>
              <p className="meta">{e.org} · {e.period}</p>
              <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="timeline">
          <h3 className="sub">Education</h3>
          {EDUCATION.map((e) => (
            <div className="node" key={e.title}>
              <h4>{e.title}</h4>
              <p className="meta">{e.place}</p>
              <p className="meta">{e.year} · {e.note}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
