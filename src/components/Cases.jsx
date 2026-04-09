import React from "react";
import styles from "./Cases.module.css";
import juhlsspisehus from "../assets/Cases/juhlsspisehus.svg";
import manon from "../assets/Cases/manon.svg";
import osteria from "../assets/Cases/osteria.svg";
import margrethegaarden from "../assets/Cases/margrethegaarden.svg";

function CaseCard({ title, image, description }) {
  return (
    <div className={styles.caseCard}>
      <img src={image} alt={title} className={styles.caseImage} />

      <div className={styles.caseOverlay}>
        <h3 className={styles.caseTitle}>{title}</h3>
        <p className={styles.caseText}>{description}</p>
      </div>
    </div>
  );
}

function Cases() {
  return (
    <section className={styles.cases} data-sidebrand="beige">
      <div className={styles.casesContainer}>
        <p className={styles.casesEyebrow}>Vores arbejde</p>
        <h2 className={styles.casesHeading}>Tidligere cases</h2>

        <p className={styles.casesDescription}>
          Gå på opdagelse i vores tidligere cases og få et indblik i, hvad vi kan
          – og hvordan vi arbejder med gennemtænkte og effektive løsninger.
        </p>

        <div className={styles.casesRow}>
          <CaseCard
            title="Margrethegaarden"
            image={margrethegaarden}
            description="Visuel identitet & Branding"
          />

          <div className={styles.casesText}>
            <h2 className={styles.casesTextHeading}>
              Explore
              <br />
              our creations.
            </h2>
          </div>
        </div>

        <div className={styles.casesRow}>
          <div className={styles.casesSmall}>
            <CaseCard
              title="Manon"
              image={manon}
              description="From Scratch"
            />

            <CaseCard
              title="Osteria98"
              image={osteria}
              description="Performance"
            />
          </div>

          <CaseCard
            title="Juhls Spisehus"
            image={juhlsspisehus}
            description="Optimeret SEO"
          />
        </div>
      </div>
    </section>
  );
}

export default Cases;