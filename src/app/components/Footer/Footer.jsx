import Link from "next/link";
import "./Footer.css";
import { IoIosSettings } from "react-icons/io";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Ajout des bons icônes
import { SiMalt } from "react-icons/si";
import { useTranslation } from "@/app/contexts/TranslationProvider";

export default function Footer() {
  const { dictionary, locale } = useTranslation();

  return (
    <footer className="dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              href="/"
              className="footer-logo-container flex items-center gap-x-[3px]"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Tom Lemelle
              </span>
              <IoIosSettings className="tom-settings-icon" size={24} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-14 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {dictionary.footer.quickLinks.quickLinks}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    {dictionary.footer.quickLinks.home}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/about-me" className="hover:underline">
                    {dictionary.footer.quickLinks.about}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/realisations" className="hover:underline">
                    {dictionary.footer.quickLinks.projects}
                  </Link>
                </li>
                <li>
                  <div className="hover:underline">
                    {dictionary.footer.quickLinks.contact}
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {dictionary.footer.followMe}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/in/tom-lemelle/"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.malt.fr/profile/tomlemelle"
                    className="hover:underline"
                  >
                    Malt
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/tomlemelle/?hl=fr"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/TomLemelle"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Tom Lemelle™
            </a>{" "}
            {dictionary.footer.copyright}
          </span>
          <div className="flex mt-4 sm:justify-center items-center sm:mt-0">
            <a
              href="https://www.linkedin.com/in/tom-lemelle/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaLinkedin className="w-4 h-4" />
              <span className="sr-only">LinkedIn account</span>
            </a>
            <a
              href="https://www.malt.fr/profile/tomlemelle"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <SiMalt className="w-8 h-8" />
              <span className="sr-only">Malt account</span>
            </a>
            <a
              href="https://github.com/TomLemelle"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaGithub className="w-4 h-4" />
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://www.instagram.com/tomlemelle"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaInstagram className="w-4 h-4" />
              <span className="sr-only">Instagram account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
