import React from "react";
import flp from "../assets/videos/flp.mp4";

const Video = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col justify-center">
        <video src={flp} autoPlay controls />
        
        <div className="text-center my-3">
          <button className="btn btn-active btn-info ">
            <a href="#"> Register for my Webinar</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
