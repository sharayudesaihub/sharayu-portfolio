import { useRef } from "react";

// Wraps content and tilts it in 3D following the mouse, with a light glare.
export default function Tilt({ children, className = "", max = 12 }) {
  const ref = useRef(null);

  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    const s = ref.current.style;
    s.setProperty("--ry", `${x * max * 2}deg`);
    s.setProperty("--rx", `${-y * max * 2}deg`);
    s.setProperty("--gx", `${(x + 0.5) * 100}%`);
    s.setProperty("--gy", `${(y + 0.5) * 100}%`);
  };

  const leave = () => {
    ref.current.style.setProperty("--ry", "0deg");
    ref.current.style.setProperty("--rx", "0deg");
  };

  return (
    <div ref={ref} className={`tilt ${className}`} onMouseMove={move} onMouseLeave={leave}>
      {children}
      <span className="glare" aria-hidden="true" />
    </div>
  );
}
