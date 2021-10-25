import React from "react";
import "./Banner.css";
import outro from "../../assets/intro.mp4";

export default function Banner() {
  return (
    <div className="CCarousel">
      <video
        className="vidHgt"
        width="100%"
        autoPlay={true}
        controls={false}
        loop={true}
        muted
      >
        <source src={outro} type="video/mp4" />
      </video>
      {/* <ReactPlayer
        className="imgHgt"
        url="https://www.youtube.com/watch?v=67MWsCOITtU"
        loop={true}
        width="100%"
        height="100vh"
        muted={true}
        controls={false}
      /> */}
      <div className="center">
        <h1>
          Village Data
          <br />
          Management System
        </h1>
      </div>
    </div>
  );
}
