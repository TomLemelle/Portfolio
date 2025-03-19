"use client";

import Navbar from "./components/Navbar";
import Herobanner from "./components/Herobanner/Herobanner";
import Services from "./components/Services/Services";
import RealisationsHomePage from "./components/Realisations/HomePage/RealisationsHomePage";
import { useRef, useState } from "react";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import Footer from "./components/Footer/Footer";
import useClickOutside from "./hooks/useClickOutside";
import ContactButton from "./components/Contact/ContactButton/ContactButton";
import useContact from "./hooks/useContact";

export default function Home() {
  const {
    contactIsOpen,
    setContactIsOpen,
    buttonsRefs,
    toggleModal,
    modalRef,
  } = useContact();

  return (
    <main className="main">
      <Herobanner ref={buttonsRefs[1]} toggleContact={toggleModal} />
      <Services />
      <TrustedBy />
      <RealisationsHomePage />
      <ContactButton
        modalRef={modalRef}
        closeModal={() => setContactIsOpen(false)}
        toggleModal={toggleModal}
        contactIsOpen={contactIsOpen}
      />
    </main>
  );
}
