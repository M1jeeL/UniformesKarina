import React from "react";
import gallery1 from "../../img/gallery1.jpg";
import gallery2 from "../../img/gallery2.jpg";
import gallery3 from "../../img/gallery3.jpg";
import gallery4 from "../../img/gallery4.jpg";
import gallery5 from "../../img/gallery5.jpg";
import gallery6 from "../../img/gallery6.jpg";
import "./Gallery.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper.scss";
SwiperCore.use([Pagination, Navigation]);

const Gallery = () => {
  return (
    <>
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="gallery-container"
      >
        <SwiperSlide className="gallery-item">1</SwiperSlide>
        <SwiperSlide className="gallery-item gallery-wide">2</SwiperSlide>
        <SwiperSlide className="gallery-item gallery-tall">3</SwiperSlide>
        <SwiperSlide className="gallery-item">4</SwiperSlide>
        <SwiperSlide className="gallery-item">5</SwiperSlide>
        <SwiperSlide className="gallery-item">6</SwiperSlide>
        <SwiperSlide className="gallery-item">7</SwiperSlide>
        <SwiperSlide className="gallery-item">8</SwiperSlide>
        <SwiperSlide className="gallery-item">9</SwiperSlide>
      </Swiper> */}
      {/* <div className="gallery-container">
        <div
          className="gallery-item"
          style={{
            background:
              'url("https://scontent-scl2-1.xx.fbcdn.net/v/t1.6435-9/145055019_817859728804661_6588913193359915027_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeG7nYuneqUAyX0a_mxFLkWrJc1Vs2JcD-8lzVWzYlwP77f0-h9A3tXKVUUFlnDiAMQ&_nc_ohc=L0j1g8qRqbcAX_0XEq0&_nc_ht=scontent-scl2-1.xx&oh=db8da5adcbd2647ea7316c18a573fe4f&oe=614F88E1")',
          }}
        >
        </div>
        <div
          className="gallery-item"
          style={{ background: 'url("https://scontent-scl2-1.xx.fbcdn.net/v/t1.6435-9/146011822_817859645471336_8813312212175738332_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeH7cHTvyo3RjMriO7jPK8aBCIY_JvvbAsEIhj8m-9sCwUhpUKkzcnj1lP31_OJrXyA&_nc_ohc=PkFeTDl96ioAX_aFhtm&tn=KDA7JWAI8ZelTJ0L&_nc_ht=scontent-scl2-1.xx&oh=c1f78076a6b10e5703ff8319eefef19e&oe=614F17B6")' }}
        >
        </div>
        <div
          className="gallery-item gallery-tall"
          style={{ background: 'url("https://scontent-scl2-1.xx.fbcdn.net/v/t1.6435-9/146480917_817859695471331_2965121770886391090_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeF-VdF9HmhX0022uo2vb_7QzW3dKSN1rN7Nbd0pI3Ws3gmqbqQGd0KqpW8TZwlxhHU&_nc_ohc=ji56Zspv7csAX_shJXQ&_nc_ht=scontent-scl2-1.xx&oh=344fea76d54947f6242a230105ca7da3&oe=61522610")' }}
        >
        </div>
        <div
          className="gallery-item gallery-tall"
          style={{ background: 'url("https://scontent-scl2-1.xx.fbcdn.net/v/t1.6435-9/49397725_363588494231789_8538490594714976256_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeF7J7BQlT77Z_-8CrqUDbkrl6gu7NEfRvyXqC7s0R9G_Nk7vhLytjefHqnkxAX2XHY&_nc_ohc=9om_w4zc1N0AX_i6njb&_nc_ht=scontent-scl2-1.xx&oh=40edbe04c0c028e80cc644c9f0687de4&oe=6150D3FB")' }}
        >
        </div>
        <div
          className="gallery-item gallery-wide"
          style={{ background: 'url("https://scontent-scl2-1.xx.fbcdn.net/v/t1.6435-9/144672734_817859875471313_935362935692006892_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEQclgLnMdjAL4_CdSPfDKgk0w1ev1SyNaTTDV6_VLI1hzRZm2WhKJwmQ6oANjuqoY&_nc_ohc=8JSqyH_HTooAX9AxlbS&_nc_ht=scontent-scl2-1.xx&oh=ee189349486a0e2ddad1e775ea677907&oe=6150A42D")' }}
        >
        </div>
      </div> */}
    </>
  );
};

export default Gallery;
