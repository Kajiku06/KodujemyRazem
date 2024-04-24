import React from "react";
import "./Footer.css"; 
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section className="top">
        <img src="logo.svg" alt="Logo" />
        <div className="links">
          <div className="links-column">
            <h2>Zobacz Również:</h2>
            <a>Bla</a>
            <a>Bla</a>
            <a>Bla</a>
            <a>Bla</a>
            <a>Bla</a>
          </div>
          <div className="links-column">
            <h2>Matura:</h2>
            <a>Bla</a>
            <a>Bla</a>
            <a>Bla</a>
            <a>Bla</a>
            <a>Bla</a>
          </div>
          <div className="links-column socials-column">
            <h2>Media:</h2>
            <p>
            Jeśli jesteś zainteresowany nauką informatyki zaobserwuj nas na mediach społecznościowych w ramach wsparcia nas
            </p>
            <div className="socials">
              <a href="https://www.facebook.com/gdynia.zschie/?locale=pl_PL"><FaFacebookF /></a>
              <a href="#"><FaTiktok /></a>
              <a href="https://www.linkedin.com/in/kazimierz-kiper-4432bb2a5/?originalSubdomain=pl" className="fab fa-linkedin"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </section>
      <section className="bottom">
        <p className="copyright">© 2024 Wszelkie prawa zastrzeżone</p>
        <div className="legal">
          <a href="#">Kontakt</a>
          <a href="#">Polityka prywatności</a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;