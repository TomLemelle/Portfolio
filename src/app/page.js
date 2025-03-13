"use client";

import Navbar from "./components/Navbar";
import Herobanner from "./components/Herobanner/Herobanner";
import Services from "./components/Services/Services";
import RealisationsHomePage from "./components/Realisations/HomePage/RealisationsHomePage";
import { FaPhoneFlip } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Contact from "./components/Contact/Contact";
import { RxCross2 } from "react-icons/rx";
import { IoIosChatbubbles } from "react-icons/io";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import Footer from "./footer/Footer";

export default function Home() {
  const [contactIsOpen, setContactIsOpen] = useState(false);

  useEffect(() => {
    const button = document.querySelector(".wiggle-button");

    const wiggleEffect = () => {
      // Applique l'animation
      button.classList.add("wiggling");

      // Après 500ms (fin de l'animation), on enlève l'animation et on redémarre le cycle
      setTimeout(() => {
        button.classList.remove("wiggling");
      }, 500);
    };

    // Lance l'animation au chargement et toutes les 4 secondes
    const intervalId = setInterval(wiggleEffect, 2500); // 4500ms = 4.5s (4s de pause + 0.5s d'animation)

    // Nettoyer l'intervalle si le composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="main">
      <Navbar />
      <Herobanner />
      <Services />
      <TrustedBy />
      <RealisationsHomePage />
      <Footer />

      <div
        className="contact-me-bubble wiggling wiggle-button"
        onClick={() => setContactIsOpen(!contactIsOpen)}
      >
        <div>
          {contactIsOpen ? (
            <RxCross2 size={30} />
          ) : (
            <IoIosChatbubbles size={30} className="chat-bubble" />
          )}
        </div>
      </div>
      {contactIsOpen && (
        <Contact closeContact={() => setContactIsOpen(false)} />
      )}
    </main>
  );
}
