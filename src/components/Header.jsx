import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-div">
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
