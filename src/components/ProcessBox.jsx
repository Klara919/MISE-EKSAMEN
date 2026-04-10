import { useEffect, useRef, useState } from "react";
import styles from "./ProcessBox.module.css";
import eggandflour from "../assets/ProcessBox/eggandflour.mp4";
import cutpasta from "../assets/ProcessBox/cutpasta.mp4";
import gryde from "../assets/ProcessBox/gryde.mp4";
import parmasan from "../assets/ProcessBox/parmasan.mp4";
import servering from "../assets/ProcessBox/servering.mp4";

function ProcessBox() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [seenSteps, setSeenSteps] = useState([0]);
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
      video: gryde,
    },
    {
      number: "04",
      title: "Finish",
      text: "I finish-fasen finjusterer vi design, indhold og funktionalitet. Her gennemgår vi alle detaljer, så websitet fremstår helstøbt, brugervenligt og klar til lancering med fokus på kvalitet og bæredygtige valg.",
      video: parmasan,
    },
    {
      number: "05",
      title: "Servering",
      text: "Retten er færdig og klar til servering. Når websitet er testet og finjusteret, er det klar til lancering. I får et skræddersyet website, der passer til jeres målgruppe og behov. Resultatet er en visuelt stærk og brugervenlig løsning med fokus på bæredygtige tiltag.",
      video: servering,
    },
  ];

  const handleToggle = (index) => {
    if (index === activeIndex) return;

    clearTimeout(timeoutRef.current);
    setIsClosing(true);

    timeoutRef.current = setTimeout(() => {
      setActiveIndex(index);

      setSeenSteps((prev) =>
        prev.includes(index) ? prev : [...prev, index]
      );

      setIsClosing(false);
    }, 220);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <section className={styles.processBox}>
      <div className={styles.container}>
        <div className={styles.accordion}>
          {steps.map((step, index) => {
            const isActive = activeIndex === index && !isClosing;
            const shouldAutoplay = isActive && seenSteps.includes(index);

            return (
              <div
                key={step.number}
                className={`${styles.item} ${
                  isActive ? styles.itemActive : ""
                }`}
              >
                <button
                  type="button"
                  className={styles.trigger}
                  onClick={() => handleToggle(index)}
                >
                  <span className={styles.title}>{step.title}</span>
                  <span className={styles.number}>{step.number}</span>
                </button>

                <div className={styles.content}>
                  <div className={styles.inner}>
                    <div className={styles.media}>
                      {isActive && (
                        <video
                          key={step.video}
                          src={step.video}
                          className={styles.video}
                          autoPlay={shouldAutoplay}
                          muted
                          playsInline
                          preload="metadata"
                          controls={false}
                        />
                      )}
                    </div>

                    <div className={styles.text}>
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