import ProcessBox from "../components/ProcessBox";
import Forside from "../components/Forside";
import Cases from "../components/Cases";
import WhiteFooter from "../components/WhiteFooter";
import TestimonialSection from "../components/TestimonialSection";
import IntroSection from "../components/IntroSection";
import CTA from "../components/CTA";

function Home() {
  return (
    <main className="page page--dark">
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