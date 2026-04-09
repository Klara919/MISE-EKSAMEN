import './Cases.css' 
import React from 'react'; 
import juhlsspisehus from '../assets/Cases/juhlsspisehus.svg';
import manon from '../assets/Cases/manon.svg'; 
import osteria from '../assets/Cases/osteria.svg'; 
import margrethegaarden from '../assets/Cases/margrethegaarden.svg'; 

function Cases() { // opretter hovedkomponenten
  <section data-sidebrand="beige"></section>

  // CaseCard component (genbrugelig komponent til hver case)
  function CaseCard({ title, image, description }) { // modtager props (data)
    return (
      <div className="case-card"> {/* container til én case */}
        
        <img src={image} alt={title} /> {/* viser billede + alt tekst */}

        <div className="case-overlay"> {/* overlay ovenpå billedet */}
          <h3>{title}</h3> {/* viser titel */}
          <p>{description}</p> {/* viser beskrivelse */}
        </div>

      </div>
    );
  }

  return ( // JSX output
    <section className="cases"> {/* hele sektionen */}
      <div className="cases-container"> {/* centreret wrapper */}

        <p>Vores arbejde</p> {/* lille intro tekst */}
        <h2>Tidligere cases</h2> {/* hovedoverskrift */}

        <p>
          Gå på opdagelse i vores tidligere cases og få et indblik i, hvad vi kan –
          og hvordan vi arbejder med gennemtænkte og effektive løsninger.
        </p> {/* beskrivende tekst */}

        {/* RÆKKE 1 */}
        <div className="cases-row"> {/* første række */}

          <CaseCard
            title="Margrethegaarden" // titel prop
            image={margrethegaarden} // billede prop
            description="Visuel identitet & Branding" // tekst prop
          />

          <div className="cases-text"> {/* tekst blok ved siden af */}
            <h2>Explore<br/>our creations.</h2> {/* linjeskift med <br/> */}
          </div>

        </div>

        {/* RÆKKE 2 */}
        <div className="cases-row"> {/* anden række */}

          <div className="cases-small"> {/* wrapper til 2 små cases */}

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

export default Cases // eksporterer komponenten