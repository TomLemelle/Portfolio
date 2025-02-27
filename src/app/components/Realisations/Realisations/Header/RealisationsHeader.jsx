"use client";

import Image from "next/image";
import "./RealisationsHeader.css";

export default function RealisationsHeader({ choice, setChoice }) {
  const handleChoice = (value) => {
    setChoice(value);
  };

  return (
    <header className="realisations-title-container">
      <h1 className="realisations-title">Toutes mes réalisations</h1>
      <p className="realisations-description">
        Développement d’apps, sites Webflow dynamiques, images percutantes en
        photo et vidéo – chaque projet est pensé pour s’adapter à ton univers.
        Créatif, technique et précis, je donne vie à des projets uniques.
      </p>
      <div className="domains-container">
        <Image
          src="/arrow.png"
          width={105}
          height={123}
          alt="Arrow design"
          className="arrow-domain"
        />
        <Image
          src="/arrow.png"
          width={105}
          height={123}
          alt="Arrow design"
          className="arrow-domain"
        />
        <div className="domain" onClick={() => handleChoice("Custom App")}>
          Custom App
        </div>
        <div className="domain" onClick={() => handleChoice("Webflow")}>
          Webflow
        </div>
        <div className="domain" onClick={() => handleChoice("Photos / Vidéos")}>
          Photos / Vidéos
        </div>
      </div>
    </header>
  );
}
