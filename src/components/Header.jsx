import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default function Header({ home }) {
  // const [changeNav, setChangeNav] = useState(
  //   window.location.href === "http://localhost:3000/"
  // );
  return (
    <div className={home ? "header-div" : "header-div-sub"}>
      <div className="nav-div">
        <Link to="/">
          <h1 className="header-title">Lotus</h1>
        </Link>
        <img id="nav-icon" src="assets/lotus (3).png" alt="lotus" />
      </div>
      <NavBar />
    </div>
  );
}
