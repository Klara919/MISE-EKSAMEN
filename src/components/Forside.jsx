import { useState, useEffect } from "react"; 
import heroLeft from "../assets/pasta3.svg"; 
import heroRight from "../assets/bord.svg"; 
import logo from "../assets/MISEgraa.svg"; 
import "./Forside.css"; 

function Forside() { // opretter komponenten

  const texts = [ // array med tekster der skifter
    "Responsible webdesign",
    "Responsible webdesign",
    "Visual identity",
    "Performance optimization",
    "SEO optimization",
    "With a sustainable focus",
  ];

  const [index, setIndex] = useState(0); // hvilken tekst der vises lige nu
  const [animate, setAnimate] = useState(true); // styrer animation (fade in/out)
  const [doorsOpen, setDoorsOpen] = useState(false); // styrer om intro-døre er åbne
  const [hideOverlay, setHideOverlay] = useState(false); // styrer om overlay skal fjernes helt

  useEffect(() => { // kører én gang når siden loader

    const openTimer = setTimeout(() => {
      setDoorsOpen(true); // åbner dørene efter 2 sek
    }, 2000);

    const hideTimer = setTimeout(() => {
      setHideOverlay(true); // fjerner overlay efter 3.8 sek
    }, 3800);

    return () => { // cleanup når komponent unmountes
      clearTimeout(openTimer); // stopper første timer
      clearTimeout(hideTimer); // stopper anden timer
    };
  }, []); // tom dependency = kører kun én gang

  useEffect(() => { // kører hver gang index ændrer sig

    if (index >= texts.length - 1) return; // stopper når sidste tekst er nået

    const timer = setTimeout(() => {
      setAnimate(false); // starter fade-out animation

      setTimeout(() => {
        setIndex((prev) => prev + 1); // skifter til næste tekst
        setAnimate(true); // fade-in igen
      }, 400); // matcher CSS animation

    }, 2000); // skifter tekst hver 2 sek

    return () => clearTimeout(timer); // cleanup
  }, [index, texts.length]); // afhænger af index

  return ( // JSX output
    <>
      {!hideOverlay && ( // vis overlay så længe hideOverlay er false
        <div className={`intro-overlay ${doorsOpen ? "open" : ""}`}> {/* tilføjer class "open" når dørene åbner */}

          <div className="door door-left"></div> {/* venstre dør */}
          <div className="door door-right"></div> {/* højre dør */}

          <div className={`intro-text ${doorsOpen ? "fade-out" : ""}`}> {/* tekst der fader ud */}
            <img src={logo} alt="Mise logo" className="intro-logo" /> {/* logo */}
            <p>Webbureau specialiseret i restaurationsbranchen</p> {/* tekst */}
          </div>
        </div>
      )}

      <section className="hero-section"> {/* hero sektion */}
        <div className="hero-wrapper"> {/* centrerer indhold */}
          <div className="hero-images"> {/* wrapper for billeder */}

            <div className="hero-left"> {/* venstre side */}
              <img src={heroLeft} alt="" /> {/* venstre billede */}

              <div className="hero-content"> {/* tekst ovenpå billedet */}
                <h1>we create.</h1> {/* headline */}

                <p className={animate ? "text-enter" : "text-exit"}> {/* skifter klasse baseret på animation */}
                  {texts[index]} {/* viser tekst fra array */}
                </p>
              </div>
            </div>

            <div className="hero-right"> {/* højre side */}
              <img src={heroRight} alt="" /> {/* højre billede */}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Forside; // gør komponenten tilgængelig andre steder