"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiMalt } from "react-icons/si";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center p-6 w-full max-w-lg mx-auto"
    >
      <h2 className="text-lg md:text-2xl font-bold text-gray-800">
        tom.lemelle@gmail.com
      </h2>

      <div className="w-20 h-1 bg-green my-4 rounded-full"></div>

      <p className="text-lg md:text-xl text-gray-700">+33 6 12 34 56 78</p>

      {/* Liens de contact avec logos */}
      <div className="flex mt-6 justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/tom-lemelle/"
          className="text-green hover:text-gray-900 transition-transform transform hover:scale-110"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href="https://www.malt.fr/profile/tomlemelle"
          className="text-green hover:text-gray-900 transition-transform transform hover:scale-110"
        >
          <SiMalt className="w-7 h-7" />
        </a>
        <a
          href="https://github.com/TomLemelle"
          className="text-green hover:text-gray-900 transition-transform transform hover:scale-110"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/tomlemelle"
          className="text-green hover:text-gray-900 transition-transform transform hover:scale-110"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
      </div>
    </motion.div>
  );
}
