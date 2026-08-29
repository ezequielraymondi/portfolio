import React from "react";

const AiTools = () => {
  const skills = ["Cursor IDE", "OpenAI Codex", "Claude Code", "Antigravity", "Prompting", "Spec-Driven Dev"];

  return (
    <div className="skills__content">
      <h3 className="skills__title">Desarrollo asistido por IA</h3>

      <div className="skills__box">
        {skills.map((name) => (
          <div className="skills__data" key={name}>
            <i className="bx bx-badge-check"></i>
            <h3 className="skills__name">{name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTools;
