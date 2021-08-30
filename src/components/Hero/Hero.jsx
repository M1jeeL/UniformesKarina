import React from "react";
import wave from "../../wave.svg";
import SwiperProducts from "../SwiperProducts/SwiperProducts";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <h1 className="hero-text">
          ¡Aqu&iacute; encontrar&aacute;s la mejor calidad y precios del mercado!
        </h1>
        <div className="hero-swiper-products">
          <SwiperProducts />
        </div>
      </div>
      <img src={wave} className="wave-hero" alt="wave-hero" />
    </>
  );
};

export default Hero;
