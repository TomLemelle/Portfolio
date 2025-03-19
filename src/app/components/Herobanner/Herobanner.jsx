"use client";

import "./Herobanner.css";
import "./responsive.css";
import { PiLinkBreakLight } from "react-icons/pi";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "@/app/contexts/TranslationProvider";

export default function Herobanner({ ref, toggleContact = null }) {
  const { dictionary, locale } = useTranslation();

  const hello = {
    fr: ["Développeur", "Photographe", "Vidéaste"],
    en: ["Developer", "Photographer", "Videographer"],
    it: ["Sviluppatore", "Fotografo", "Videomaker"],
  };

  const [currentHello, setCurrentHello] = useState(hello[locale][0]);

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % hello[locale].length;
      setCurrentHello(hello[locale][idx]);
    }, 1500);

    return () => clearInterval(interval);
  }, [locale]);

  return (
    <header className="header">
      <ul className="left-container">
        <li>
          <div className="first-line-container">
            <h1 className="tom-lemelle-container">Tom Lemelle</h1>
            <div className="my-name-container"></div>
          </div>
          <h2 className="animated-container">{currentHello}</h2>
        </li>
        <li>
          <p className="header-description">
            {dictionary.home.herobanner.description}
          </p>
        </li>
        <li className="header-btns-container">
          <div className="contact-me" ref={ref} onClick={toggleContact}>
            {dictionary.home.herobanner.contactMe}
          </div>
          <Link href="/realisations">
            <div className="my-works">
              {dictionary.home.herobanner.projects}
              <PiLinkBreakLight className="my-work-icon" size={20} />
            </div>
          </Link>
        </li>
        <li className="discover-mobile">
          <div className="discover-container">
            <div className="discover-text">
              {dictionary.home.herobanner.discover}
            </div>
            <Link href="#services">
              <div className="discover-btn">
                <div className="arrow-square">
                  <Image
                    src="/arrow-down.png"
                    width={20}
                    height={40}
                    alt="See more icon"
                  />
                </div>
              </div>
            </Link>
          </div>
        </li>
      </ul>
      <div className="right-container">
        <Image
          src="/tom-fullbody-pins.png"
          width={720}
          height={786}
          alt="Image du développeur & photographe Tom Lemelle"
        />
      </div>

      <div className="discover-container discover-desktop">
        <div className="discover-text">{dictionary.discover}</div>
        <Link href="#services">
          <div className="discover-btn">
            <div className="arrow-square">
              <Image
                src="/arrow-down.png"
                width={20}
                height={40}
                alt="See more icon"
              />
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}
