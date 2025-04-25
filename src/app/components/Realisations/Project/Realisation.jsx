"use client";

import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import portfolioProjects from "@/app/data/realisations.js";
import formatString from "@/app/utils/formatSlug";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/contexts/TranslationProvider";

function ProgressBar({ photosCount, activeIndex, color }) {
  const controls = useAnimation();

  useEffect(() => {
    controls.set({ width: 0 });
    controls.start({
      width: "100%",
      transition: { duration: 4, ease: "linear" },
    });
  }, [activeIndex, controls]);

  return (
    <div className="absolute bottom-2 left-0 flex w-full h-2 gap-1 px-4">
      {[...Array(photosCount)].map((_, i) => (
        <div
          key={i}
          className="bg-gray-300 flex-1 relative overflow-hidden"
          style={{ minWidth: `${100 / photosCount}%` }}
        >
          {i === activeIndex && (
            <motion.div
              className="absolute top-0 left-0 bottom-0"
              style={{ backgroundColor: color }}
              initial={{ width: 0 }}
              animate={controls}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function Project({ project }) {
  const router = useRouter();
  const [projectLinked, setProjectLinked] = useState(null);
  const [index, setIndex] = useState(0);

  const { dictionary, locale } = useTranslation();

  useEffect(() => {
    if (!project.photos || project.photos.length === 0) return;

    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % project.photos.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [index, project.photos]);

  useEffect(() => {
    if (project?.linked) {
      const linked = portfolioProjects.find((p) => p.id === project.linked);
      setProjectLinked(linked);
    }
  }, [project]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % project.photos.length);
  };

  const prevSlide = () => {
    setIndex(
      (prev) => (prev - 1 + project.photos.length) % project.photos.length
    );
  };

  const handleNavigate = () => {
    if (projectLinked) {
      localStorage.setItem("selectedId", projectLinked.id);
      router.push(`/realisations/${formatString(projectLinked.title[locale])}`);
    }
  };

  const discoverProjectLinkedTranslations = {
    fr: {
      discoverSite: "Découvrir la présentation du site web",
      exploreVisuals: "Explorer les visuels du cabinet",
    },
    en: {
      discoverSite: "Discover the website presentation",
      exploreVisuals: "Explore the practice visuals",
    },
    it: {
      discoverSite: "Scopri la presentazione del sito web",
      exploreVisuals: "Esplora i visual del cabinet",
    },
  };

  const getProjectLinkedTranslated = () => {
    if (
      projectLinked.type[locale] === dictionary.projects.type.webflow ||
      projectLinked.type[locale] === dictionary.projects.type.custom
    ) {
      return discoverProjectLinkedTranslations[locale].discoverSite;
    } else {
      return discoverProjectLinkedTranslations[locale].exploreVisuals;
    }
  };

  const translatedType = project.type[locale];
  const translatedDate = project.date[locale];
  const translatedTitle = project.title[locale];

  return (
    <div
      className="relative flex flex-col-reverse lg:flex-row w-full h-auto lg:h-screen lg:border-[8px]"
      style={{ borderColor: project.color }}
    >
      {/* Texte */}
      <div
        className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-12 relative border-r-0 lg:border-r-[8px]"
        style={{ borderColor: project.color }}
      >
        {/* Barre verticale desktop uniquement */}
        <div
          className="hidden lg:block absolute top-0 bottom-0 right-0 w-[4px]"
          style={{ backgroundColor: project.color }}
        />

        <div className="max-w-lg flex flex-col justify-center gap-y-12 mx-auto lg:mx-0 text-center lg:text-left mt-12 lg:mt-0">
          <AnimatePresence mode="wait">
            <motion.span
              key={project.id}
              className="text-lg font-medium leading-none"
              style={{ color: project.color }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6 }}
            >
              {translatedType + " - " + translatedDate}
            </motion.span>
            <motion.h2
              key={project.title}
              className="text-5xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {translatedTitle}
            </motion.h2>

            {project.texts.map((textObj, idx) => (
              <motion.p
                key={idx}
                className="text-lg text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.4 }}
              >
                {textObj.text[locale]}
              </motion.p>
            ))}
          </AnimatePresence>

          {projectLinked && (
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="cursor-pointer hover:underline"
                style={{ color: project.color }}
                onClick={handleNavigate}
              >
                {getProjectLinkedTranslated()}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full relative flex flex-col items-center justify-center overflow-hidden h-[60vh] lg:w-1/2 lg:h-auto">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 z-20 shadow-lg hover:bg-gray-700 transition rounded"
        >
          ◀
        </button>

        {project.photos && project.photos.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={"/" + project.photos[index]?.photo}
              alt="Slide"
              className="w-full h-auto max-h-[60vh] object-contain lg:max-h-full lg:w-auto"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
        ) : (
          <p>{dictionary.projects.noImage}</p>
        )}

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 z-20 shadow-lg hover:bg-gray-700 transition rounded"
        >
          ▶
        </button>

        {project.photos && project.photos.length > 1 && (
          <div className="w-full mt-2 lg:absolute lg:bottom-2 lg:left-0">
            <ProgressBar
              photosCount={project.photos.length}
              activeIndex={index}
              color={project.color}
            />
          </div>
        )}
      </div>
    </div>
  );
}
