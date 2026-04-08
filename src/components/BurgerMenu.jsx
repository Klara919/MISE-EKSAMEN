import { useState } from "react"; // importerer hook til at gemme state (data der kan ændre sig)
import { Link } from "react-router-dom"; // bruges til navigation uden at reloade siden
import "./BurgerMenu.css"; 

function BurgerMenu() { // opretter komponenten

  const [isOpen, setIsOpen] = useState(false); // state der holder styr på om menuen er åben eller lukket

  const links = [ // array med alle menu links
    { label: "Forside", to: "/" }, // label = tekst, to = route
    { label: "Services", to: "/services" },
    { label: "Cases", to: "/cases" },
    { label: "Hvem vi er", to: "/hvem-vi-er" },
    { label: "Kontakt", to: "/kontakt" },
  ];

  const toggleMenu = () => { // funktion der åbner/lukker menuen
    setIsOpen((prev) => !prev); // skifter true/false (toggle)
  };

  const handleLinkClick = () => { // funktion når man klikker på et link
    setIsOpen(false); // lukker menuen
  };

  return (
    <>
      {/* OVERLAY (hele menuen der åbner) */}
      <div
        className={`burger-menu__overlay ${
          isOpen ? "burger-menu__overlay--open" : ""
        }`} // tilføjer ekstra class når menu er åben
      >
        <nav className="burger-menu__nav" aria-hidden={!isOpen}> {/* navigation container */}
          
          <ul className="burger-menu__list"> {/* liste af links */}

            {links.map((link, index) => ( // looper gennem alle links
              <li
                key={link.label} // unik key til React - give hvert element et ID, så React kan holde styr på dem korrekt
                className={`burger-menu__item ${
                  isOpen ? "burger-menu__item--open" : ""
                }`} // tilføjer class når menu er åben (til animation)
                
                style={{
                  transitionDelay: isOpen ? `${0.12 + index * 0.08}s` : "0s",
                  // laver stagger animation (links kommer én efter én)
                }}
              >
                <Link
                  className="burger-menu__link" // styling
                  to={link.to} // hvor linket går hen
                  onClick={handleLinkClick} // lukker menu når man klikker
                >
                  <span className="burger-menu__link-mask"> {/* wrapper til animation */}
                    <span className="burger-menu__link-text">
                      {link.label} {/* selve teksten */}
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
        type="button" // gør det til en normal knap
        className={`burger-menu__toggle ${
          isOpen ? "burger-menu__toggle--open" : ""
        }`} // ændrer class når menu er åben (animation til X)
        
        onClick={toggleMenu} // klik åbner/lukker menu
        
        aria-label={isOpen ? "Luk menu" : "Åbn menu"} // til accessibility (screen readers)
        aria-expanded={isOpen} // fortæller om menu er åben/lukket
      >
        <span className="burger-menu__icon"> {/* ikon wrapper */}

          <span className="burger-menu__line burger-menu__line--top" /> {/* øverste linje */}
          <span className="burger-menu__line burger-menu__line--middle" /> {/* midterste linje */}
          <span className="burger-menu__line burger-menu__line--bottom" /> {/* nederste linje */}

        </span>
      </button>
    </>
  );
}

export default BurgerMenu; // eksporterer komponenten