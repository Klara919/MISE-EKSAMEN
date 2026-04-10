import styles from "./CTA.module.css";
import illustration from "../assets/pastaservering.png";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={`${styles.container} ${styles.ctaContainer}`}>
        <div className={styles.ctaText}>
          <h2>Lad os bygge noget sammen</h2>
          <p>
            Skal vi gøre din hjemmeside klar til servering? <br />
            En god hjemmeside er som en god ret – den skal friste, fungere
            og få gæsterne <br />til at vende tilbage.
          </p>

          <Link to="/kontakt">
            <button>Kontakt os</button>
          </Link>
        </div>

        <div className={styles.ctaImage}>
          <img src={illustration} alt="Servering illustration" />
        </div>
      </div>
    </section>
  );
}