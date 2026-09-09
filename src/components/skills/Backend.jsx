import React from "react";

const Backend = () => {
  const skills = ["PHP", "Python", "MySQL/SQL", "LAMP", "Node.js", "AWS EC2/S3", "Postman", "Firebase"];

  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend, datos y despliegue</h3>

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

export default Backend;
