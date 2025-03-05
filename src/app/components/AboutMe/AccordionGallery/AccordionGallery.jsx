"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const slides = [
  {
    title: "Projet 1 : Une innovation incroyable",
    description: "Ce projet repousse les limites de la technologie moderne.",
    image: "/accordion-1.png",
  },
  {
    title: "Projet 2 : Une architecture moderne",
    description: "Un design unique qui allie esthétique et fonctionnalité.",
    image: "/accordion-1.png",
  },
  {
    title: "Projet 3 : Un design épuré",
    description:
      "Simplicité et élégance au service de l'expérience utilisateur.",
    image: "/accordion-1.png",
  },
  {
    title: "Projet 4 : Une vision futuriste",
    description: "Une approche novatrice pour façonner l'avenir.",
    image: "/accordion-1.png",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex h-screen w-full">
      {/* Partie gauche (Texte) */}
      <div className="w-1/2 flex flex-col justify-center px-12 bg-gray-100 relative">
        {/* Flèche gauche */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 z-10"
        >
          ◀
        </button>

        {/* Contenu textuel animé */}
        <div className="max-w-lg">
          <AnimatePresence mode="wait">
            <motion.h1
              key={slides[index].title}
              className="text-5xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              {slides[index].title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={slides[index].description}
              className="text-lg text-gray-600 mt-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {slides[index].description}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Partie droite (Image) */}
      <div className="w-1/2 relative flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[index].image}
            src={slides[index].image}
            alt="Slide"
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        {/* Flèche droite */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 z-10"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
