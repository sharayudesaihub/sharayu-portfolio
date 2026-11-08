import Section from "./Section";
import Tilt from "./Tilt";
import { PROFILE } from "../data/portfolio";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="about">
        <Tilt className="pic" max={9}>
          <img src={PROFILE.aboutImage} alt="About" />
        </Tilt>
        <div>{PROFILE.about.map((p) => <p key={p}>{p}</p>)}</div>
      </div>
    </Section>
  );
}
