import Link from "next/link";
import "./Navbar.css";
import { IoIosSettings } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <Link href="/">
          <div className="logo-container">
            <div className="logo">Tom</div>
            <IoIosSettings className="tom-settings-icon" size={24} />
          </div>
        </Link>

        <ul className="links-container">
          <li className="link">
            <Link href="/">Accueil</Link>
          </li>
          <li className="link">
            <Link href="/à-propos">À propos</Link>
          </li>
          <li className="link">
            <Link href="/realisations">Réalisations</Link>
          </li>
          <li className="link">
            <Link href="#services">Services</Link>
          </li>
        </ul>
        <Link href="/contact">
          <div className="navbar-contact-container">
            <div className="navbar-contact">Contact</div>
          </div>
        </Link>
      </div>
    </nav>
  );
}
