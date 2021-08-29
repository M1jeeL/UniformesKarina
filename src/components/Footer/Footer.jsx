import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
      <>
    <div className="footer-container">
      <div className="footer-address">
        Mamiña 161, La Cisterna
        <br />
        Regi&oacute;n Metropolitana
        <b />
        Chile
      </div>
      <div className="footer-social">
        <div className="footer-social-cel">
          Celular: <span>+56 9 2090 6339</span>
        </div>
        <div className="footer-social-icons">
          <div className="footer-wsp">
            <a
              href="https://api.whatsapp.com/send/?phone=56920906339&text=Hola,%20me%20puede%20dar%20más%20información%20sobre%20los%20precios%20por%20favor&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp fa-2x"></i>
            </a>
          </div>
          <div className="footer-facebook">
            <a
              href="https://www.facebook.com/Venta-de-Uniformes-Karina-361735524417086/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
          </div>
          <div className="footer-ig">
            <a href="https://www.instagram.com/_mijeel/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-logo">Uniformes Karina</div>
    </div>
    <div className="firma-footer">&#169; Miguel Loza</div>
    </>
  );
};

export default Footer;
