import React from "react";

const Frontend = () => {
  const skills = ["HTML/CSS", "JavaScript", "React", "Bootstrap/SASS", "Git/GitHub", "REST APIs"];

  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend y experiencia de usuario</h3>

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

export default Frontend;
