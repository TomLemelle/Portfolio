"use client";

import "./slide.css";
import "./responsive.css";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/app/contexts/TranslationProvider";

export default function Slide({
  title,
  description,
  tags,
  color,
  isLast = false,
}) {
  const { locale, dictionary } = useTranslation();

  const chooseRightId = () => {
    if (
      title === "Développement Web" ||
      title === "Web Development" ||
      title === "Sviluppo Web"
    ) {
      return "dev";
    } else if (
      title === "Photographie" ||
      title === "Photography" ||
      title === "Fotografia"
    ) {
      return "photo";
    } else {
      return "video";
    }
  };

  return (
    <div
      className="w-full flex flex-col items-center py-20"
      id={chooseRightId()}
    >
      <div className="max-w-2xl text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`tags-${title}`}
            className="flex flex-wrap justify-center gap-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            {tags &&
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-4 py-2 text-white font-semibold text-sm rounded"
                  style={{ backgroundColor: color }}
                >
                  {tag}
                </span>
              ))}
          </motion.div>

          <motion.h1
            key={`title-${title}`}
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {title}
          </motion.h1>

          <motion.p
            key={`desc-${title}`}
            className="text-base md:text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {description}
          </motion.p>
        </AnimatePresence>
      </div>

      {!isLast && (
        <div className="w-full flex justify-center mt-16">
          <div className="h-px bg-gray-300 w-1/2" />
        </div>
      )}
    </div>
  );
}
