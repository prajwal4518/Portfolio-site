import React from "react";
import "./Railway.css";
// import { useHistory } from react-router-dom;

function Railway() {
  return (
    <div className="project2-container">
      <div className="pr2-block1">
        <div className="mockupContainer">
          <img
            className="pr2-block1-img"
            src="/assets/Iphone_staff_mockup.svg"
            alt="Mockup"
          ></img>
          <div className="textEffect">
            <img
              id="roundText"
              src="/assets/round text.svg"
              alt="textEffect"
            ></img>
          </div>
        </div>
        <div className="pr2-desc">
          <h1>
            PROCESS MANAGEMENT
            <br /> SYSTEM
          </h1>

          <span>
            A Cross Platform Mobile App
            <br />
            developed in Flutter Framework
            <br />
            for farmers to set and follow crop schedules
            <br />
            according to pre-analyzed Crop Calendars.
          </span>
        </div>
        {/* <button>Check It Out</button> */}
      </div>
      <div className="pr2Block2">
        <div className="imageContainer">
          <img className="pr2Image" src="/assets/graphs1.png" alt="railway" />
          <img
            className="pr2Image"
            src="/assets/dashboard1.png"
            alt="railway"
          />
          <img className="pr2Image" src="/assets/orders.png" alt="railway" />
        </div>
      </div>
    </div>
  );
}

export default Railway;
