import React from "react";
import "./Skill.css";
import flower from "/assets/flower.png";

function Skill() {
  return (
    <>
      <div className="skills-section">
        <div className="row1">
          <div className="col1">
            <p className="title contact">Contact</p>
            <div className="links">
              <div>
                <img src={flower} alt="" width={"30px"} />
                <p>www.google.comwww.google.com</p>
              </div>
              <div>
                <img src={flower} alt="" width={"30px"} />
                <p>www.google.com</p>
              </div>
              <div>
                <img src={flower} alt="" width={"30px"} />
                <p>www.google.com</p>
              </div>
              <div>
                <img src={flower} alt="" width={"30px"} />
                <p>www.google.com</p>
              </div>
            </div>
          </div>
          <div className="col2">
            <p className="title education">Education</p>
          </div>
        </div>
        <div className="row2">
          <div className="col1">
            <p className="title skills">Skills</p>
          </div>
          <div className="col2">
            <p className="title experience">Experience</p>
          </div>
        </div>
        <div className="row3">
          <div className="col1">
            <p className="title strengths">Strengths</p>
          </div>
          <div className="col2">
            <p className="title interests">Interests</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
