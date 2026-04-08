import React from "react";
import "./Kontakt.css";
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
    <div className="kontakt-page">
      
      <Helmet>
       <title>Kontakt | MiSE</title>
       <meta
        name="description"
        content="Kontakt MiSE og hør mere om, hvordan vi udvikler websites og digitale løsninger til restaurationsbranchen med fokus på overskuelighed og performance."
       />
      </Helmet>


      <main className="kontakt-main">
        <section className="kontakt-section" aria-labelledby="kontakt-title">
          <p className="kontakt-eyebrow">{contactContent.eyebrow}</p>

          <h1 id="kontakt-title" className="kontakt-title">
            {contactContent.title}
          </h1>

          <div className="kontakt-grid">
            <figure className="kontakt-media">
              <img
                src={kontaktImage}
                alt="Mad og drikke på bord"
                className="kontakt-image"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className="kontakt-content">
              {contactContent.paragraphs.map((text) => (
                <p key={text} className="kontakt-text">
                  {text}
                </p>
              ))}

              <hr className="kontakt-divider" />

              <address className="kontakt-details">
                <a href={contactContent.phoneHref} className="kontakt-link">
                  {contactContent.phoneLabel}
                </a>

                <a href={contactContent.emailHref} className="kontakt-link">
                  {contactContent.emailLabel}
                </a>
              </address>
            </div>
          </div>

        </section>
      </main>

    
      <Footer />
    </div>
  );
}