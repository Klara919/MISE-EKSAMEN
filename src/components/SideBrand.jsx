import React, { useEffect, useRef, useState } from "react";
import styles from "./SideBrand.module.css";

export default function SideBrand() {
  const ref = useRef(null);
  const [isWhite, setIsWhite] = useState(false);

  useEffect(() => {
    let ticking = false;

    const detectSection = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      const el = document.elementFromPoint(x, y);
      if (!el) return;

      const beigeSection = el.closest("[data-sidebrand='beige']");

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
      className={`${styles.sideBrand} ${isWhite ? styles.light : ""}`}
    >
      <div className={styles.mise}>MiSE</div>
      <div className={styles.sub}>Webbureau, Aarhus</div>
    </div>
  );
}