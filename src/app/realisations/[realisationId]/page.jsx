"use client";

import "./realisationPage.css";

import { use, useEffect, useState } from "react";
import portfolioProjects from "@/app/data/realisations";
import Project from "@/app/components/Realisations/Project/Project";
import Navbar from "@/app/components/Navbar";

export default function Page() {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const storedId = localStorage.getItem("selectedId");
    const selectedProject = portfolioProjects.find(
      (proj) => proj.id === Number(storedId)
    );
    if (selectedProject) {
      setProject(selectedProject);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="project-container">
        <Project project={project} />
      </main>
    </>
  );
}
