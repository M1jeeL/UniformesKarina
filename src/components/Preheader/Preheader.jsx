import React from "react";
import "./Preheader.scss";

const Preheader = () => {
  return (
    <div className="pre-header-container">
      <a href="tel:+56920906339" className="pre-header-item">
        <div className="pre-header-icono">
          <i className="fas fa-phone-alt"></i>
        </div>
        <div className="pre-header-text">+56 9 2090 6339</div>
      </a>
      <a href="https://api.whatsapp.com/send/?phone=56920906339&text=Hola,%20me%20puede%20dar%20más%20información%20sobre%20los%20precios%20por%20favor&app_absent=0" target="_blank" rel="noreferrer" className="pre-header-item">
        <div className="pre-header-icono-wsp">
          <i className="fab fa-whatsapp"></i>
        </div>
        <div className="pre-header-text">+56 9 5412 5238</div>
      </a>
      <a href="https://www.facebook.com/Venta-de-Uniformes-Karina-361735524417086/" target="_blank" rel="noreferrer" className="pre-header-item">
        <div className="pre-header-icono-fb">
          <i className="fab fa-facebook"></i>
        </div>
        <div className="pre-header-text">Venta de Uniformes Karina</div>
      </a>
    </div>
  );
};

export default Preheader;
