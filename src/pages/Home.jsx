import ProcessBox from "../components/ProcessBox";
import Forside from "../components/Forside";
import Cases from "../components/Cases";
import WhiteFooter from "../components/WhiteFooter";
import TestimonialSection from "../components/TestimonialSection";
import IntroSection from "../components/IntroSection";

function Home() {
  return (
    <main className="page page--dark">
      <Forside />
      <IntroSection />
      <ProcessBox />
      <Cases />
      <TestimonialSection />
      <WhiteFooter />
    </main>
  );
}

export default Home;