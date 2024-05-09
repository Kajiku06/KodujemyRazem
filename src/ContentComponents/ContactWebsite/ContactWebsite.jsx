import React, { useState } from 'react';
import './ContactWebsite.css';

function ContactWebsite() {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Kontakt</h1>
        <p>Masz pytania? Skontaktuj się z nami!</p>
      </div>
      <div className="contact-details">
        <div className={`contact-item ${active ? 'active' : ''}`}>
          <h2>E-mail</h2>
          <p>kontakt@kd@poczta.pl</p>
        </div>
        <div className={`contact-item ${active ? 'active' : ''}`}>
          <h2>Telefon</h2>
          <p>+48 123 456 789</p>
        </div>
        <div className={`contact-item ${active ? 'active' : ''}`}>
          <h2>Lokalizacja</h2>
          <p>ul. Długa 1, 00-000 Warszawa</p>
        </div>
      </div>
      <div className="contact-form">
        <h2>Formularz kontaktowy</h2>
        <form>
          <label htmlFor="name">Imię i nazwisko:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Wiadomość:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
          <button type="submit" onClick={toggleActive}>Wyślij</button>
        </form>
      </div>
    </div>
  );
}

export default ContactWebsite;
