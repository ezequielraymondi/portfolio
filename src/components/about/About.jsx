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
        <img src={AboutImg} alt="Leandro Raymondi" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Tengo 26 años y hace más de 3 años trabajo de forma freelance creando soluciones web para distintos
            clientes y necesidades. Me apasiona el desarrollo, pero también disfruto involucrarme en las decisiones,
            proponer ideas que sumen y colaborar para que cada proyecto avance con claridad. Me considero una persona
            leal, proactiva, empática y comprometida con construir relaciones de confianza además de buen software.
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
