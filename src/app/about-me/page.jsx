"use client";

import "./AboutMe.css";
import Navbar from "../components/Navbar";
import AboutMeHeroBanner from "../components/AboutMe/HeroBanner/AboutMeHeroBanner";

export default function AboutMe() {
  return (
    <>
      <Navbar />
      <main className="about-me-container">
        <AboutMeHeroBanner />
      </main>
    </>
  );
}
