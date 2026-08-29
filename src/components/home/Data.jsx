import React from "react";

const CV = "/leandro_ezequiel_raymondi_rossa.html";

const Data = () => {
  return (
    <div className="home__data">
      <span className="home__eyebrow">Disponible para equipos y proyectos web</span>
      <h1 className="home__title">Leandro Ezequiel Raymondi Rossa</h1>
      <h3 className="home__subtitle">Desarrollador Web / AI-Assisted Developer</h3>

      <p className="home__description">
        Construyo soluciones web de alto impacto que combinan experiencia técnica, criterio de producto y ejecución
        end-to-end. Con más de 3 años trabajando con LAMP, JavaScript y React, integro IA en mi flujo para entregar
        más rápido, refactorizar con precisión y sostener altos estándares de calidad.
      </p>

      <div className="home__actions">
        <a href="#portfolio" className="button button--flex">
          Ver casos reales <i className="bx bx-right-arrow-alt button__icon"></i>
        </a>
        <a download="" href={CV} className="button button--ghost button--flex">
          Descargar CV <i className="bx bx-download button__icon"></i>
        </a>
      </div>

      <div className="home__proof">
        <span>+3 años de experiencia</span>
        <span>Desarrollo web</span>
        <span>AI-Assisted Developer</span>
      </div>
    </div>
  );
};

export default Data;
