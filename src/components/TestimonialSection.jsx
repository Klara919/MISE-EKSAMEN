import { useEffect, useRef, useState } from "react";
import "./TestimonialSection.css";
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
      name: "Mikkel",
      company: "Nordic Studio",
      image: testi2,
      quote:
        "“Samarbejdet var overskueligt fra start til slut, og vi følte os hele tiden trygge i processen. Resultatet blev en løsning, der både er visuelt stærk og langt lettere for vores kunder at bruge.”",
    },
    {
      name: "Sofie",
      company: "Grøn Handel",
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
      setPhase("pre-in");

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

  return (
    <section className="testimonial-section">
      <div className="testimonial-section__container">
        <div className="testimonial-section__header">
          <p className="testimonial-section__eyebrow">Anmeldelser</p>
          <h2 className="testimonial-section__heading">
            Hvad siger vores kunder?
          </h2>
        </div>

        <div className="testimonial-section__content">
          <div className="testimonial-section__controls">
            <div className="testimonial-section__buttons">
              <button
                type="button"
                className="testimonial-section__button"
                onClick={handlePrev}
                aria-label="Forrige anmeldelse"
              >
                <span>←</span>
              </button>

              <button
                type="button"
                className="testimonial-section__button"
                onClick={handleNext}
                aria-label="Næste anmeldelse"
              >
                <span>→</span>
              </button>
            </div>

            <p className="testimonial-section__count">
              {displayedIndex + 1}/{testimonials.length}
            </p>
          </div>

          <div className="testimonial-section__body">
            <div className="testimonial-section__quote-wrap">
              <div className="testimonial-section__quote-mask">
                <p
                  key={displayedIndex}
                  className={`testimonial-section__quote testimonial-section__quote--${phase}`}
                >
                  {current.quote}
                </p>
              </div>
            </div>

            <div
              className={`testimonial-section__person testimonial-section__person--${phase}`}
            >
              <img
                src={current.image}
                alt={current.name}
                className="testimonial-section__avatar"
                loading="lazy"
                decoding="async"
              />

              <div className="testimonial-section__person-text">
                <h3 className="testimonial-section__name">{current.name}</h3>
                <p className="testimonial-section__company">{current.company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;