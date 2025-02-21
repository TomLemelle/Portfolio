"use client";

import "./realisations.css";
import Navbar from "../components/Navbar";
import RealisationsHeader from "../components/Realisations/Realisations/Header/RealisationsHeader";
import RealisationsList from "../components/Realisations/Realisations/RealisationsList/RealisationsList";
import { useState } from "react";

export default function Realisations() {
  const [choice, setChoice] = useState("");

  return (
    <>
      <Navbar />
      <section className="realisations-container">
        <RealisationsHeader choice={choice} setChoice={setChoice} />
        <RealisationsList choice={choice} setChoice={setChoice} />
      </section>
    </>
  );
}
