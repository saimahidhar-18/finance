import React from "react";
import flp from "../assets/videos/flp.mp4";
import { Player } from 'video-react';

const Video = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col justify-center">
      {/* <video src={flp}></video> */}
      {/* <Player>
      <source src={flp} />
    </Player> */}
        {/* <video controls autoplay controlslist="nodownload">
          <source src={flp} type="video/mp4" />
        </video> */}
        {/* <img></img> */}
        <div className="text-center my-3">
          <button className="btn btn-active btn-info ">
            <a href="tsudhakarreddy.in"> Register for this opportunity</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
