import React from "react";
import { Link } from "react-router-dom";
import styles from "./IntroSection.module.css";
import Team from "../assets/Team.jpg";

export default function IntroSection() {
  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        
        <h1 className={styles.title}>
          MiSE er et webbureau i Aarhus, der fokuserer på at udvikle
          ressourceeffektive websites med stærke visuelle designs.
        </h1>

        <div className={styles.content}>

          <div className={styles.image}>
            <img src={Team} alt="Team" />
          </div>

          <div className={styles.text}>
            
            <p>
              Vi er et passioneret team med en fælles ambition om at skabe
              digitale løsninger, der gør en forskel. Vores fokus på
              bæredygtighed går hånd i hånd med et effektivt website - det er
              derfor både til gavn for din virksomhed, men også fremtiden.
            </p>

            <Link 
              to="/hvem-vi-er"
              className={styles.button}
            >
              Læs mere om os
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}