import React, { useEffect, useRef, useState } from "react";
import "./SideBrand.css";

export default function SideBrand() {
  const ref = useRef(null);
  const [isWhite, setIsWhite] = useState(false);

  useEffect(() => {
    let ticking = false;

    const detectSection = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      // Vi måler midt på elementet
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      const el = document.elementFromPoint(x, y);
      if (!el) return;

      // Tjek om vi er inde i en beige sektion
      const beigeSection = el.closest("[data-sidebrand='beige']");

      // Hvis vi er på beige → mørk tekst
      // Ellers → hvid tekst
      setIsWhite(!beigeSection);
    };

    const handleUpdate = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        detectSection();
        ticking = false;
      });
    };

    detectSection();

    window.addEventListener("scroll", handleUpdate, { passive: true });
    window.addEventListener("resize", handleUpdate);

    return () => {
      window.removeEventListener("scroll", handleUpdate);
      window.removeEventListener("resize", handleUpdate);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`side-brand ${isWhite ? "side-brand--light" : ""}`}
    >
      <div className="side-brand__mise">MiSE</div>
      <div className="side-brand__sub">Webbureau, Aarhus</div>
    </div>
  );
}