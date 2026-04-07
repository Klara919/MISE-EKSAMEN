import './Menu.css';
import { useNavigate } from 'react-router-dom';

export default function Menu1() {
  const navigate = useNavigate();

  return (
    <div className="menu1-page">
      <div className="menu1-overlay"></div>

      <div className="menu1-card">
        <button className="menu1-close" onClick={() => navigate('/')}>
          ×
        </button>

        <h1 className="menu1-label">MENU2</h1>

        <div className="menu1-content">
          <h2 className="menu1-title">Customize</h2>
          <p className="menu1-description">
            Vi starter med en dialog for at afdække netop jeres behov. Herefter skræddersyr vi en løsning, hvor latent det er optimering af SEO, performance, udvikling af visuel identitet eller noget helt fjerde. Med fokus på gennemtænkte valg og effektive løsninger skaber vi et website, der er hurtigt, enkelt og ressourcebevidst.
          </p>
        </div>
      </div>
    </div>
  );
}