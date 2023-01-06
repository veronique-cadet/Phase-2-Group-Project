import React, { useState, useRef, useEffect } from "react";

export default function GetZen({ setHome }) {
  setHome(true);

  const [selectImage, setSelectImage] = useState("/assets/waves.mp4");
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current?.load();
  }, [selectImage]);

  const waveSound = new Audio("/assets/waves.mp3");
  const forestSound = new Audio("/assets/forest.mp3");
  const rainSound = new Audio("/assets/rain.mp3");
  const streamSound = new Audio("/assets/stream.mp3");

  const playSound = () => {
    if (selectImage === "/assets/waves.mp4") {
      return waveSound;
    } else if (selectImage === "/assets/rain.mp4") {
      return rainSound;
    } else if (selectImage === "/assets/waterfall.mp4") {
      return streamSound;
    } else if (selectImage === "/assets/bird.mp4") {
      return forestSound;
    } else return "/assets/waves.mp4";
  };

  return (
    <div className="other-pages">
      <div className="zen-image-dropdown-div">
        <h1 className="zen-image-title">Select Experience</h1>
        <select
          className="image-select"
          onChange={(e) => setSelectImage(e.target.value)}
        >
          <option value="/assets/waves.mp4">Waves</option>
          <option value="/assets/rain.mp4">Rain</option>
          <option value="/assets/waterfall.mp4">Stream</option>
          <option value="/assets/bird.mp4">Birds</option>
        </select>
        <video
          ref={videoRef}
          id="video"
          muted
          autoPlay={"autopnpmlay"}
          preload="auto"
          loop
        >
          <source src={selectImage} type="video/mp4" />
        </video>
      </div>
      <div className="button-div">
        <img
          src="/assets/play.png"
          className="button"
          onClick={() => {
            playSound().play();
          }}
        />
        <img
          src="/assets/pause.png"
          className="button"
          onClick={() => {
            playSound().pause();
          }}
        />
      </div>
    </div>
  );
}
