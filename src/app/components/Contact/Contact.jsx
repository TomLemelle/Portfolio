import "./Contact.css";
import { FaTimes } from "react-icons/fa";
import ContactForm from "./ContactForm/ContactForm";

export default function Contact({ closeContact, ref }) {
  return (
    <div className="contact-popup" ref={ref}>
      <div className="popup-header">
        <span>Contacter Tom Lemelle</span>
        <button className="close-button">
          <FaTimes size={16} onClick={closeContact} />
        </button>
      </div>
      <div className="popup-body">
        <ContactForm />
      </div>
    </div>
  );
}
