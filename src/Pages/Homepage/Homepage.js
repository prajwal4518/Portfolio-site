import React from "react";
import photo from "../../Styles/photo.jpg";
import "./HomepageStyle.css";
import { Graphs } from "./Graphs.js";
import Navbar from "./Navbar/Navbar";
export const Homepage = () => {
  return (
    <div className="main-homepage">
      <Navbar />
      <div className="parent">
        <div className="child">
          <div className="main-content">
            <div className="title">
              Hello, I'm Prajwal Padal,
              <span id="subtitle"> a Developer.</span>
              <p id="subtitle2">
                I'm here to built your Dream idea to reality.
              </p>
            </div>
            <a href="#contact-page" style={{ textDecoration: "none" }}>
              <button className="cta-button">Let's connect...</button>
            </a>
          </div>
        </div>
        <div className="child">
          <img src={photo} alt="abcd" />
        </div>
        <div className="child">
          <div className="skill-sec">
            <h4>My Skillset</h4>
            {/* <p>
              Here is some of my Skills that help me throughout my journey of
              coding
            </p> */}
            <div className="box-container">
              {Graphs.map((graph, key) => {
                return (
                  <div key={key}>
                    {graph.graph1}
                    {graph.graph2}
                    {graph.graph3}
                    {graph.graph4}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
