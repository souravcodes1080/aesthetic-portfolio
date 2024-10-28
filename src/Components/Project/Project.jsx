import React from "react";
import "./Project.css";
import p0 from "/assets/p0.png";
import p1 from "/assets/p1.png";
import p2 from "/assets/p2.png";
import p3 from "/assets/p3.png";
import star from "/assets/star.png";
import pink_flower from "/assets/pink_flower.png";
import cloud from "/assets/cloud.png";
function Project() {
  return (
    <>
      <div className="project-wrapper">
        <h2>02. ecommerce</h2>
        <div className="project-box">
          <img src={pink_flower} alt="" className="pink-flower" />
          <div className="container">
            <section>
              <div className="tomato-wrapper">
                <div className="tomato-desc">
                  <div className="bubbles project-bubbles">
                    <span>React JS</span>
                    <span>Node JS</span>
                    <span>Express</span>
                    <span>Mongo DB</span>
                  </div>
                  <p>
                    <span>Tomato Food Ordering App</span> sit amet consectetur
                    adipisicing elit. Officia vero reiciendis voluptas ipsam
                    veniam modi repellat consequatur velit error temporibus
                    impedit fugit, debitis deleniti earum sint saepe aliquam
                    mollitia expedita inventore neque! Harum, molestias eum.
                    Debitis et accusamus eum quaerat earum pariatur consectetur
                    dolorum vitae numquam possimus! Rem illo amet blanditiis
                    aliquam accusantium vitae minus deleniti est quidem
                    possimus, sed minima ad explicabo cum cumque laborum ipsum,
                    sapiente nemo quaerat quis perferendis esse, corporis
                    assumenda a. Autem suscipit eum numquam.
                  </p>
                </div>
                <div className="tomato-img">
                  <img src={p0} alt="" />
                </div>
              </div>
              <div className="tomato-pictures">
                <img src={p1} alt="desktop_view" width={"100%"} />
              </div>
              <div className="tomato-outro">
                <div className="tomato-outro-img">
                  <img src={p2} alt="mobile view"  />
                  <img src={p3} alt="mobile view"  />
                </div>
                <div className="tomato-outro-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, est labore rerum impedit quos cum libero
                  consequuntur aut iusto facere aperiam vitae eligendi numquam
                  iure, at possimus voluptas fugiat architecto saepe iste ipsum?
                  Aspernatur animi, vero pariatur repudiandae dolorem ullam,
                  aperiam maxime magnam, sequi porro quae natus doloremque odit
                  expedita?{" "}
                  <div className="live-wrapper" >
                    <img src={star} alt=""  className="star1"/>
                    <img src={star} alt=""  className="star2"/>
                    <p className="live-para">
                    Access the live version or the github repository here!
                  </p>
                  <div className="live-button">
                    <a href=""><button className="live">View Live</button></a>
                    <a href=""><button className="github">Github</button></a>
                  </div>
                  </div>
                  
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
