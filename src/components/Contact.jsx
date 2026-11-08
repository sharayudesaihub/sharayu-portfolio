import Section from "./Section";
import { PROFILE, GITHUB, LINKEDIN } from "../data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="contact">
        <p>I am looking for a Full Stack, React or Software Developer role.</p>
        <div className="cta">
          <a className="btn primary" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
         
          <a className="btn" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </Section>
  );
}
