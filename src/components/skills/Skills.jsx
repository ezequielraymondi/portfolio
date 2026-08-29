import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import AiTools from "./AiTools";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Stack técnico</h2>
      <span className="section__subtitle">Herramientas usadas en proyectos reales</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <AiTools />
      </div>
    </section>
  );
};

export default Skills;
