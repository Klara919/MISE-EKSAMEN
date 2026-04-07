import { useEffect, useRef, useState } from "react";
import "./ProcessBox.css";
import eggandflour from "../assets/ProcessBox/eggandflour.mp4";
import cutpasta from "../assets/ProcessBox/cutpasta.mp4";
import processbox3 from "../assets/ProcessBox/processbox3.svg";
import processbox4 from "../assets/ProcessBox/processbox4.svg";
import processbox5 from "../assets/ProcessBox/processbox5.svg";

function ProcessBox() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const timeoutRef = useRef(null);

  const steps = [
    {
      number: "01",
      title: "Forberedelse",
      text: "Når vi udvikler en ny ret til menukortet, starter vi med at finde ud af, hvilke råvarer vi skal bruge.\n\nPå samme måde begynder vi processen med research og behovsafdækning, hvor vi i tæt samarbejde kortlægger jeres mål og ønsker for at skabe en løsning, der passer til netop jeres virksomhed.",
      video: eggandflour,
    },
    {
      number: "02",
      title: "Klargøring",
      text: "På næste step klargør vi råvarerne – vi skærer, former og samler. På samme måde udvikler vi den visuelle stil og designelementer til websitet med fokus på det essentielle. Her opstilles mockups, hvor vi arbejder med en begrænset farvepalette, optimerede billeder og simple grafiske elementer for at reducere datamængden og skabe et hurtigt og effektivt website.",
      video: cutpasta,
    },
    {
      number: "03",
      title: "Tilberedning",
      text: "Nu skal retten tilberedes. På samme måde udvikler vi websitet, hvor vi koger kodningen ned til en let og effektiv opbygning. Ved at minimere unødvendig kode og optimere strukturen sikrer vi høj performance og et website, der loader hurtigt og bruger færre ressourcer.",
      image: processbox3,
    },
    {
      number: "04",
      title: "Finish",
      text: "I finish-fasen finjusterer vi design, indhold og funktionalitet. Her gennemgår vi alle detaljer, så websitet fremstår helstøbt, brugervenligt og klar til lancering med fokus på kvalitet og bæredygtige valg.",
      image: processbox4,
    },
    {
      number: "05",
      title: "Servering",
      text: "Retten er færdig og klar til servering. Når websitet er testet og finjusteret, er det klar til lancering. I får et skræddersyet website, der passer til jeres målgruppe og behov. Resultatet er en visuelt stærk og brugervenlig løsning med fokus på bæredygtige tiltag.",
      image: processbox5,
    },
  ];

  const handleToggle = (index) => {
    if (index === activeIndex) return;

    clearTimeout(timeoutRef.current);

    setIsClosing(true);

    timeoutRef.current = setTimeout(() => {
      setActiveIndex(index);
      setIsClosing(false);
    }, 220);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <section className="process-box">
      <div className="process-box__container">
        <div className="process-box__intro">
          <p className="process-box__eyebrow">Vores process</p>

          <h2 className="process-box__heading">
            Sådan bygger vi din
            <br />
            hjemmeside
          </h2>

          <p className="process-box__description">
            Vi skaber hjemmesider, der ikke bare ser godt ud og fungerer effektivt,
            men som også er udviklet med omtanke for miljøet. Gennem gennemtænkt
            design, optimeret performance og bevidste digitale valg bygger vi en
            løsning, der understøtter din forretning og tager hensyn til fremtiden.
          </p>
        </div>

        <div className="process-box__accordion">
          {steps.map((step, index) => {
            const isActive = activeIndex === index && !isClosing;

            return (
              <div
                key={step.number}
                className={`process-item ${isActive ? "process-item--active" : ""}`}
              >
                <button
                  type="button"
                  className="process-item__trigger"
                  onClick={() => handleToggle(index)}
                >
                  <span className="process-item__title">{step.title}</span>
                  <span className="process-item__number">{step.number}</span>
                </button>

                <div className="process-item__content">
                  <div className="process-item__inner">
                    <div className="process-item__media">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="process-item__image"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div className="process-item__text">
                      {step.text.split("\n\n").map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProcessBox;