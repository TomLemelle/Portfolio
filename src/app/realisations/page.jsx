"use client";

import "./realisations.css";
import RealisationsHeader from "../components/Realisations/Realisations/Header/RealisationsHeader";
import RealisationsList from "../components/Realisations/Realisations/RealisationsList/RealisationsList";
import { useState } from "react";
import ContactButton from "../components/Contact/ContactButton/ContactButton";
import useContact from "../hooks/useContact";

export default function Realisations() {
  const [choice, setChoice] = useState("");

  const {
    contactIsOpen,
    setContactIsOpen,
    buttonsRefs,
    toggleModal,
    modalRef,
  } = useContact();

  return (
    <>
      <main className="realisations-container">
        <RealisationsHeader choice={choice} setChoice={setChoice} />
        <RealisationsList choice={choice} setChoice={setChoice} />
      </main>
      <ContactButton
        modalRef={modalRef}
        closeModal={() => setContactIsOpen(false)}
        toggleModal={toggleModal}
        contactIsOpen={contactIsOpen}
      />
    </>
  );
}
