import React from "react";
import machine from "../../img/maquina.png";
import ContactForm from "../ContactForm/ContactForm";
import "./Embroider.scss";

const Embroider = () => {
  return (
    <div className="embroider-container">
      <div className="left-side">
        <div className="left-text">
          ¡Adem&aacute;s realizamos bordados con
          <br /> tus diseños personalizados a medida!
        </div>
        <img src={machine} alt="Maquina bordadora" className="img-machine" />
      </div>
      
    <ContactForm />
      
    </div>
  );
};

export default Embroider;
