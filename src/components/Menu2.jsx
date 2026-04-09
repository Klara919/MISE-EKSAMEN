import './Menu2.css';
import { useNavigate } from 'react-router-dom';
import CustomiseBox from './CustomiseBox';
import WhiteFooter from './WhiteFooter';

export default function Menu1() {
  const navigate = useNavigate();

  return (
    <>
      <div className="menu2-page">
        <div className="menu2-overlay"></div>

        <div className="menu2-card">
          <button className="menu2-close" onClick={() => navigate('/Services')}>
            ×
          </button>

          <h1 className="menu2-label">MENU2</h1>

          <div className="menu2-content">
            <h2 className="menu2-title">Customize</h2>
            <p className="menu2-description">
              Vi starter med en dialog for at afdække netop jeres behov. Herefter
              skræddersyr vi en løsning, hvor det enten er optimering af SEO,
              performance, udvikling af visuel identitet eller noget helt fjerde.
              Med fokus på gennemtænkte valg og effektive løsninger skaber vi et
              website, der er hurtigt, enkelt og ressourcebevidst.
            </p>
          </div>

          <div className="menu2-customizeBox">
            <CustomiseBox />
          </div>
        </div>
      </div>

      <WhiteFooter />
    </>
  );
}