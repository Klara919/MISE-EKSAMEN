import styles from "./Menu1.module.css";
import { useNavigate } from "react-router-dom";
import ProcessBox from "./ProcessBox";
import WhiteFooter from "./WhiteFooter";

export default function Menu1() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.menu1Page}>
        <div className={styles.menu1Overlay}></div>

        <div className={styles.menu1Card}>
          <button
            className={styles.menu1Close}
            onClick={() => navigate("/Services")}
          >
            ×
          </button>

          <h1 className={styles.menu1Label}>MENU1</h1>

          <div className={styles.menu1Content}>
            <h2 className={styles.menu1Title}>From Scratch</h2>
            <p className={styles.menu1Description}>
              Vi udvikler skræddersyede websites fra bunden med fokus på
              performance, enkelhed og effektiv kode. Gennem gennemtænkte
              designvalg og optimerede løsninger skaber vi digitale produkter,
              der er hurtige, lette og ressourceeffektive.
            </p>
          </div>

          <div className={styles.menu1Processbox}>
            <ProcessBox />
          </div>
        </div>
      </div>

      <WhiteFooter />
    </>
  );
}