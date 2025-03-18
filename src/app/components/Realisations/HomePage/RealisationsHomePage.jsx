"use client";

import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./RealisationsHomePage.css";
import TitleContainer from "../../TitleContainer/TitleContainer.jsx";
import LastWorkCard from "./LastWorkCard/LastWorkCard.jsx";
import portfolioProjects from "@/app/data/realisations.js";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

export default function RealisationsHomePage() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true, // Active la boucle
    align: "start", // Aligne les cartes au début
  });

  const colors = ["#3B9078", "#853B90", "#3B4990"];

  // Gestion des flèches
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  useEffect(() => {
    if (embla) {
      embla.reInit(); // Réinitialise Embla si nécessaire
    }
  }, [embla]);

  return (
    <section className="realisations-homepage-container">
      <Image
        className="realisations-quadrillage"
        src="/pegboard-2.jpg"
        alt="Photo de Tom Lemelle"
        width={1000} // Valeur arbitraire qui sera réduite avec CSS
        height={1000}
        objectFit="cover"
        style={{
          borderRadius: "30px",
          maskImage:
            "radial-gradient(circle, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)",
          WebkitMaskImage:
            "radial-gradient(circle, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
      <div className="realisations-homepage-wrapper">
        <TitleContainer
          badge="Réalisations"
          isCentered={false}
          icon={<MdArrowForwardIos size={45} />}
          iconLink="/realisations"
        >
          Mes derniers projets
        </TitleContainer>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {portfolioProjects.map((project, idx) => (
              <div className="embla__slide" key={project.id}>
                <LastWorkCard {...project} />
              </div>
            ))}
          </div>
          <IoIosArrowBack
            size="40"
            className="arrow-back"
            onClick={scrollPrev}
          />
          <IoIosArrowForward
            size="40"
            className="arrow-next"
            onClick={scrollNext}
          />
        </div>
      </div>
    </section>
  );
}
