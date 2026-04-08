import CasesSection from "../components/Cases";
import RedFooter from "../components/RedFooter";
import { Helmet } from "react-helmet-async";



function Cases() {
  return (
    <>
<Helmet>
  <title>Cases | MiSE</title>
  <meta
    name="description"
    content="Se cases fra MiSE og få indblik i, hvordan vi arbejder med websites, visuel identitet, SEO og performance for restaurationsbranchen."
  />
</Helmet>

      <CasesSection />
         <RedFooter />
    </>
  );
}

export default Cases;