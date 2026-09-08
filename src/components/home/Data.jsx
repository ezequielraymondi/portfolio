import React from "react";

const CV = "/leandro_ezequiel_raymondi_rossa.html";

const Data = () => {
  return (
    <div className="home__data">
      <span className="home__eyebrow">Disponible para equipos y proyectos web</span>
      <h1 className="home__title">Ezequiel Raymondi</h1>
      <h3 className="home__subtitle">Desarrollador Web / AI-Assisted Developer</h3>

      <p className="home__description">
        Desarrollo soluciones web end-to-end desde el lado técnico: lógica de negocio, bases de datos, integración de
        interfaces, APIs y despliegue. Me enfoco en construir sistemas claros, mantenibles y escalables, potenciando mi
        flujo con IA para mejorar velocidad, debugging y refactorización.
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
