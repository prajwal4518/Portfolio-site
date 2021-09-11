import React from "react";
import "./Navbar.css";
import logo from "../../../Styles/logo.svg";
function Navbar() {
  return (
    <div className="navbar">
      <div className="icon">
        <img id="powerTech" src={logo} alt="logo"></img>
      </div>
      <div className="icon2">
        <span className="navText">Resume</span>
        <a href="#contact-page" style={{ textDecoration: "none" }}>
          {" "}
          <span className="navText">Contact me</span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
