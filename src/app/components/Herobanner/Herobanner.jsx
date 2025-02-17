"use client";

import "./Herobanner.css";
import { PiLinkBreakLight } from "react-icons/pi";
import { MdArrowBackIos } from "react-icons/md";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Herobanner() {
  const hello = ["Développeur", "Photographe", "Vidéaste"];
  const [currentHello, setCurrentHello] = useState("Développeur");

  const sayHello = () => {
    let idx = 0;
    setInterval(() => {
      idx = (idx + 1) % hello.length;
      setCurrentHello(hello[idx]);
    }, 1500);
  };

  useEffect(() => {
    sayHello();
  }, []);

  return (
    <header className="header">
      <ul className="left-container">
        <li>
          <div className="first-line-container">
            <div className="tom-lemelle-container">Hey!</div>
            <div className="my-name-container">Je suis</div>
          </div>
          <h1 className="animated-container">{currentHello}</h1>
        </li>
        <li>
          <p className="header-description">
            Je conçois des sites internet et les sublime avec de belles photos,
            en tant que développeur web et photographe depuis plus de 3 ans
          </p>
        </li>
        <li className="header-btns-container">
          <div className="contact-me">Contactez moi</div>
          <Link href="/realisations">
            <div className="my-works">
              Réalisations
              <PiLinkBreakLight className="my-work-icon" size={20} />
            </div>
          </Link>
        </li>
      </ul>
      <div className="right-container">
        <Image
          src="/tom-fullbody-pins.png"
          width={720}
          height={786}
          alt="Picture of the author"
        />
      </div>

      <div className="discover-container">
        <div className="discover-text">Découvrir</div>
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
