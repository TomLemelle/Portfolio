import "./HeroBanner.css";
import "./responsive.css";
import { useState, useRef } from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/app/contexts/TranslationProvider";

export default function AboutMeHeroBanner() {
  const { dictionary, locale } = useTranslation();

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [rect, setRect] = useState({ top: 0, height: 0, width: 0, left: 0 });
  const jobsRef = useRef([]);
  const router = useRouter();

  // Fonction pour mesurer précisément les dimensions de l'élément
  const updateRectForElement = (element) => {
    if (!element) return;

    // Obtenez les dimensions réelles de l'élément
    const rect = element.getBoundingClientRect();

    setRect({
      top: element.offsetTop - 15,
      left: element.offsetLeft - 25,
      width: rect.width + 50, // Utilisez getBoundingClientRect pour la largeur exacte
      height: element.offsetHeight + 30,
    });
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    updateRectForElement(jobsRef.current[index]);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const jobs = [
    {
      label: dictionary.about.herobanner.jobs[0].label,
      value: dictionary.about.herobanner.jobs[0].value,
    },
    {
      label: dictionary.about.herobanner.jobs[1].label,
      value: dictionary.about.herobanner.jobs[1].value,
    },
    {
      label: dictionary.about.herobanner.jobs[2].label,
      value: dictionary.about.herobanner.jobs[2].value,
    },
  ];

  return (
    <header className="header-about-me-container">
      <Image
        className="header-about-me-quadrillage"
        src="/quadrillage.png"
        alt="Photo de Tom Lemelle"
        layout="fill"
        objectFit="cover"
      />
      <div className="header-about-me-wrapper">
        <Image
          className="header-tom-about-me"
          src="/tom-about-me.png"
          width={940}
          height={940}
          alt="Photo de Tom Lemelle"
        />
        <div className="header-about-me-jobs-wrapper">
          <ul
            className="header-about-me-jobs-container"
            onMouseLeave={handleMouseLeave}
          >
            {jobs.map((job, index) => (
              <li
                key={index}
                ref={(el) => (jobsRef.current[index] = el)}
                className={`header-about-me-job ${
                  hoveredIndex === index
                    ? "hovered"
                    : hoveredIndex !== null
                    ? "not-hovered"
                    : ""
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <Link href={"#" + job.value}>{job.label}</Link>
              </li>
            ))}
            {hoveredIndex !== null && (
              <div
                className="hover-rectangle"
                style={{
                  top: `${rect.top}px`,
                  left: `${rect.left}px`,
                  width: `${rect.width}px`,
                  height: `${rect.height}px`,
                  opacity: 1,
                }}
              />
            )}
          </ul>
        </div>
        <div className="header-about-me-realisations-container">
          <p className="header-about-me-realisations-text">
            {dictionary.about.herobanner.discover.description}
          </p>
          <div
            className="header-about-me-realisations-btn"
            onClick={() => router.push("/realisations")}
          >
            {dictionary.about.herobanner.discover.button}
          </div>
        </div>
        <Link href="#dev" className="header-about-me-h1-link">
          <div className="header-about-me-h1-container">
            <MdOutlineKeyboardArrowDown
              size={120}
              className="header-about-me-h1-arrow"
            />
            <h1 className="header-about-me-h1">Tom Lemelle</h1>
            <MdOutlineKeyboardArrowDown
              size={120}
              className="header-about-me-h1-arrow"
            />
          </div>
        </Link>
      </div>
    </header>
  );
}
