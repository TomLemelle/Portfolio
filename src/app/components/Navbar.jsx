"use client";
import Link from "next/link";
import { IoIosSettings } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./Navbar.css";
import LanguageSwitcher from "./Translation/LanguageSwitcher";
import { useTranslation } from "@/app/contexts/TranslationProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { dictionary, locale } = useTranslation();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-wrapper">
          {/* Logo */}
          <Link href="/">
            <div className="logo-container">
              <div className="logo">Tom</div>
              <IoIosSettings className="tom-settings-icon" size={24} />
            </div>
          </Link>

          {/* Menu burger animé */}
          <div
            className={`burger-menu ${isOpen ? "mobile-close-btn" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              className="burger-icon"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <IoClose color="white" size={30} />
              ) : (
                <IoMenu size={30} />
              )}
            </motion.div>
          </div>

          {/* Navigation Desktop */}
          <ul className="links-container">
            <li className="link">
              <Link href="/">{dictionary.nav.home}</Link>
            </li>
            <li className="link">
              <Link href="/about-me">{dictionary.nav.about}</Link>
            </li>
            <li className="link">
              <Link href="/realisations">{dictionary.nav.realisations}</Link>
            </li>
          </ul>

          <div className="right-navbar">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Menu Mobile (plein écran) */}
      <AnimatePresence>
        {isOpen && (
          <div className="mobile-overlay">
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Liens du menu */}
              <ul className="mobile-links">
                <li className="link">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    Accueil
                  </Link>
                </li>
                <li className="link">
                  <Link href="/about-me" onClick={() => setIsOpen(false)}>
                    À propos
                  </Link>
                </li>
                <li className="link">
                  <Link href="/realisations" onClick={() => setIsOpen(false)}>
                    Réalisations
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
