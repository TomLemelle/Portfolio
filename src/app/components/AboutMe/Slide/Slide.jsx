"use client";

import "./slide.css";
import "./responsive.css";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/app/contexts/TranslationProvider";

export default function Slide({
  title,
  description,
  image,
  tags,
  entreprises,
  color,
  reverseOrder = false,
}) {
  const { locale, dictionary } = useTranslation(); // Récupérer la langue active et les traductions

  const chooseRightId = () => {
    if (title === "Développement Web" || "Web Development" || "Sviluppo Web") {
      return "dev";
    } else if (title === "Photographie" || "Photography" || "Fotografia") {
      return "photo";
    } else {
      return "video";
    }
  };

  return (
    <div className="flex flex-col w-full" id={chooseRightId()}>
      <div
        className={`flex w-full flex-wrap lg:flex-nowrap ${
          reverseOrder ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 py-16 md:py-28 bg-bgrey relative">
          <div className="max-w-lg flex flex-col gap-y-6 md:gap-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-6"
                key={description}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {tags &&
                  tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 md:px-4 md:py-2 text-white font-semibold text-sm md:text-base"
                      style={{ backgroundColor: color }}
                    >
                      {tag}
                    </span>
                  ))}
              </motion.div>
              <motion.h1
                key={title}
                className="text-3xl md:text-5xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                {title}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={description}
                className="text-base md:text-lg text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={image}
              src={image}
              alt="Slide"
              className="w-full h-auto md:h-full object-contain"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
