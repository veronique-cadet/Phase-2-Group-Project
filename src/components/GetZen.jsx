import React, { useState } from "react";

export default function GetZen() {
  const [select, setSelect] = useState("waves");

  const waves = "/assets/lotus (2).png";

  const backGroundImg = "/assets/waves.jpg";
  const testImage = "/assets/four.png";
  
  const setBackgroundImage = () => {
    console.log(backGroundImg)
    if (select === "waves")
      return {
        backGroundImg,
      };
    else if (select === "rain")
      return {
        waves,
      };
    else return { testImage };

  };

  return (
    <div className="other-pages">
      <select onChange={(e) => setSelect(e.target.value)} name="cars" id="cars">
        <option value="waves">Waves</option>
        <option value="rain">Rain</option>
        <option value="forest">Forest</option>
        <option value="birds">Birds</option>
      </select>
      <img src={setBackgroundImage()} alt="back ground" />
    </div>
  );
}
