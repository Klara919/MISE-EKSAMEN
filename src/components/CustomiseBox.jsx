import { useEffect, useRef, useState } from "react";
import styles from "./CustomiseBox.module.css";
import Dialog from "../assets/CustomiseBox/Dialog.svg";
import Analyse from "../assets/CustomiseBox/Analyse.svg";
import Strategi from "../assets/CustomiseBox/Strategi.svg";
import Optimering from "../assets/CustomiseBox/Optimering.svg";
import Udgivelse from "../assets/CustomiseBox/Udgivelse.svg";

function CustomiseBox() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const timeoutRef = useRef(null);

  const steps = [
    {
      number: "01",
      title: "Dialog",
      text: "I første fase indleder vi en dialog, hvor vi arbejder på at forstå jeres virksomhed og identificere jeres kernebehov. Sammen afdækker vi jeres mål, udfordringer og de områder, hvor jeres website kan optimeres, så vi skaber det rette fundament for den videre proces.",
      image: Dialog,
    },
    {
      number: "02",
      title: "Analyse",
      text: "I denne fase arbejder vi videre med de problematikker, vi har afdækket i dialogen. Her analyserer vi, hvordan løsningen bedst kan opbygges og implementeres, så den lever op til jeres behov, mål og ønsker. Analysen danner grundlag for vores videre arbejde med udviklingsprocessen.",
      image: Analyse,
    },
    {
      number: "03",
      title: "Strategi",
      text: "På baggrund af analysen udarbejder vi en strategi for, hvordan vi vil optimere jeres website - hvad enten det er optimering af SEO, performance, udvikling af visuel identitet eller noget helt fjerde.",
      image: Strategi,
    },
    {
      number: "04",
      title: "Optimering",
      text: "I fjerde step vil vi udvikle løsningen på baggrund af foregående steps. Vi finjusterer og tester sitet med fokus på effektive og bæredygtige løsninger, der stemmer overens med jeres behov.",
      image: Optimering,
    },
    {
      number: "05",
      title: "Udgivelse",
      text: "I sidste fase lancerer vi jeres optimerede website, hvor alle rettelser og tilpasninger fra processen er implementeret. Resultatet er et færdigt website, der er klar til brug og tilpasset jeres behov.",
      image: Udgivelse,
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
    <section className={styles.customiseBox}>
      <div className={styles.container}>
        <div className={styles.accordion}>
          {steps.map((step, index) => {
            const isActive = activeIndex === index && !isClosing;

            return (
              <div
                key={step.number}
                className={`${styles.item} ${isActive ? styles.active : ""}`}
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
                        <img
                          src={step.image}
                          alt={step.title}
                          className={styles.image}
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

export default CustomiseBox;