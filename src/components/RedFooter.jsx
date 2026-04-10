import React from "react";
import styles from "./RedFooter.module.css";
import { Link } from "react-router-dom";

const contactItems = [
  { href: "tel:+4560510512", label: "+45 60 51 05 12" },
  { href: "mailto:MiSE@MiSE.com", label: "MiSE@MiSE.com" },
];

const socialItems = [
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://www.facebook.com", label: "Facebook" },
];

const navItems = [
  { to: "/", label: "Forside" },
  { to: "/services", label: "Services" },
  { to: "/cases", label: "Cases" },
  { to: "/hvem-vi-er", label: "Hvem vi er" },
  { to: "/kontakt", label: "Kontakt" },
];

const columns = [
  { title: "Kontakt", items: contactItems },
  { title: "Socials", items: socialItems },
  { title: "Sider", items: navItems },
];

function FooterColumn({ title, items }) {
  return (
    <section aria-labelledby={`footer-${title.toLowerCase()}`}>
      <h2
        id={`footer-${title.toLowerCase()}`}
        className={styles.title}
      >
        {title}
      </h2>

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.label}>
            {item.to ? (
              <Link to={item.to} className={styles.link}>
                {item.label}
              </Link>
            ) : (
              <a href={item.href} className={styles.link}>
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function RedFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <nav aria-label="Footer" className={styles.grid}>
          {columns.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              items={column.items}
            />
          ))}
        </nav>

        <div aria-hidden="true" className={styles.brand}>
          <span>MiSE</span>
        </div>
      </div>
    </footer>
  );
}