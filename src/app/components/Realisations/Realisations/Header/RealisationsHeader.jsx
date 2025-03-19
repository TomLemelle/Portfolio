"use client";

import Image from "next/image";
import "./RealisationsHeader.css";
import "./responsive.css";
import { useTranslation } from "@/app/contexts/TranslationProvider";

export default function RealisationsHeader({ choice, setChoice }) {
  const { dictionary, locale } = useTranslation();

  const handleChoice = (value) => {
    setChoice(value);
  };

  return (
    <header className="realisations-title-container">
      <h1 className="realisations-title">{dictionary.realisations.heading}</h1>
      <p className="realisations-description">
        {dictionary.realisations.description}
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
        <div
          className="domain"
          onClick={() => handleChoice(dictionary.realisations.buttons.custom)}
        >
          {dictionary.realisations.buttons.custom}
        </div>
        <div
          className="domain"
          onClick={() => handleChoice(dictionary.realisations.buttons.webflow)}
        >
          {dictionary.realisations.buttons.webflow}
        </div>
        <div
          className="domain"
          onClick={() => handleChoice(dictionary.realisations.buttons.photo)}
        >
          {dictionary.realisations.buttons.photo}
        </div>
      </div>
    </header>
  );
}
