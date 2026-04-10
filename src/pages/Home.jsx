import ProcessBox from "../components/ProcessBox";
import Forside from "../components/Forside";
import Cases from "../components/Cases";
import WhiteFooter from "../components/WhiteFooter";
import TestimonialSection from "../components/TestimonialSection";
import IntroSection from "../components/IntroSection";
import CTA from "../components/CTA";
import { Helmet } from "react-helmet-async";
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={`${styles.page} ${styles.pageDark}`}>
      <Helmet>
        <title>Forside | MiSE</title>
        <meta
          name="description"
          content="MiSE er et webbureau for restaurationsbranchen, der skaber websites og digitale identiteter med fokus på performance, visuel kvalitet og bevidste digitale valg"
        />
      </Helmet>

      <Forside />
      <IntroSection />

      <div className={styles.processIntro}>
        <p className={styles.processEyebrow}>Vores process</p>

        <h2 className={styles.processHeading}>
          Sådan bygger vi din
          <br />
          hjemmeside
        </h2>

        <p className={styles.processDescription}>
          Vi skaber hjemmesider, der ikke bare ser godt ud og fungerer effektivt,
          men som også er udviklet med omtanke for miljøet. Gennem gennemtænkt
          design, optimeret performance og bevidste digitale valg bygger vi en
          løsning, der understøtter din forretning og tager hensyn til fremtiden.
        </p>
      </div>

      <ProcessBox />
      <Cases />
      <TestimonialSection />
      <CTA />
      <WhiteFooter />
    </main>
  );
}

export default Home;