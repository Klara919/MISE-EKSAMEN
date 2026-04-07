import "./ServicesFront.css";
import knifeAndFork from "../assets/Services/knifeandfork.svg";
import circle1 from "../assets/Services/Scratch.svg";
import circle2 from "../assets/Services/Customize.svg";
import { useNavigate } from "react-router-dom";

export default function ServicesMenu() {
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 1,
      label: "MENU1",
      title: "From Scratch",
      circle: circle1,
      description:
        "Vi udvikler skræddersyede websites fra bunden med fokus på performance, enkelhed og effektiv kode. Gennem gennemtænkte designvalg og optimerede løsninger skaber vi digitale produkter, der er hurtige, lette og ressourceeffektive.",
      price: "Fra: 20.000 kr.",
      path: "/menu1",
    },
    {
      id: 2,
      label: "MENU2",
      title: "Customize",
      circle: circle2,
      description:
        "Vi starter med en dialog for at afdække netop jeres behov. Herefter skræddersyr vi en løsning, hvad enten det er optimering af SEO, performance, udvikling af visuel identitet eller noget helt fjerde.",
      price: "Fra: 10.000 kr.",
      path: "/menu2",
    },
  ];

  return (
    <div className="wrapper">
      <div className="overlay" />

      <div className="content">
        <div className="header">
          <p className="subtitle">Services</p>
          <h1>Hvad kan vi gøre for jer?</h1>
          <p className="intro">
            Hos MISE tilbyder vi fleksible løsninger, der tilpasses dine behov.
            Uanset om du ønsker en hjemmeside fra bunden eller videreudvikling
            af en eksisterende, hjælper vi dig med at skabe en løsning
            skræddersyet til din virksomhed.
          </p>
        </div>

        <div className="grid">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="menu-card"
              onClick={() => navigate(item.path)}
              style={{ cursor: "pointer" }}
            >
              <h2>{item.label}</h2>

              <div className="icon-wrapper">
                <img src={knifeAndFork} alt="" className="cutlery" />
                <img
                  src={item.circle}
                  alt=""
                  className="circle rotating-circle"
                />
              </div>

              <h3>{item.title}</h3>
              <p className="desc">{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}