"use client";

import { useTranslation } from "@/app/contexts/TranslationProvider";
import "./Translation.css";
import { useRef, useState } from "react";
import useClickOutside from "@/app/hooks/useClickOutside";

export default function LanguageSwitcher() {
  const { changeLanguage, locale, getFlag } = useTranslation();
  const languageRef = useRef(null);
  const modalRef = useClickOutside(() => setIsOpen(false), [languageRef]);

  const [isOpen, setIsOpen] = useState(false);

  const handleFlag = (value) => {
    changeLanguage(value);
    setIsOpen(false);
  };

  return (
    <div className="languages-container">
      <div
        className="actual-language"
        ref={languageRef}
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: isOpen ? "default" : "pointer" }}
      >
        {getFlag()}
      </div>
      {isOpen && (
        <div className="languages-content-container" ref={modalRef}>
          <button
            disabled={locale === "fr"}
            onClick={() => handleFlag("fr")}
            style={{ cursor: locale === "fr" ? "not-allowed" : "pointer" }}
          >
            🇫🇷
          </button>

          <button
            disabled={locale === "en"}
            onClick={() => handleFlag("en")}
            style={{ cursor: locale === "en" ? "not-allowed" : "pointer" }}
          >
            🇬🇧
          </button>

          <button
            disabled={locale === "it"}
            onClick={() => handleFlag("it")}
            style={{ cursor: locale === "it" ? "not-allowed" : "pointer" }}
          >
            🇮🇹
          </button>
        </div>
      )}
    </div>
  );
}
