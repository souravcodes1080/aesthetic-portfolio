import React from "react";
import "./Project2.css";
import p20 from "/assets/p20.png";
import p21 from "/assets/p21.png";
import p22 from "/assets/p22.png";
import p23 from "/assets/p23.png";
import yellow_circle from "/assets/yellow_circle.png";
import zigzag from "/assets/yellow_zigzag.png";
import globe from "/assets/global.png";
import flower from "/assets/flower.png";
function Project2() {
  return (
    <>
      <div className="project2-wrapper">
        <h2>03. url shortner</h2>
        <div className="project2-box">
          <img src={flower} alt="" className="flower" />
          <img src={globe} alt="" className="globe" />
          <div className="container">
            <section>
              <div className="tomato-pictures">
                <img
                  src={zigzag}
                  className="zigzag0"
                  alt="yellow_circle"
                />
                <img
                  src={yellow_circle}
                  className="yellow_circle1"
                  alt="yellow_circle"
                />
                <img
                  src={yellow_circle}
                  className="yellow_circle2"
                  alt="yellow_circle"
                />
                <img src={p21} alt="desktop_view" width={"100%"} />
              </div>{" "}
              <div className="tomato-wrapper">
                <div className="tomato-img">
                  <img src={p20} alt="" />
                </div>{" "}
                <div className="tomato-desc">
                  <div className="bubbles project-bubbles">
                    <span>React JS</span>
                    <span>Node JS</span>
                    <span>Express</span>
                    <span>Mongo DB</span>
                  </div>
                  <p>
                    <span>URL Shortner</span> sit amet consectetur adipisicing
                    elit. Officia vero reiciendis voluptas ipsam veniam modi
                    repellat consequatur velit error temporibus impedit fugit,
                    debitis deleniti earum sint saepe aliquam mollitia expedita
                    inventore neque! Harum, molestias eum. Debitis et accusamus
                    eum quaerat earum pariatur consectetur dolorum vitae numquam
                    possimus! Rem illo amet blanditiis aliquam accusantium vitae
                    minus deleniti est quidem possimus, sed minima ad explicabo
                    cum cumque laborum ipsum, sapiente nemo quaerat quis
                    perferendis esse, corporis assumenda a. Autem suscipit eum
                    numquam.
                  </p>
                </div>
              </div>
              <div className="tomato-outro">
                <div className="tomato-outro-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, est labore rerum impedit quos cum libero
                  consequuntur aut iusto facere aperiam vitae eligendi numquam
                  iure, at possimus voluptas fugiat architecto saepe iste ipsum?
                  Aspernatur animi, vero pariatur repudiandae dolorem ullam,
                  aperiam maxime magnam, sequi porro quae natus doloremque odit
                  expedita?{" "}
                  <div className="live-wrapper">
                 
                    <img src={zigzag} alt="" className="star1" />
                    <img src={zigzag} alt="" className="star2" />
                    <p className="live-para">
                      Access the live version or the github repository here!
                    </p>
                    <div className="live-button">
                      <a href="">
                        <button className="live">View Live</button>
                      </a>
                      <a href="">
                        <button className="github">Github</button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tomato-outro-img">
                <img
                    src={yellow_circle}
                    className="yellow_circle3"
                    alt="yellow_circle"
                  />
                  <img src={p22} alt="mobile view" />
                  <img src={p23} alt="mobile view" />
                </div>
              </div>
            </section>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Project2;
