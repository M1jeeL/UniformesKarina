import React from "react";
import logoAntil from "../../img/logo-antil.png";
import logoCtp from "../../img/logo-ctp.png";
import logoSanMiguel from "../../img/logo-ltsm.png";
import "./Colleges.scss";

const Colleges = () => {
  return (
    <div className="colleges-container">
      <div className="colleges-text" data-aos="zoom-in-down">
        Nuestros socios
      </div>
      <div className="college-logos" data-aos="fade-down">
        <img
          src={logoAntil}
          alt="Logo colegio antil mawida"
          className="college-logo"
          data-aos="flip-up"
        />
        <img
          src={logoCtp}
          alt="logo colegio ctp"
          className="college-logo"
          data-aos="flip-down"
        />
        <img
          src={logoSanMiguel}
          alt="logo liceo tecnico san miguel"
          className="college-logo"
          data-aos="flip-up"
        />
      </div>
    </div>
  );
};

export default Colleges;
