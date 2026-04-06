import React from "react"; // Importerer React så vi kan bruge JSX og komponenter
import "./WhiteFooter.css"; // Importerer CSS filen så styling bliver anvendt

// Liste med kontakt information (telefon + email)
const contactItems = [
  { href: "tel:+4560510512", label: "+45 60 51 05 12" }, // Klikbar telefon
  { href: "mailto:MiSE@MiSE.com", label: "MiSE@MiSE.com" }, // Klikbar email
];

// Liste med sociale medier
const socialItems = [
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://www.facebook.com", label: "Facebook" },
];

// Navigation links
const navItems = [
  { href: "/", label: "Forside" },
  { href: "/services", label: "Services" },
  { href: "/om-os", label: "Om os" },
  { href: "/kontakt", label: "Kontakt" },
];

// Samler alle kolonner i én struktur
const columns = [
  { title: "Kontakt", items: contactItems }, // Første kolonne
  { title: "Socials", items: socialItems }, // Anden kolonne
  { title: "Sider", items: navItems }, // Tredje kolonne
];

// Genbrugelig komponent til hver kolonne
function FooterColumn({ title, items }) {
  return (
    // Section for hver kolonne
    <section aria-labelledby={`footer-${title.toLowerCase()}`}>
      {/* Overskrift */}
      <h2
        id={`footer-${title.toLowerCase()}`} // Kobler til aria-labelledby
        className="footer-title" // CSS klasse
      >
        {title} {/* Viser titel (fx Kontakt) */}
      </h2>

      {/* Liste med links */}
      <ul className="footer-list">
        {items.map((item) => (
          // Loop igennem hvert item
          <li key={item.label}> {/* key hjælper React med performance */}
            <a href={item.href} className="footer-link"> {/* Klikbart link */}
              {item.label} {/* Teksten */}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Hoved Footer komponent
export default function Footer() {
  return (
    // Selve footeren
    <footer className="footer">
      <div className="footer-inner"> {/* Wrapper for layout */}
        
        {/* Navigation område med kolonner */}
        <nav aria-label="Footer" className="footer-grid">
          {columns.map((column) => (
            // Loop igennem alle kolonner
            <FooterColumn
              key={column.title} // unik key
              title={column.title} // titel
              items={column.items} // data
            />
          ))}
        </nav>

        {/* Stor baggrundstekst */}
        <div aria-hidden="true" className="footer-brand">
        <span>MiSE</span>
        </div>
      </div>
    </footer>
  );
}