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
        <i className="bx bx-user-voice about__icon"></i>
        <h3 className="about__title">Perfil</h3>
        <span className="about__subtitle">Proactivo y empático</span>
      </div>

      <div className="about__box">
        <i className="bx bx-bulb about__icon"></i>
        <h3 className="about__title">Actitud</h3>
        <span className="about__subtitle">Ideas y compromiso</span>
      </div>
    </div>
  );
};

export default Info;
