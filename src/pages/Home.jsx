import ProcessBox from "../components/ProcessBox";
import Forside from "../components/Forside";
import Cases from "../components/Cases";
import WhiteFooter from "../components/WhiteFooter";
import TestimonialSection from "../components/TestimonialSection";
import IntroSection from "../components/IntroSection";
import CTA from "../components/CTA";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <main className="page page--dark">

        <Helmet>
              <title>Forside | MiSE</title>
              <meta
              name="description"
              content="MiSE er et webbureau for restaurationsbranchen, der skaber websites og digitale identiteter med fokus på performance, visuel kvalitet og bevidste digitale valg"
             />
            </Helmet>

      <Forside />
      <IntroSection />
      <ProcessBox />
      <Cases />
      <TestimonialSection />
      <CTA/>
      <WhiteFooter />
    </main>
  );
}

export default Home;