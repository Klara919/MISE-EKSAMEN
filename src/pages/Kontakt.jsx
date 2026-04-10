import React from "react";
import styles from "./kontakt.module.css";
import Footer from "../components/RedFooter";
import kontaktImage from "../assets/bord.svg";
import { Helmet } from "react-helmet-async";

const contactContent = {
  eyebrow: "Kontakt",
  title: "Kontakt os",
  paragraphs: [
    "Skal vi gøre din hjemmeside klar til servering? En god hjemmeside er som en god ret – den skal friste, fungere og få gæsterne til at vende tilbage.",
    "Få bragt dine idéer til live. Send os en mail eller kontakt os over telefon og lad os skabe noget sammen!",
  ],
  phoneLabel: "+45 60 51 05 12",
  phoneHref: "tel:+4560510512",
  emailLabel: "MiSE@MiSE.com",
  emailHref: "mailto:MiSE@MiSE.com",
};

export default function Kontakt() {
  return (
    <section className="cases" data-sidebrand="beige">
      <div className={styles.page}>
        <Helmet>
          <title>Kontakt | MiSE</title>
          <meta
            name="description"
            content="Kontakt MiSE og hør mere om, hvordan vi udvikler websites og digitale løsninger til restaurationsbranchen med fokus på overskuelighed og performance."
          />
        </Helmet>

        <main className={styles.main}>
          <section className={styles.section} aria-labelledby="kontakt-title">
            <p className={styles.eyebrow}>{contactContent.eyebrow}</p>

            <h1 id="kontakt-title" className={styles.title}>
              {contactContent.title}
            </h1>

            <div className={styles.grid}>
              <figure className={styles.media}>
                <img
                  src={kontaktImage}
                  alt="Mad og drikke på bord"
                  className={styles.image}
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <div className={styles.content}>
                {contactContent.paragraphs.map((text) => (
                  <p key={text} className={styles.text}>
                    {text}
                  </p>
                ))}

                <hr className={styles.divider} />

                <address className={styles.details}>
                  <a href={contactContent.phoneHref} className={styles.link}>
                    {contactContent.phoneLabel}
                  </a>

                  <a href={contactContent.emailHref} className={styles.link}>
                    {contactContent.emailLabel}
                  </a>
                </address>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </section>
  );
}