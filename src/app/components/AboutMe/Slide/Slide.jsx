"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Slide({
  title,
  description,
  image,
  tags,
  entreprises,
  color,
}) {
  return (
    <div className="flex h-screen w-full">
      {/* Partie gauche (Texte) */}
      <div className="w-1/2 flex flex-col justify-center px-12 bg-gray-100 relative">
        <div className="max-w-lg flex flex-col gap-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              className="flex flex-wrap gap-3 mt-6"
              key={description}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {tags &&
                tags.map((tags, index) => (
                  <span
                    key={index}
                    className="inline-block px-4 py-2 text-white font-semibold"
                    style={{
                      backgroundColor: color,
                    }}
                  >
                    {tags}
                  </span>
                ))}
            </motion.div>
            <motion.h1
              key={title}
              className="text-5xl font-bold"
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
              className="text-lg text-gray-600"
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

      {/* Partie droite (Image) */}
      <div className="w-1/2 relative flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={image}
            src={image}
            alt="Slide"
            className="absolute w-full h-full object-contain"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>

      {/* Section "Ils m'ont fait confiance" */}
      {entreprises && entreprises.length > 0 && (
        <div className="w-full mt-12 bg-gray-200 py-8">
          <h2 className="text-3xl font-bold text-center mb-6">
            Ils m'ont fait confiance
          </h2>
          <div className="flex justify-center gap-12 flex-wrap">
            {entreprises.map((entreprise, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={entreprise.logo}
                  alt={entreprise.name}
                  className="w-32 h-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
