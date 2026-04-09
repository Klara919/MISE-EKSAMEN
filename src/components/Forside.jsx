import { useState, useEffect } from "react";
import heroLeft from "../assets/pasta3.svg";
import heroRight from "../assets/bord.svg";
import logo from "../assets/MISEgraa.svg";
import styles from "./Forside.module.css";

function Forside() {
  const texts = [
    "Responsible webdesign",
    "Responsible webdesign",
    "Visual identity",
    "Performance optimization",
    "SEO optimization",
    "With a sustainable focus",
  ];

  const hasSeenIntro =
    typeof window !== "undefined" &&
    sessionStorage.getItem("hasSeenIntro") === "true";

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(hasSeenIntro);
  const [showIntro, setShowIntro] = useState(!hasSeenIntro);

  useEffect(() => {
    if (hasSeenIntro) return;

    sessionStorage.setItem("hasSeenIntro", "true");

    const openTimer = setTimeout(() => {
      setDoorsOpen(true);
    }, 2000);

    const hideTimer = setTimeout(() => {
      setHideOverlay(true);
    }, 3800);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(hideTimer);
    };
  }, [hasSeenIntro]);

  useEffect(() => {
    if (index >= texts.length - 1) return;

    let textTimer;

    const timer = setTimeout(() => {
      setAnimate(false);

      textTimer = setTimeout(() => {
        setIndex((prev) => prev + 1);
        setAnimate(true);
      }, 400);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, [index, texts.length]);

  return (
    <>
  {showIntro && !hideOverlay && (
  <div className={`${styles.introOverlay} ${doorsOpen ? styles.open : ""}`}>
    <div
      className={`${styles.door} ${styles.doorLeft} ${doorsOpen ? styles.doorLeftOpen : ""}`}
    ></div>
    <div
      className={`${styles.door} ${styles.doorRight} ${doorsOpen ? styles.doorRightOpen : ""}`}
    ></div>

    <div className={`${styles.introText} ${doorsOpen ? styles.fadeOut : ""}`}>
      <img src={logo} alt="Mise logo" className={styles.introLogo} />
      <p>Webbureau specialiseret i restaurationsbranchen</p>
    </div>
  </div>
)}
      <section className={styles.heroSection}>
        <div className={styles.heroWrapper}>
          <div className={styles.heroImages}>
            <div className={styles.heroLeft}>
              <img src={heroLeft} alt="" />

              <div className={styles.heroContent}>
                <h1>we create.</h1>

                <p className={animate ? styles.textEnter : styles.textExit}>
                  {texts[index]}
                </p>
              </div>
            </div>

            <div className={styles.heroRight}>
              <img src={heroRight} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Forside;