import React from "react";
import "./Info.scss";

const Info = () => {
  return (
    <div className="info-container">
      <a
        href="geo:-33.53320648688138,-70.66116333748082"
        className="left-side"
        data-aos="flip-left"
      >
        <div className="info-icono">
          <i className="fas fa-map-marker-alt fa-4x"></i>
        </div>
        <div className="info-text">
          Nos puedes encontrar en
          <br /> Mami&ntilde;a 161, La Cisterna
        </div>
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=56920906339&text=Hola,%20me%20puede%20dar%20más%20información%20sobre%20los%20precios%20por%20favor&app_absent=0"
        className="info-mid"
        data-aos="flip-left"
      >
        <div className="info-icono">
          <i className="fab fa-whatsapp fa-4x"></i>
        </div>
        <div className="info-text">
          Escribenos al WhatsApp
          <br /> +56 9 2090 6339
        </div>
      </a>
      <a href="tel:+56920906339" className="rigth-side" data-aos="flip-left">
        <div className="info-icono">
          <i className="fas fa-phone fa-4x"></i>
        </div>
        <div className="info-text">
          Contactate con nosotros
          <br /> +56 9 2090 6339
        </div>
      </a>
    </div>
  );
};

export default Info;
