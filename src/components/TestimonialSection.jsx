import { useEffect, useRef, useState } from "react"; 
import "./TestimonialSection.css"; 
import testi1 from "../assets/Faces/testi1.svg"; 
import testi2 from "../assets/Faces/testi2.svg"; 
import testi3 from "../assets/Faces/testi3.svg"; 

function TestimonialSection() { // opretter komponenten

  const testimonials = [
    {
      name: "Jeanne",
      company: "Margrethegaarden",
      image: testi1,
      quote:
        "“MiSE har hjulpet os med at skabe en hjemmeside, der matcher vores identitet og gør det nemt for gæster at finde den vigtigste information. Det var også en klar bonus for os, at de arbejder med fokus på bæredygtighed, da vi selv prioriterer ansvarlige valg i vores madproduktion.”",
    },
    {
      name: "Line",
      company: "Osteria 96",
      image: testi2,
      quote:
        "“Samarbejdet var overskueligt fra start til slut, og vi følte os hele tiden trygge i processen. Resultatet blev en løsning, der både er visuelt stærk og langt lettere for vores kunder at bruge.”",
    },
    {
      name: "Morten",
      company: "Manon",
      image: testi3,
      quote:
        "“Vi havde brug for et website, der føltes mere roligt, moderne og gennemtænkt. MiSE ramte præcis den balance og skabte en side, der afspejler vores værdier på en enkel og effektiv måde.”",
    },
  ];

  const [displayedIndex, setDisplayedIndex] = useState(0); // hvilket testimonial vises
  const [phase, setPhase] = useState("in"); // styrer animation (in / out / pre-in)
  const timeoutRef = useRef(null); // gemmer timeout ID

  const handleChange = (newIndex) => { // funktion til at skifte testimonial
    if (newIndex === displayedIndex) return; // gør intet hvis samme index

    clearTimeout(timeoutRef.current); // rydder tidligere animation
    setPhase("out"); // starter fade-out animation

    timeoutRef.current = setTimeout(() => { // venter før skift
      setDisplayedIndex(newIndex); // skifter testimonial
      setPhase("pre-in"); // sætter startposition for ny animation

      requestAnimationFrame(() => { // sikrer korrekt rendering timing
        requestAnimationFrame(() => { // dobbelt frame for smooth animation
          setPhase("in"); // starter fade-in animation
        });
      });
    }, 320); // matcher CSS animation timing
  };

  const handlePrev = () => { // går til forrige testimonial
    const nextIndex =
      displayedIndex === 0 ? testimonials.length - 1 : displayedIndex - 1; // loop tilbage hvis første
    handleChange(nextIndex); // skifter
  };

  const handleNext = () => { // går til næste testimonial
    const nextIndex =
      displayedIndex === testimonials.length - 1 ? 0 : displayedIndex + 1; // loop til start hvis sidste
    handleChange(nextIndex); // skifter
  };

  useEffect(() => { // kører når komponent mountes
    return () => clearTimeout(timeoutRef.current); // rydder timeout ved unmount
  }, []);

  const current = testimonials[displayedIndex]; // vælger det aktuelle testimonial

  return (
    <section className="cases" data-sidebrand="beige">
    <section className="testimonial-section"> {/* hele sektionen */}
      <div className="testimonial-section__container"> {/* centreret container */}

        <div className="testimonial-section__header"> {/* header */}
          <p className="testimonial-section__eyebrow">Anmeldelser</p> {/* lille titel */}
          <h2 className="testimonial-section__heading">
            Hvad siger vores kunder?
          </h2> {/* hovedoverskrift */}
        </div>

        <div className="testimonial-section__content"> {/* layout wrapper */}

          <div className="testimonial-section__controls"> {/* knapper + counter */}

            <div className="testimonial-section__buttons"> {/* knapper wrapper */}

              <button
                type="button" /* knap type */
                className="testimonial-section__button" /* styling */
                onClick={handlePrev} /* klik = forrige */
                aria-label="Forrige anmeldelse" /* accessibility */
              >
                <span>←</span> {/* ikon */}
              </button>

              <button
                type="button"
                className="testimonial-section__button"
                onClick={handleNext} /* klik = næste */
                aria-label="Næste anmeldelse"
              >
                <span>→</span>
              </button>
            </div>

            <p className="testimonial-section__count"> {/* viser position */}
              {displayedIndex + 1}/{testimonials.length} {/* fx 1/3 */}
            </p>
          </div>

          <div className="testimonial-section__body"> {/* selve indholdet */}

            <div className="testimonial-section__quote-wrap"> {/* wrapper til quote */}
              <div className="testimonial-section__quote-mask"> {/* mask til animation */}

                <p
                  key={displayedIndex} /* tvinger React til at re-render */
                  className={`testimonial-section__quote testimonial-section__quote--${phase}`} /* dynamisk animation class */
                >
                  {current.quote} {/* viser citat */}
                </p>

              </div>
            </div>

            <div
              className={`testimonial-section__person testimonial-section__person--${phase}`} /* animation på person */
            >
              <img
                src={current.image} /* viser billede */
                alt={current.name} /* alt tekst */
                className="testimonial-section__avatar" /* styling */
                loading="lazy" /* loader først når synlig */
                decoding="async" /* optimerer rendering */
              />

              <div className="testimonial-section__person-text"> {/* tekst container */}
                <h3 className="testimonial-section__name">
                  {current.name} {/* navn */}
                </h3>

                <p className="testimonial-section__company">
                  {current.company} {/* virksomhed */}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </section>
  );
}

export default TestimonialSection; // eksporterer komponenten