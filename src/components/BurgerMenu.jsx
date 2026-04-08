import { useState } from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";

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
      <div
        className={`burger-menu__overlay ${
          isOpen ? "burger-menu__overlay--open" : ""
        }`}
      >
        <nav className="burger-menu__nav" aria-hidden={!isOpen}>
          <ul className="burger-menu__list">
            {links.map((link, index) => (
              <li
                key={link.label}
                className={`burger-menu__item ${
                  isOpen ? "burger-menu__item--open" : ""
                }`}
                style={{
                  transitionDelay: isOpen ? `${0.12 + index * 0.08}s` : "0s",
                }}
              >
                <Link
                  className="burger-menu__link"
                  to={link.to}
                  onClick={handleLinkClick}
                >
                  <span className="burger-menu__link-mask">
                    <span className="burger-menu__link-text">{link.label}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <button
        type="button"
        className={`burger-menu__toggle ${
          isOpen ? "burger-menu__toggle--open" : ""
        }`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Luk menu" : "Åbn menu"}
        aria-expanded={isOpen}
      >
        <span className="burger-menu__icon">
          <span className="burger-menu__line burger-menu__line--top" />
          <span className="burger-menu__line burger-menu__line--middle" />
          <span className="burger-menu__line burger-menu__line--bottom" />
        </span>
      </button>
    </>
  );
}

export default BurgerMenu;