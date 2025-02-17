"use client";

import { useEffect, useState } from "react";

import "./Project.css";
import ProjectHeader from "./Header/ProjectHeader";
import HeaderCarousel from "./HeaderCarousel/HeaderCarousel";
import Link from "next/link";
import portfolioProjects from "@/app/data/realisations.js";
import formatString from "@/app/utils/formatSlug";
import { useRouter } from "next/navigation";

export default function Project({ project }) {
  const router = useRouter();

  const [projectLinked, setProjectLinked] = useState(null);

  useEffect(() => {
    if (project && project.linked !== null && project.linked !== undefined) {
      const linked = portfolioProjects.find(
        (portfolioProject) => portfolioProject.id === project.linked
      );
      setProjectLinked(linked);
    }
  }, [project]);

  const handleNavigate = () => {
    const storedId = localStorage.getItem("selectedId");

    if (storedId === projectLinked.id) {
      router.push(`/realisations/${formatString(projectLinked.title)}`);
    } else {
      localStorage.setItem("selectedId", projectLinked.id);
      router.push(`/realisations/${formatString(projectLinked.title)}`);
    }
  };

  return (
    <div className="project-wrapper">
      {project && Object.entries(project).length !== 0 ? (
        <>
          <ProjectHeader project={project} />
          <HeaderCarousel photos={project.photos} />
          <ul className="project-texts">
            {project.texts.map((text, idx) => (
              <p className="project-text" key={idx}>
                {text.text}
              </p>
            ))}
            {projectLinked && projectLinked.linked !== null && (
              <div
                className="project-link-to-another"
                style={{ color: project.color }}
                onClick={handleNavigate}
              >
                {projectLinked.type === "Webflow" ||
                projectLinked.type === "Custom App"
                  ? "Découvrir la présentation du site web"
                  : "Explorer les visuels du cabinet"}
              </div>
            )}
          </ul>
        </>
      ) : (
        <div>Cette réalisation n'est pas disponible ou n'existe pas.</div>
      )}
    </div>
  );
}
