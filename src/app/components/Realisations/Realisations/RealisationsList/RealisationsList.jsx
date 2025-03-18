"use client";

import "./RealisationsList.css";
import "./responsive.css";
import LastWorkCard from "../../HomePage/LastWorkCard/LastWorkCard";
import portfolioProjects from "@/app/data/realisations";
import { useEffect, useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import Pagination from "@/app/components/Pagination/Pagination";

const headingColors = {
  "Custom App": "#3b9078",
  Webflow: "#853b90",
  "Photos / Vidéos": "#3b4990",
};

export default function RealisationsList({ choice, setChoice }) {
  const [realisations, setRealisations] = useState([]);
  const [currentRealisations, setCurrentRealisations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // État pour suivre la page actuelle
  const itemsPerPage = 6;

  useEffect(() => {
    // Charger les projets filtrés ou tous les projets selon le choix
    if (choice === "") {
      setRealisations(portfolioProjects);
    } else {
      const realisationsFiltered = portfolioProjects.filter(
        (project) => project.type === choice
      );
      setRealisations(realisationsFiltered);
    }
  }, [choice]);

  useEffect(() => {
    // À chaque fois que `realisations` ou `currentPage` change, on met à jour la liste paginée
    const offset = (currentPage - 1) * itemsPerPage;
    setCurrentRealisations(realisations.slice(offset, offset + itemsPerPage));
  }, [realisations, currentPage]); // Dépendances mises à jour lorsque `realisations` ou `currentPage` changent

  const handlePagination = (newPage) => {
    setCurrentPage(newPage); // Met à jour la page actuelle
  };

  const iconColor = headingColors[choice] || "#000000";

  return (
    <div className="realisations-list-container">
      <div className="realisations-list-title-container">
        <h2 className="realisations-list-title">{choice}</h2>

        {choice !== "" && (
          <div className="realisations-list-title-close-container">
            <span></span>
            <IoCloseSharp
              color={iconColor}
              size={45}
              className="realisations-list-title-close"
              onClick={() => setChoice("")}
            />
          </div>
        )}
      </div>
      <div
        className={`realisations-list-content-container ${
          realisations.length >= 3 ? "justify-center" : "justify-flex-start"
        }`}
      >
        {currentRealisations.length !== 0 &&
          currentRealisations.map((project, idx) => (
            <LastWorkCard
              key={idx}
              id={project.id}
              title={project.title}
              subheading={project.subheading}
              color={project.color}
              thumbnail={project.thumbnail}
            />
          ))}
      </div>
      <Pagination
        totalItems={realisations.length} // Passer le nombre total d'éléments ici
        itemsPerPage={itemsPerPage}
        currentPage={currentPage} // Passer la page actuelle
        onPageChange={handlePagination} // Passer la fonction pour gérer la pagination
      />
    </div>
  );
}
