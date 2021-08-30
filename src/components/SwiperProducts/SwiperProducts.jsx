import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import ProductHero from "../ProductHero/ProductHero";
import antil1 from "../../img/uniforme1-antil.png";
import antil2 from "../../img/uniforme2-antil.png";
import sm1 from "../../img/polera-sm.png";
import ltsm1 from "../../img/polera-ltsm.png"
import ltsm2 from "../../img/polera2-ltsm.png"
import "swiper/swiper.scss";
SwiperCore.use([Pagination, Navigation]);

const SwiperProducts = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        breakpoints= {{
            320: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              // when window width is >= 480px
              630: {
                slidesPerView: 3,
                spaceBetween: 30
              },
        }}
        freeMode={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <ProductHero img={antil1} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductHero img={antil2} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductHero img={sm1} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductHero img={ltsm1} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductHero img={ltsm2} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperProducts;
