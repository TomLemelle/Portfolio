"use client";

import "./realisationPage.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import portfolioProjects from "@/app/data/realisations";
import Realisation from "@/app/components/Realisations/Project/Realisation";
import ContactButton from "@/app/components/Contact/ContactButton/ContactButton";
import useContact from "@/app/hooks/useContact";

export default function Page() {
  const [project, setProject] = useState(null);
  const [type, setType] = useState("");

  const {
    contactIsOpen,
    setContactIsOpen,
    buttonsRefs,
    toggleModal,
    modalRef,
  } = useContact();

  useEffect(() => {
    if (project) {
      checkType();
    }
  }, [project]);

  useEffect(() => {
    const storedId = localStorage.getItem("selectedId");
    const selectedProject = portfolioProjects.find(
      (proj) => proj.id === Number(storedId)
    );
    if (selectedProject) {
      setProject(selectedProject);
    }
  }, []);

  const checkType = () => {
    switch (project.type) {
      case "Custom App":
        setType(`Réalisation d'une application Web pour ${project.company}`);
        break;
      case "Webflow":
        setType(`Réalisation d'un site Webflow pour ${project.company}`);
        break;
      case "Photos / Vidéos":
        setType(
          `Réalisation de visuels professionnels pour ${project.company}`
        );
        break;
    }
  };

  return (
    <>
      <main className="project-container">
        {project && (
          <div className="flex flex-col justify-center items-center gap-y-12 w-full">
            <AnimatePresence mode="wait">
              <motion.h1
                key={project.title}
                className="text-5xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                {type}
              </motion.h1>
              <div className="flex justify-center items-center space-x-4">
                {project.technologies.map((technology, idx) => (
                  <div
                    className="flex justify-center items-center gap-1.5 text-lg font-medium text-white py-6 px-8 cursor-pointer transition-shadow duration-200 ease-in-out shadow-none hover:shadow-[5px_5px_0_rgba(0,0,0,1)]"
                    key={idx}
                    style={{ backgroundColor: project.color }}
                  >
                    <a href={technology.url} target="_blank">
                      {technology.name}
                    </a>
                  </div>
                ))}
              </div>
            </AnimatePresence>
            <Realisation project={project} />
          </div>
        )}
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
