"use client";

import "./AboutMe.css";
import AboutMeHeroBanner from "../components/AboutMe/HeroBanner/AboutMeHeroBanner";
import Slide from "../components/AboutMe/Slide/Slide";
import ContactButton from "../components/Contact/ContactButton/ContactButton";
import useContact from "../hooks/useContact";

export default function AboutMe() {
  const {
    contactIsOpen,
    setContactIsOpen,
    buttonsRefs,
    toggleModal,
    modalRef,
  } = useContact();

  const profils = [
    {
      domaine: "Développement Web",
      description:
        "Passionné par la tech depuis mon plus jeune âge, je suis développeur web depuis 5 ans. Expert en React, Next.js, Vue.js et AdonisJS, j’ai acquis une solide expertise technique. Mon parcours entrepreneurial avec SafeEat et Citizens m’a permis de perfectionner mes compétences dans la création de solutions innovantes.",
      tags: ["React", "Next.js", "Vue.js", "AdonisJS"],
      color: "#3b9078",
    },
    {
      domaine: "Photographie",
      description:
        "Photographe autodidacte depuis près de 3 ans, ma passion pour la photographie a débuté de manière personnelle. Après avoir acquis mon premier appareil photo, j'ai découvert un univers fascinant et j'ai progressivement amélioré ma vision artistique de la capture d'images. Mon approche est axée sur l'authenticité et la créativité, cherchant toujours à saisir des moments uniques. Cette passion m'a permis d'explorer divers styles comme le portrait et la photographie d'entreprise.",
      tags: ["Portrait", "Entreprise"],
      color: "#3b4990",
    },
    {
      domaine: "Production Audiovisuelle",
      description:
        "La vidéo est une passion qui est née naturellement de mon amour pour la photographie. Une fois que j'ai perfectionné ma pratique de la photo, la vidéo est apparue comme une extension logique de cette passion créative. C’est ainsi qu'est née PICTION, ma boîte de production audiovisuelle, où je mets en œuvre mes compétences techniques et artistiques pour produire des vidéos qui allient innovation et impact. PICTION travaillait aussi bien sur des projets commerciaux que créatifs, avec une attention particulière portée à la qualité de chaque projet.",
      tags: ["Présentation", "Projets commerciaux", "Projets artistiques"],
      color: "#3b4990",
    },
  ];

  return (
    <>
      <main className="about-me-container">
        <AboutMeHeroBanner />
        {profils.map((profil, idx) => (
          <Slide
            key={idx}
            title={profil.domaine}
            description={profil.description}
            tags={profil.tags}
            image={"/accordion-1.png"}
            entreprises={profil.entreprises}
            color={profil.color}
            reverseOrder={idx % 2 !== 0}
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
