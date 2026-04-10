import styles from "./Menu2.module.css";
import { useNavigate } from "react-router-dom";
import CustomiseBox from "./CustomiseBox";
import WhiteFooter from "./WhiteFooter";

export default function Menu2() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.menu2Page}>
        <div className={styles.menu2Overlay}></div>

        <div className={styles.menu2Card}>
          <button
            className={styles.menu2Close}
            onClick={() => navigate("/Services")}
          >
            ×
          </button>

          <h1 className={styles.menu2Label}>MENU2</h1>

          <div className={styles.menu2Content}>
            <h2 className={styles.menu2Title}>Customize</h2>
            <p className={styles.menu2Description}>
              Vi starter med en dialog for at afdække netop jeres behov. Herefter
              skræddersyr vi en løsning, hvor det enten er optimering af SEO,
              performance, udvikling af visuel identitet eller noget helt fjerde.
              Med fokus på gennemtænkte valg og effektive løsninger skaber vi et
              website, der er hurtigt, enkelt og ressourcebevidst.
            </p>
          </div>

          <div className={styles.menu2CustomizeBox}>
            <CustomiseBox />
          </div>
        </div>
      </div>

      <WhiteFooter />
    </>
  );
}