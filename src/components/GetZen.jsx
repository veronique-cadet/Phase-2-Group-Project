import React, { useState, useRef, useEffect } from "react";

export default function GetZen({ setHome }) {
  setHome(true);

  const [selectImage, setSelectImage] = useState("/assets/waves.mp4");
  // const [selectMusic, setSelectMusic] = useState();

  const videoRef = useRef();

  useEffect(() => {
    videoRef.current?.load();
  }, [selectImage]);

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
          <option value="/assets/waterfall.mp4">Forest</option>
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
      {/* <select onChange={(e) => setSelectMusic(e.target.value)}>
        <option value="">Waves</option>
        <option value="">Rain</option>
        <option value="">Forest</option>
        <option value="">Birds</option>
      </select>
      <audio controls>
        <source src="horse.mp3" type="audio/mpeg"></source>
      </audio> */}
    </div>
  );
}
