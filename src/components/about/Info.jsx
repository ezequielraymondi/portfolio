import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experiencia</h3>
        <span className="about__subtitle">+3 años</span>
      </div>

      <div className="about__box">
        <i className="bx bx-server about__icon"></i>
        <h3 className="about__title">Foco</h3>
        <span className="about__subtitle">LAMP + IA</span>
      </div>
    </div>
  );
};

export default Info;
