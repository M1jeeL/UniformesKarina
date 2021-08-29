import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Preheader from "../components/Preheader/Preheader";
import Hero from "../components/Hero/Hero";
import Colleges from "../components/Colleges/Colleges";
import Info from "../components/Info/Info";
import Embroider from "../components/Embroider/Embroider";
import Footer from "../components/Footer/Footer";
import MyGallery from "../components/MyGallery/MyGallery";

const Home = () => {
  return (
    <>
      <Preheader />
      <Navbar />
      <Hero />
      <Colleges />
      <Info />
      <MyGallery />
      <Embroider />
      <Footer />
    </>
  );
};

export default Home;
