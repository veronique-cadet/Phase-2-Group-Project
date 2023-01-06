import React, { useState, useEffect } from "react";


export default function GetZen() {
  const [select, setSelect] = useState("/assets/waves.jpg");
  const [isPlaying, setIsPlaying] = useState(false)
  
  const waveSound = new Audio("/assets/waves.mp3")
  const forestSound = "/assets/forest.mp3"
  const rainSound = "/assets/rain.mp3"
  const streamSound = "/assets/stream.mp3"
  

  return (
    <div className="other-pages">
      <select onCategoryChange={(e) => setSelect(e.target.value)} name="cars" id="cars">
        <option value="/assets/waves.jpg">Waves</option>
        <option value="rain">Rain</option>
        <option value="forest">Forest</option>
        <option value="birds">Birds</option>
      </select>
      <img src={select} alt="back ground" />
      <button onClick={() => waveSound.play()}> Play</button>
      <button onClick={() => waveSound.pause()}> Pause</button>
      
    </div>
  );
}
