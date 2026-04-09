import { useEffect, useRef, useState } from "react";
import styles from "./TestimonialSection.module.css";
import testi1 from "../assets/Faces/testi1.svg";
import testi2 from "../assets/Faces/testi2.svg";
import testi3 from "../assets/Faces/testi3.svg";

function TestimonialSection() {
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

  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [phase, setPhase] = useState("in");
  const timeoutRef = useRef(null);

  const handleChange = (newIndex) => {
    if (newIndex === displayedIndex) return;

    clearTimeout(timeoutRef.current);
    setPhase("out");

    timeoutRef.current = setTimeout(() => {
      setDisplayedIndex(newIndex);
      setPhase("preIn");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPhase("in");
        });
      });
    }, 320);
  };

  const handlePrev = () => {
    const nextIndex =
      displayedIndex === 0 ? testimonials.length - 1 : displayedIndex - 1;
    handleChange(nextIndex);
  };

  const handleNext = () => {
    const nextIndex =
      displayedIndex === testimonials.length - 1 ? 0 : displayedIndex + 1;
    handleChange(nextIndex);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const current = testimonials[displayedIndex];

  const quotePhaseClass = {
    preIn: styles.testimonialSectionQuotePreIn,
    in: styles.testimonialSectionQuoteIn,
    out: styles.testimonialSectionQuoteOut,
  };

  const personPhaseClass = {
    preIn: styles.testimonialSectionPersonPreIn,
    in: styles.testimonialSectionPersonIn,
    out: styles.testimonialSectionPersonOut,
  };

  return (
    <section className="cases" data-sidebrand="beige">
      <section className={styles.testimonialSection}>
        <div className={styles.testimonialSectionContainer}>
          <div className={styles.testimonialSectionHeader}>
            <p className={styles.testimonialSectionEyebrow}>Anmeldelser</p>
            <h2 className={styles.testimonialSectionHeading}>
              Hvad siger vores kunder?
            </h2>
          </div>

          <div className={styles.testimonialSectionContent}>
            <div className={styles.testimonialSectionControls}>
              <div className={styles.testimonialSectionButtons}>
                <button
                  type="button"
                  className={styles.testimonialSectionButton}
                  onClick={handlePrev}
                  aria-label="Forrige anmeldelse"
                >
                  <span>←</span>
                </button>

                <button
                  type="button"
                  className={styles.testimonialSectionButton}
                  onClick={handleNext}
                  aria-label="Næste anmeldelse"
                >
                  <span>→</span>
                </button>
              </div>

              <p className={styles.testimonialSectionCount}>
                {displayedIndex + 1}/{testimonials.length}
              </p>
            </div>

            <div className={styles.testimonialSectionBody}>
              <div className={styles.testimonialSectionQuoteWrap}>
                <div className={styles.testimonialSectionQuoteMask}>
                  <p
                    key={displayedIndex}
                    className={`${styles.testimonialSectionQuote} ${quotePhaseClass[phase]}`}
                  >
                    {current.quote}
                  </p>
                </div>
              </div>

              <div
                className={`${styles.testimonialSectionPerson} ${personPhaseClass[phase]}`}
              >
                <img
                  src={current.image}
                  alt={current.name}
                  className={styles.testimonialSectionAvatar}
                  loading="lazy"
                  decoding="async"
                />

                <div className={styles.testimonialSectionPersonText}>
                  <h3 className={styles.testimonialSectionName}>
                    {current.name}
                  </h3>

                  <p className={styles.testimonialSectionCompany}>
                    {current.company}
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

export default TestimonialSection;