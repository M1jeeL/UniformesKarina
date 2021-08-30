import React, { useEffect } from "react";
import wave from "../../wave.svg";
import SwiperProducts from "../SwiperProducts/SwiperProducts";
import "./Hero.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="hero">
        <h1 className="hero-text" data-aos="fade-right">
          ¡Aqu&iacute; encontrar&aacute;s la mejor calidad y precios del
          mercado! ¡Lo que estabas buscando y de la mejor calidad!
        </h1>
        <div className="hero-swiper-products" data-aos="fade-left">
          <SwiperProducts />
        </div>
      </div>
      <img src={wave} className="wave-hero" alt="wave-hero" />
    </>
  );
};

export default Hero;
