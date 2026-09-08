import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import Info from "./Info";

const CV = "/leandro_ezequiel_raymondi_rossa.html";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Sobre mí</h2>
      <span className="section__subtitle">Un poco más sobre quién soy</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="Ezequiel Raymondi, desarrollador web" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Soy una persona comprometida, proactiva y con muchas ganas de seguir creciendo. Hace más de 3 años trabajo
            como desarrollador freelance, lo que me enseñó a adaptarme, comunicarme con clientes, tomar decisiones
            técnicas y sostener proyectos en producción. Me gusta aportar ideas, colaborar con otros y formar parte de
            equipos donde pueda sumar desde lo técnico y lo humano.
          </p>

          <a download="" href={CV} className="button button--flex">
            Descargar CV <i className="bx bx-download button__icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
