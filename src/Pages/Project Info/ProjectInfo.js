import React from "react";
import "./Styleproject-info.css";
// import { useHistory } from react-router-dom;

function ProjectInfo() {
  return (
    <div className="project-info">
      <div className="textContainer">
        <h1 className="farmTitle">
          Farm Planning <br />
          Tool
        </h1>
        <div className="projectDesc">
          <ul>
            <li>
              A Cross Platform Mobile Application developed in Flutter Framework
              for Android and IOS.
            </li>
            <br />
            <li>
              Farmer can plan his farm activities and can follow pre-defined
              Crop Calendars.
            </li>
            <br />
            <li>
              We have used local database(SQLite) to store data and used other
              Flutter and Dart Packages to integrate various<br></br>
              features like Calendar, to-dos, weather(OpenWeatherMap API).
            </li>
          </ul>
        </div>
        <br />
        <button>Check It Out</button>
      </div>
      <div className="projectContainer">
        <div className="imgContainer">
          <img
            className="mockup1"
            src="/assets/mockup1.svg"
            alt="mockups"
          ></img>
        </div>
        <div
          className="imgAnimation"
          style={{
            marginLeft: "249px",
            position: "absolute",
            bottom: "-40%",
            overflow: "hidden",
          }}
        >
          <img
            src="/assets/mockup3.svg"
            style={{ marginBottom: "3rem" }}
            alt="mockups"
          ></img>
          <img src="/assets/mockup2.svg" alt="mockups"></img>
        </div>
      </div>
    </div>
  );
}

export default ProjectInfo;
