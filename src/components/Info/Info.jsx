import React from "react";
import "./Info.scss";

const Info = () => {
  return (
    <div className="info-container">
      <div className="left-side">
        <div className="info-icono">
          <i className="fas fa-map-marker-alt fa-4x"></i>
        </div>
        <div className="info-text">
          Nos puedes encontrar en
          <br /> Mami&ntilde;a 161, La Cisterna
        </div>
      </div>
      <div className="info-mid">
        <div className="info-icono">
          <i className="fab fa-whatsapp fa-4x"></i>
        </div>
        <div className="info-text">
          Escribenos al WhatsApp
          <br /> +56 9 5412 5238
        </div>
      </div>
      <div className="rigth-side">
        <div className="info-icono">
          <i className="fas fa-phone fa-4x"></i>
        </div>
        <div className="info-text">
          Contactate con nosotros
          <br /> +56 9 2090 6339
        </div>
      </div>
    </div>
  );
};

export default Info;
