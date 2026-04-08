import React from "react"; // Importerer React så vi kan bruge JSX og komponenter
import "./WhiteFooter.css"; // Importerer CSS filen så styling bliver anvendt
import { Link } from "react-router-dom";


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
  { to: "/", label: "Forside" },
  { to: "/services", label: "Services" },
  { to: "/cases", label: "Cases" },
  { to: "/hvem-vi-er", label: "Hvem vi er" },
  { to: "/kontakt", label: "Kontakt" },
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
    <section aria-labelledby={`footer-${title.toLowerCase()}`}>
      <h2
        id={`footer-${title.toLowerCase()}`}
        className="footer-title"
      >
        {title}
      </h2>

      <ul className="footer-list">
        {items.map((item) => (
          <li key={item.label}>
            {item.to ? (
              <Link to={item.to} className="footer-link">
                {item.label}
              </Link>
            ) : (
              <a
                href={item.href}
                className="footer-link"
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}


// Hoved Footer komponent
export default function WhiteFooter() {
 return (
   // Selve footeren
<footer className="white-footer">
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
