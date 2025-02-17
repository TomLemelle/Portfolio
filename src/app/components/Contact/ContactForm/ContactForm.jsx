import React from "react";
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <form className="contact-form">
      {/* Nom et Prénom */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Votre prénom"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Nom de famille</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Votre nom de famille"
          />
        </div>
      </div>

      {/* Numéro de téléphone */}
      <div className="form-group">
        <label htmlFor="phone">Numéro de téléphone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Votre numéro de téléphone"
        />
      </div>

      {/* Email */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Votre adresse email"
        />
      </div>

      {/* Message */}
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          defaultValue={
            "Bonjour,\n\nJ'aimerais créer un site web pour [précisez votre besoin ou type de site]."
          }
        ></textarea>
      </div>

      {/* Bouton */}
      <button type="submit" className="form-button">
        Contactez-moi
      </button>
    </form>
  );
}
