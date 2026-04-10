import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BurgerMenu.module.css";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Forside", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Cases", to: "/cases" },
    { label: "Hvem vi er", to: "/hvem-vi-er" },
    { label: "Kontakt", to: "/kontakt" },
  ];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`${styles.overlay} ${
          isOpen ? styles.overlayOpen : ""
        }`}
      >
        <nav className={styles.nav} aria-hidden={!isOpen}>
          <ul className={styles.list}>
            {links.map((link, index) => (
              <li
                key={link.label}
                className={`${styles.item} ${
                  isOpen ? styles.itemOpen : ""
                }`}
                style={{
                  transitionDelay: isOpen
                    ? `${0.12 + index * 0.08}s`
                    : "0s",
                }}
              >
                <Link
                  className={styles.link}
                  to={link.to}
                  onClick={handleLinkClick}
                >
                  <span className={styles.linkMask}>
                    <span className={styles.linkText}>
                      {link.label}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* BURGER BUTTON */}
      <button
        type="button"
        className={`${styles.toggle} ${
          isOpen ? styles.toggleOpen : ""
        }`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Luk menu" : "Åbn menu"}
        aria-expanded={isOpen}
      >
        <span className={styles.icon}>
          <span className={`${styles.line} ${styles.lineTop}`} />
          <span className={`${styles.line} ${styles.lineMiddle}`} />
          <span className={`${styles.line} ${styles.lineBottom}`} />
        </span>
      </button>
    </>
  );
}

export default BurgerMenu;