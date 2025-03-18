"use client";

import { createContext, useContext, useState, useEffect } from "react";
import fr from "../locales/fr.json";
import en from "../locales/en.json";
import it from "../locales/it.json";

const translations = { fr, en, it };
const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [locale, setLocale] = useState("fr");
  const [dictionary, setDictionary] = useState(translations[locale]);

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") || "fr";
    setLocale(savedLocale);
    setDictionary(translations[savedLocale]);
  }, []);

  const changeLanguage = (lang) => {
    setLocale(lang);
    setDictionary(translations[lang]);
    localStorage.setItem("locale", lang);
  };

  return (
    <TranslationContext.Provider value={{ dictionary, changeLanguage, locale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}
