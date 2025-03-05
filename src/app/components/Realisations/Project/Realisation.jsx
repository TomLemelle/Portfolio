import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import portfolioProjects from "@/app/data/realisations.js";
import formatString from "@/app/utils/formatSlug";
import { useRouter } from "next/navigation";

export default function Project({ project }) {
  const router = useRouter();
  const [projectLinked, setProjectLinked] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (project && project.photos) {
      console.log(project, project.photos[0]);
    }

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
      router.push(`/realisations/${formatString(projectLinked.title)}`);
    }
  };

  const whichColorisIt = () => {
    if (project.type === "Webflow") {
      return "var(--purple)";
    } else if (project.type === "Custom App") {
      return "var(--green)";
    } else {
      return "var(--blue)";
    }
  };

  return (
    <div className="relative flex h-screen w-full border-[8px]">
      {project && Object.entries(project).length !== 0 ? (
        <>
          {/* Add Back Button */}

          <div
            className="w-1/2 flex flex-col justify-center px-12 relative border-r-[8px] border-green"
            style={{ borderColor: whichColorisIt() }}
          >
            <div className="max-w-lg flex flex-col justify-center gap-y-12">
              <AnimatePresence mode="wait">
                <motion.span
                  key={project.id}
                  className="text-lg font-regular text-xl font-medium leading-none"
                  style={{ color: whichColorisIt() }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6 }}
                >
                  {project.type + " - " + project.date}
                </motion.span>
                <motion.h2
                  key={project.title}
                  className="text-5xl font-bold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {project.title}
                </motion.h2>

                {project.texts.map((textObj, idx) => (
                  <motion.p
                    key={idx}
                    className="text-lg font-regular text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + idx * 0.4 }} // Décalage après le h1
                  >
                    {textObj.text}
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
                    style={{
                      color: whichColorisIt(),
                    }}
                    onClick={handleNavigate}
                  >
                    {projectLinked.type === "Webflow" ||
                    projectLinked.type === "Custom App"
                      ? "Découvrir la présentation du site web"
                      : "Explorer les visuels du cabinet"}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
          <div className="w-1/2 relative flex items-center justify-center overflow-hidden">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 z-10 shadow-lg hover:bg-gray-700 transition"
            >
              ◀
            </button>
            {project.photos && project.photos.length > 0 ? (
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={"/" + project.photos[index]?.photo}
                  alt="Slide"
                  className="absolute w-full h-full object-contain"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>
            ) : (
              <p>Aucune image disponible</p>
            )}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-4 z-10 shadow-lg hover:bg-gray-700 transition"
            >
              ▶
            </button>
          </div>
        </>
      ) : (
        <div>Cette réalisation n'est pas disponible ou n'existe pas.</div>
      )}
    </div>
  );
}
