"use client";

import "./AboutMe.css";
import Navbar from "../components/Navbar";
import AboutMeHeroBanner from "../components/AboutMe/HeroBanner/AboutMeHeroBanner";
import AccordionGallery from "../components/AboutMe/AccordionGallery/AccordionGallery";

export default function AboutMe() {
  return (
    <>
      <Navbar />
      <main className="about-me-container">
        <AboutMeHeroBanner />
        <AccordionGallery />
      </main>
    </>
  );
}
