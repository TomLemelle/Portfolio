"use client";

import "./ProjectHeader.css";

import { useState, useEffect } from "react";

export default function ProjectHeader({ project }) {
  const [type, setType] = useState("");

  useEffect(() => {
    if (project) {
      checkType();
    }
  }, [project]);

  const checkType = () => {
    switch (project.type) {
      case "Custom App":
        setType(`Réalisation d'une application Web pour ${project.company}`);
        break;
      case "Webflow":
        setType(`Réalisation d'un site Webflow pour ${project.company}`);
        break;
      case "Photographie":
        setType(`Réalisation de photos professionnel pour ${project.company}`);
        break;
      case "Videographie":
        setType(
          `Réalisation d'une vidéo(s) professionnel(s) pour ${project.company}`
        );
        break;
    }
  };

  return (
    <div className="project-title-container">
      <span className="project-subtitle" style={{ color: project.color }}>
        {project.type + " - " + project.date}
      </span>
      <h1 className="project-title">{type}</h1>
      <div className="project-technologies-container">
        {project.technologies.map((technology, idx) => (
          <div
            className="project-technology"
            key={idx}
            style={{ backgroundColor: project.color }}
          >
            <a href={technology.url} target="_blank">
              {technology.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
