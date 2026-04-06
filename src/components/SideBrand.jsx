import React, { useEffect, useRef, useState } from "react";
import "./SideBrand.css";

const DEFAULT_BG = "rgb(207, 205, 200)"; // #CFCDC8

export default function SideBrand() {
  const ref = useRef(null);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const detectBackground = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      const x = window.innerWidth - 10;
      const y = rect.top + rect.height / 2;

      const el = document.elementFromPoint(x, y);
      if (!el) return;

      let current = el;
      let bg = "transparent";

      while (current && current !== document.body) {
        const style = window.getComputedStyle(current);
        const bgColor = style.backgroundColor;

        if (bgColor !== "transparent" && bgColor !== "rgba(0, 0, 0, 0)") {
          bg = bgColor;
          break;
        }

        current = current.parentElement;
      }

      setLight(bg !== DEFAULT_BG);
    };

    detectBackground();

    window.addEventListener("scroll", detectBackground);
    window.addEventListener("resize", detectBackground);

    return () => {
      window.removeEventListener("scroll", detectBackground);
      window.removeEventListener("resize", detectBackground);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`side-brand ${light ? "side-brand--light" : ""}`}
    >
      <div className="side-brand__mise">MiSE</div>
      <div className="side-brand__sub">Webbureau, Aarhus</div>
    </div>
  );
}