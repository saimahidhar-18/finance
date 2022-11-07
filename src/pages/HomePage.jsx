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

      <Video />
      <Footer />

      <Details />
      <ImageCorusel />
    </div>
  );
};

export default HomePage;
