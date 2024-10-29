import React from "react";
import "./About.css";
import bookmark from "../../../public/assets/bookmark.png";
import profile from "../../../public/assets/profile.png";
import flower from "/assets/flower.png";
import Skill from "../Skill/Skill";
function About() {
  return (
    <>
      <div className="about-wrapper">
        <h2>01. blank space</h2>
        <div className="about-box">
          <img src={flower} alt="" className="flower" />
          <div className="container">
            <img
              className="bookmark"
              src={bookmark}
              alt="bookmark_png"
              width={"100%"}
            />

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
                  <span>Indian</span>
                  <span>|</span>
                  <span>11th April, 2003</span>
                  <span>|</span>
                  <span>@_souravjustchill</span>
                </div>

                <div className="details">
                  <p>
                    <i>I bet you think about me. </i>I'm a final-year Computer Science student pursuing my
                    bachelor's degree with a passion for web development. I've
                    dedicated years to mastering front-end design and am now
                    focused on backend skills. Alongside development, I'm also
                    exploring newer web technologies to stay updated with the
                    latest in the field.
                  </p>
                  <p>
                    I'm passionate about blending creativity and technology. I
                    enjoy creating digital art, designing web templates, and{" "}
                    <i>paper rings. </i>Along with my technical skills, 
                    <i> I never go out of Style</i> when it comes to leadership,
                    teamwork, and a focused, studious approach to everything I
                    do. These qualities help me connect with others, learn
                    continuously, and contribute meaningfully to any project.
                  </p>
                </div>
              </div>
            </div>

            <Skill />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
