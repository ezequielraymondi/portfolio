import React from "react";
import "./footer.css";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ezequielraymondi/",
    icon: "bx bxl-linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/ezequielraymondi/",
    icon: "bx bxl-github",
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/eze.raymondi/",
    icon: "bx bxl-instagram",
    label: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@eze.raymondi",
    icon: "bx bxl-tiktok",
    label: "TikTok",
  },
  {
    href: "https://www.youtube.com/@eze.raymondi",
    icon: "bx bxl-youtube",
    label: "YouTube",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61577666664031",
    icon: "bx bxl-facebook",
    label: "Facebook",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ezequiel Raymondi</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre mí
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Casos reales
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contacto
            </a>
          </li>
        </ul>

        <div className="footer__social">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <i className={icon}></i>
            </a>
          ))}
        </div>

        <span className="footer__copy">
          &#169; Ezequiel Raymondi. Desarrollador Web / AI-Assisted Developer.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
