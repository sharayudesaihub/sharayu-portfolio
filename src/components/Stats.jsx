import { STATS } from "../data/portfolio";

export default function Stats() {
  return (
    <div className="stats">
      {STATS.map(([n, l]) => (
        <div key={l}><b>{n}</b><span>{l}</span></div>
      ))}
    </div>
  );
}
