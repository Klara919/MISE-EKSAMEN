import React from "react";
import { Link } from "react-router-dom";
import "./IntroSection.css";
import Team from "../assets/Team.jpg";

export default function IntroSection() {
  return (
    <section className="intro">
      <div className="intro__container">
        <h1 className="intro__title">
          MiSE er et webbureau i Aarhus, der fokuserer på at udvikle
          ressourceeffektive websites med stærke visuelle designs.
        </h1>

        <div className="intro__content">
          <div className="intro__image">
            <img src={Team} alt="Team" />
          </div>

          <div className="intro__text">
            <p>
              Vi er et passioneret team med en fælles ambition om at skabe
              digitale løsninger, der gør en forskel. Vores fokus på
              bæredygtighed går hånd i hånd med et effektivt website - det er
              derfor både til gavn for din virksomhed, men også fremtiden.
            </p>

            <Link to="/hvem-vi-er" className="intro__button">
              Læs mere om os
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}