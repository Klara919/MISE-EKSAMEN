import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Cases from "./pages/Cases.jsx";
import HvemViEr from "./pages/HvemViEr.jsx";
import Kontakt from "./pages/Kontakt.jsx";

import SideBrand from "./components/SideBrand.jsx";
import BurgerMenu from "./components/BurgerMenu.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Menu1 from "./components/Menu1.jsx";
import Menu2 from "./components/Menu2.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <BurgerMenu />
      <SideBrand />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/hvem-vi-er" element={<HvemViEr />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/menu1" element={<Menu1 />} />
        <Route path="/menu2" element={<Menu2 />} />
      </Routes>
    </>
  );
}

export default App;