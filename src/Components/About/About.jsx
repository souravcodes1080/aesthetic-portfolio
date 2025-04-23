import React from "react";
import "./About.css";
import bookmark from "/assets/bookmark.png";
import profile from "/assets/profile.png";
import flower from "/assets/flower.png";
import Skill from "../Skill/Skill";
function About() {
  return (
    <>
      <div className="about-wrapper">
        <div className="about-title">
          <h1>Introduction</h1>
        </div>
        <div className="about-main">
          <div className="about-main-left"></div>
          <div className="about-main-right">
            <img
              className="bookmark"
              src={bookmark}
              alt="bookmark_png"
              width={"100%"}
            />
            <img
              className="flower"
              src={flower}
              alt="flower_png"
              width={"100%"}
            />
            <div className="container">
              <div className="about-me">
                <div className="profile">
                  <img src={profile} alt="Karma" />
                </div>
                <div className="description">
                  <div className="name">
                    <p>
                      <i>it's me, hi</i>
                    </p>
                    <p>SOURAV CHOWDHURY</p>
                  </div>

                  <div className="subtitle">
                    <span>
                      Indian&nbsp; |&nbsp; 11th April, 2003 &nbsp;| &nbsp;@_souravjustchill
                    </span>
                  </div>

                  <div className="details">
                    <p>
                      <i>I bet you think about me. </i>I'm a final-year Computer
                      Science student pursuing my bachelor's degree with a
                      passion for web development. I've dedicated years to
                      mastering front-end design and am now focused on backend
                      skills. Alongside development, I'm also exploring newer
                      web technologies to stay updated with the latest in the
                      field.
                    </p>
                    <p>I'm passionate about blending creativity and technology. I
                      enjoy creating digital art, designing web templates, and{" "}
                      <i>paper rings. </i>Along with my technical skills,
                      <i> I never go out of Style</i> when it comes to
                      leadership, teamwork, and a focused, studious approach to
                      everything I do. These qualities help me connect with
                      others, learn continuously, and contribute meaningfully to
                      any project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Skill/>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
