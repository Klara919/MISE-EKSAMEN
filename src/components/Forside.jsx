import { useState, useEffect } from "react";
import heroLeft from "../assets/pasta3.svg";
import heroRight from "../assets/bord.svg";
import logo from "../assets/MISEgraa.svg";
import "./Forside.css";

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
    if (hasSeenIntro) {
      return;
    }

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
        <div className={`intro-overlay ${doorsOpen ? "open" : ""}`}>
          <div className="door door-left"></div>
          <div className="door door-right"></div>

          <div className={`intro-text ${doorsOpen ? "fade-out" : ""}`}>
            <img src={logo} alt="Mise logo" className="intro-logo" />
            <p>Webbureau specialiseret i restaurationsbranchen</p>
          </div>
        </div>
      )}

      <section className="hero-section">
        <div className="hero-wrapper">
          <div className="hero-images">
            <div className="hero-left">
              <img src={heroLeft} alt="" />

              <div className="hero-content">
                <h1>we create.</h1>

                <p className={animate ? "text-enter" : "text-exit"}>
                  {texts[index]}
                </p>
              </div>
            </div>

            <div className="hero-right">
              <img src={heroRight} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Forside;

