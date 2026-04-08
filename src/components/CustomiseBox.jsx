import { useEffect, useRef, useState } from "react"; 
import "./ProcessBox.css"; 
import eggandflour from "../assets/ProcessBox/eggandflour.mp4"; 
import cutpasta from "../assets/ProcessBox/cutpasta.mp4"; 
import gryde from "../assets/ProcessBox/gryde.mp4"; 
import parmasan from "../assets/ProcessBox/parmasan.mp4"; 
import servering from "../assets/ProcessBox/servering.mp4"; 

function ProcessBox() { // opretter React-komponenten ProcessBox
  const [activeIndex, setActiveIndex] = useState(0); // gemmer hvilket accordion-item der er åbent, starter på 0 (første item)
  const [isClosing, setIsClosing] = useState(false); // holder styr på om accordion er i gang med at lukke
  const [seenSteps, setSeenSteps] = useState([0]); // gemmer hvilke steps brugeren har set, step 0 er set fra start
  const timeoutRef = useRef(null); // gemmer timeout-id så vi kan rydde det op senere

  const steps = [ // array med alle dine accordion steps
    {
      number: "01", // step nummer
      title: "Forberedelse", // titel på step
      text: "Når vi udvikler en ny ret til menukortet, starter vi med at finde ud af, hvilke råvarer vi skal bruge.\n\nPå samme måde begynder vi processen med research og behovsafdækning, hvor vi i tæt samarbejde kortlægger jeres mål og ønsker for at skabe en løsning, der passer til netop jeres virksomhed.", // beskrivende tekst, \n\n laver nyt afsnit
      video: eggandflour, // video som hører til dette step
    },
    {
      number: "02", // step nummer
      title: "Klargøring", // titel
      text: "På næste step klargør vi råvarerne – vi skærer, former og samler. På samme måde udvikler vi den visuelle stil og designelementer til websitet med fokus på det essentielle.  Her opstilles mockups, hvor vi arbejder med en begrænset farvepalette, optimerede billeder og simple grafiske elementer for at reducere datamængden og skabe et hurtigt og effektivt website.", // tekst
      video: cutpasta, // video
    },
    {
      number: "03", // step nummer
      title: "Tilberedning", // titel
      text: "Nu skal retten tilberedes. På samme måde udvikler vi websitet, hvor vi koger kodningen ned til en let og effektiv opbygning. Ved at minimere unødvendig kode og optimere strukturen sikrer vi høj performance og et website, der loader hurtigt og bruger færre ressourcer.", // tekst
      video: gryde, // video
    },
    {
      number: "04", // step nummer
      title: "Finish", // titel
      text: "I finish-fasen finjusterer vi design, indhold og funktionalitet. Her gennemgår vi alle detaljer, så websitet fremstår helstøbt, brugervenligt og klar til lancering med fokus på kvalitet og bæredygtige valg.", // tekst
      video: parmasan, // video
    },
    {
      number: "05", // step nummer
      title: "Servering", // titel
      text: "Retten er færdig og klar til servering. Når websitet er testet og finjusteret, er det klar til lancering. I får et skræddersyet website, der passer til jeres målgruppe og behov. Resultatet er en visuelt stærk og brugervenlig løsning med fokus på bæredygtige tiltag.", // tekst
      video: servering, // video
    },
  ];

  const handleToggle = (index) => { // funktion som kører når man klikker på et accordion-item
    if (index === activeIndex) return; // hvis man klikker på det allerede åbne item, sker der ikke noget

    clearTimeout(timeoutRef.current); // rydder tidligere timeout hvis der findes en
    setIsClosing(true); // sætter closing-state til true så lukke-animation kan køre

    timeoutRef.current = setTimeout(() => { // starter en forsinkelse før nyt item åbnes
      setActiveIndex(index); // gør det klikkede item aktivt

      setSeenSteps((prev) => // opdaterer listen over steps brugeren har set
        prev.includes(index) ? prev : [...prev, index] // hvis step allerede er set, behold listen, ellers tilføj det
      );

      setIsClosing(false); // closing er færdig, så nyt item kan vises
    }, 220); // venter 220 millisekunder
  };

  useEffect(() => { // kører når komponenten mountes
    return () => clearTimeout(timeoutRef.current); // rydder timeout når komponenten unmountes
  }, []); // tom dependency array = kører kun ved mount/unmount

  return ( // JSX som komponenten renderer
    <section className="process-box"> {/* yderste sektion */}
      <div className="process-box__container"> {/* centreret container */}
      
        <div className="process-box__accordion"> {/* wrapper til hele accordion */}
          {steps.map((step, index) => { // looper gennem alle steps
            const isActive = activeIndex === index && !isClosing; // tjekker om dette step er det aktive og ikke i lukke-state
            const shouldAutoplay = isActive && seenSteps.includes(index); // video autoplay kun hvis step er aktivt og allerede er set

            return ( // returnerer ét accordion-item for hvert step
              <div
                key={step.number} // unik key til React
                className={`process-item ${isActive ? "process-item--active" : ""}`} // tilføjer aktiv klasse hvis item er åbent
              >
                <button
                  type="button" // gør knappen til en normal button
                  className="process-item__trigger" // CSS-klasse til trigger
                  onClick={() => handleToggle(index)} // klik åbner/lukker via handleToggle
                >
                  <span className="process-item__title">{step.title}</span> {/* viser step titel */}
                  <span className="process-item__number">{step.number}</span> {/* viser step nummer */}
                </button>

                <div className="process-item__content"> {/* skjult/åbent indhold */}
                  <div className="process-item__inner"> {/* indre layout wrapper */}
                    <div className="process-item__media"> {/* område til video */}
                      {isActive && ( // video vises kun når item er aktivt
                        <video
                          key={step.video} // key tvinger video til at genindlæses når step skifter
                          src={step.video} // vælger den rigtige video
                          className="process-item__video" // CSS-klasse
                          autoPlay={shouldAutoplay} // autoplay hvis betingelsen er opfyldt
                          muted // video er muted
                          playsInline // spiller inline på mobil i stedet for fullscreen
                          preload="metadata" // loader kun metadata først
                          controls={false} // skjuler video controls
                        />
                      )}
                    </div>

                    <div className="process-item__text"> {/* område til tekst */}
                      {step.text.split("\n\n").map((paragraph, paragraphIndex) => ( // splitter teksten i afsnit ved dobbelt linjeskift
                        <p key={paragraphIndex}>{paragraph}</p> // renderer hvert afsnit som et p-tag
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

export default ProcessBox; // eksporterer komponenten så den kan bruges andre steder