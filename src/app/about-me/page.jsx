"use client";

import "./AboutMe.css";
import AboutMeHeroBanner from "../components/AboutMe/HeroBanner/AboutMeHeroBanner";
import Slide from "../components/AboutMe/Slide/Slide";
import ContactButton from "../components/Contact/ContactButton/ContactButton";
import useContact from "../hooks/useContact";
import { profils } from "../data/profils";
import { useTranslation } from "../contexts/TranslationProvider";

export default function AboutMe() {
  const {
    contactIsOpen,
    setContactIsOpen,
    buttonsRefs,
    toggleModal,
    modalRef,
  } = useContact();

  const { locale } = useTranslation(); // Récupère la langue active

  return (
    <>
      <main className="about-me-container">
        <AboutMeHeroBanner />
        {profils.map((profil, idx) => (
          <Slide
            key={idx}
            title={profil.domaine[locale]} // Utilise la traduction du domaine
            description={profil.description[locale]} // Utilise la traduction de la description
            tags={profil.tags[locale]} // Utilise la traduction des tags
            image={"/accordion-1.png"}
            entreprises={profil.entreprises}
            color={profil.color}
            isLast={idx === profils.length - 1}
          />
        ))}
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
