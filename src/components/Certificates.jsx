import { useEffect, useState } from "react";
import Section from "./Section";
import Tilt from "./Tilt";
import { CERTS, ACTIVITIES } from "../data/portfolio";

export default function Certificates() {
  const [open, setOpen] = useState(null); // the certificate shown full size

  // Close the full-size view with the Escape key.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Section id="credentials" title="Certifications and leadership">
      <div className="grid2 certs">
        {CERTS.map((c) => (
          <Tilt key={c.name} className="cert" max={8}>
            <button className="cert-btn" onClick={() => setOpen(c)} aria-label={`View ${c.name} certificate`}>
              <img src={c.image} alt={`${c.name} certificate`} />
            </button>
            <div className="cert-body">
              <h3>{c.name}</h3>
              <p className="meta">{c.org}</p>
            </div>
          </Tilt>
        ))}
      </div>

      <h3 className="sub lead-sub">Leadership and activities</h3>
      <ul className="pills big">{ACTIVITIES.map((a) => <li key={a}>{a}</li>)}</ul>

      {open && (
        <div className="lightbox" onClick={() => setOpen(null)} role="dialog" aria-label={open.name}>
          <img src={open.image} alt={`${open.name} certificate`} />
          <button className="lb-close" onClick={() => setOpen(null)} aria-label="Close">×</button>
        </div>
      )}
    </Section>
  );
}
