import React from "react";
import "./HvemViEr.css";

import TeamCard from "../components/TeamCard";
import RedFooter from "../components/RedFooter";
import { Helmet } from "react-helmet-async";

import emilImage from "../assets/Portrætter/emil.webp";
import klaraImage from "../assets/Portrætter/klara.webp";
import julieImage from "../assets/Portrætter/julie.webp";
import natImage from "../assets/Portrætter/nat.webp";


export default function HvemViEr() {
  return (
    <div className="page">
      <Helmet>
        <title>Hvem vi er | MiSE</title>
        <meta
        name="description"
        content="Lær MiSE at kende – et webbureau for restaurationsbranchen med fokus på struktur, visuel kvalitet, performance og bevidste digitale valg."
       />
      </Helmet>

      <main className="hvem-container">
        <section className="hvem-intro">
          <p className="hvem-eyebrow">Hvem vi er</p>

          <h1 className="hvem-heading">Hvem er teamet bag MiSE?</h1>

          <p className="hvem-text">
            Bag MiSE står et passioneret team med en fælles ambition om at skabe
            digitale løsninger, der gør en forskel. Vi arbejder med fokus på æstetik,
            kvalitet og gennemtænkte valg, hvor bæredygtighed indgår som en naturlig
            del af vores tilgang til design og udvikling.
          </p>
        </section>

        <section className="team-grid">
          <TeamCard
            image={emilImage}
            quote="Jeg arbejder med den kreative retning og det visuelle udtryk. For mig handler det om at skabe en rød tråd gennem hele oplevelsen, så design, budskab og brugeroplevelse hænger sammen."
            role="Creative Director"
            name="Emil Beyer"
            linkedinUrl="https://linkedin.com/in/emilstrømbeyer"
            email="emilbeyer@gmail.com"
          />

          <TeamCard
            image={klaraImage}
            quote="For mig handler god kode om at være simpel, struktureret og til at forstå. Det giver kunden frihed til selv at arbejde videre med deres website."
            role="Frontend Developer / Web Designer"
            name="Klara Berthelsen Johansen"
            linkedinUrl="https://linkedin.com/in/klara-mai-berthelsen-johansen-a47a14215"
            email="klarambj@icloud.com"
          />

          <TeamCard
            image={julieImage}
            quote="For mig handler webdesign om at give mening. At skabe løsninger, der er gennemtænkte, brugervenlige og designet med omtanke."
            role="Digital Strategist"
            name="Julie Sand"
            linkedinUrl="https://linkedin.com/in/julie-sand-62137037a"
            email="Stribe2810@gmail.com"
          />

          <TeamCard
            image={natImage}
            quote="Bæredygtighed er vigtigt for mig, når jeg designer et website. Vi skal passe på vores klode, og selvom forskellen kan virke lille, bliver den enorm, hvis vi alle bidrager."
            role="UI / UX Designer"
            name="Natasja Løvshall"
            linkedinUrl="https://linkedin.com/in/natasja-løvschall-1b84072b1"
            email="natatasja@gmail.com"
          />
        </section>
      </main>

      <RedFooter />
    </div>
  );
}