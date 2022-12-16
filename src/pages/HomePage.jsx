import React from "react";
import Details from "../components/Details";
import Footer from "../components/Footer";
import ImageCorusel from "../components/ImageCorusel";
import Maintext from "../components/Maintext";
import Video from "../components/Video";

const HomePage = () => {
  return (
    <div>
      <Maintext />

     
      <Footer />
      <Video />

      <Details />
      <ImageCorusel />
    </div>
  );
};

export default HomePage;
