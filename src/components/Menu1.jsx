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

        <h1 className="menu1-label">MENU1</h1>

        <div className="menu1-content">
          <h2 className="menu1-title">From Scratch</h2>
          <p className="menu1-description">
            Vi udvikler skræddersyede websites fra bunden med fokus på
            performance, enkelhed og effektiv kode. Gennem gennemtænkte
            designvalg og optimerede løsninger skaber vi digitale produkter,
            der er hurtige, lette og ressourceeffektive.
          </p>
        </div>
      </div>
    </div>
  );
}