import Section from "./Section";
import Tilt from "./Tilt";
import { SKILLS } from "../data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid4">
        {SKILLS.map((g) => (
          <Tilt key={g.group} className="card" max={7}>
            <h3>{g.group}</h3>
            <ul className="pills">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </Tilt>
        ))}
      </div>
    </Section>
  );
}
