import useReveal from "../hooks/useReveal";

// A titled page section that fades in when scrolled into view.
export default function Section({ id, title, children }) {
  const [ref, shown] = useReveal();
  return (
    <section id={id} ref={ref} className={`section ${shown ? "in" : ""}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
