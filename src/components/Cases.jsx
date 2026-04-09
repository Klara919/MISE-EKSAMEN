import './Cases.css' 
import React from 'react'; 
import juhlsspisehus from '../assets/Cases/juhlsspisehus.svg';
import manon from '../assets/Cases/manon.svg'; 
import osteria from '../assets/Cases/osteria.svg'; 
import margrethegaarden from '../assets/Cases/margrethegaarden.svg'; 

function Cases() {

  function CaseCard({ title, image, description }) {
    return (
      <div className="case-card">
        <img src={image} alt={title} />

        <div className="case-overlay">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="cases" data-sidebrand="beige">
      <div className="cases-container">

        <p>Vores arbejde</p>
        <h2>Tidligere cases</h2>

        <p>
          Gå på opdagelse i vores tidligere cases og få et indblik i, hvad vi kan –
          og hvordan vi arbejder med gennemtænkte og effektive løsninger.
        </p>

        <div className="cases-row">

          <CaseCard
            title="Margrethegaarden"
            image={margrethegaarden}
            description="Visuel identitet & Branding"
          />

          <div className="cases-text">
            <h2>Explore<br/>our creations.</h2>
          </div>

        </div>

        <div className="cases-row">

          <div className="cases-small">

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
            description="Optimeret SEO "
          />

        </div>

      </div>
    </section>
  )
}

export default Cases