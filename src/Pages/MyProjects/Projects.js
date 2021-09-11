import React from "react";
import "./ProjectStyle.css";
import { useHistory } from "react-router";
const Projects = () => {
  const history = useHistory();
  const handleClick = (e) => {
    history.push("/ProjectInfo");
  };
  const imageContainer2 = (e) => {
    history.push("/Railway");
  };
  return (
    <div className="project-sec">
      <div className="projectTitle">
        My Project <br /> Work :
      </div>
      <div className="pageContainer">
        <div className="container">
          <div className="projectInfo">
            <span className="proj-title">Farm Planing Tool</span>
            <br />
            <span className="proj-desc">
              Mobile app for farmers to plan the crop schedule.
            </span>
          </div>
          <div className="fill">
            <img
              onClick={handleClick}
              id="proj-img"
              src="https://images.pexels.com/photos/4544167/pexels-photo-4544167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="railways"
            ></img>
          </div>
        </div>
        <div className="container">
          <div className="fill" style={{ justifyContent: "flex-end" }}>
            <img
              onClick={imageContainer2}
              id="proj-img"
              src="https://images.pexels.com/photos/1389460/pexels-photo-1389460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="railways"
            ></img>
          </div>
          <div className="projectInfo">
            <div className="proj-title">Process Management System</div>
            <br />
            <div className="proj-desc">
              <span>
                Website for Vatan Textile to digitalize their process.
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="projectInfo">
            <div className="proj-title">Kissan Connect</div>
            <br />
            <div className="proj-desc">
              E-commerce website for Farmers to sell their produce.
            </div>
          </div>
          <div className="fill">
            <img
              id="proj-img"
              src="https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="railways"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
