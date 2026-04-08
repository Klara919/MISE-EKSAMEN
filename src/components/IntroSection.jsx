import React from "react";
import { Link } from "react-router-dom";
import "./IntroSection.css";
import Team from "../assets/Team.jpg";

export default function IntroSection() { // opretter og eksporterer komponenten
  return ( // det der bliver renderet i DOM
    <section className="intro"> {/* yderste sektion (wrapper) */}
      <div className="intro__container"> {/* centreret container med max bredde */}
        
        <h1 className="intro__title"> {/* hovedoverskrift */}
          MiSE er et webbureau i Aarhus, der fokuserer på at udvikle
          ressourceeffektive websites med stærke visuelle designs.
        </h1>

        <div className="intro__content"> {/* wrapper til layout (grid/flex) */}

          <div className="intro__image"> {/* container til billede */}
            <img src={Team} alt="Team" /> {/* viser team-billede */}
          </div>

          <div className="intro__text"> {/* container til tekst + knap */}
            
            <p> {/* brødtekst */}
              Vi er et passioneret team med en fælles ambition om at skabe
              digitale løsninger, der gør en forskel. Vores fokus på
              bæredygtighed går hånd i hånd med et effektivt website - det er
              derfor både til gavn for din virksomhed, men også fremtiden.
            </p>

            <Link 
              to="/hvem-vi-er" /* hvor linket fører hen */
              className="intro__button" /* styling som knap */
            >
              Læs mere om os
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}