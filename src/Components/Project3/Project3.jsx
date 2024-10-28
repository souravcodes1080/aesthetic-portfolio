import React from "react";
import "./Project3.css";
import p30 from "/assets/p30.png";
import p31 from "/assets/p31.png";
import p32 from "/assets/p32.png";
import p33 from "/assets/p33.png";
import pipe from "/assets/pipe.png";
import bubbles from "/assets/bubbles.png";
import curve from "/assets/curve.png";
import camera from "/assets/camera.png";
import star from "/assets/star.png";
import cloud from "/assets/cloud.png";
function Project3() {
  return (
    <>
      <div className="project3-wrapper">
        <h2>04. image compressor</h2>
        <div className="project3-box">
          <img src={camera} alt="" className="camera" />
          <div className="container">
            <section>
              <div className="tomato-wrapper">
                <div className="tomato-img">
                  <img src={p30} alt="" />
                </div>{" "}
                <div className="tomato-desc">
                  <div className="bubbles project-bubbles">
                    <span>React JS</span>
                    <span>Browser Image Compression</span>
                  </div>
                  <p>
                    <span>Image Compressor</span> sit amet consectetur
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
              </div>
              <div className="tomato-pictures">
                <img src={pipe} className="pipe1" alt="pipe1" />
                <img src={pipe} className="pipe2" alt="pipe2" />
                <img src={p31} alt="desktop_view" width={"100%"} />
              </div>
              <div className="tomato-outro">
                <div className="tomato-outro-img">
                  <img src={star} alt="mobile view" className="star3" />
                  <img src={curve} alt="mobile view" className="curve1" />
                  <img src={p32} alt="mobile view" />
                  <img src={p33} alt="mobile view" />
                </div>
                <div className="tomato-outro-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, est labore rerum impedit quos cum libero
                  consequuntur aut iusto facere aperiam vitae eligendi numquam
                  iure, at possimus voluptas fugiat architecto saepe iste ipsum?
                  Aspernatur animi, vero pariatur repudiandae dolorem ullam,
                  aperiam maxime magnam, sequi porro quae natus doloremque odit
                  expedita?{" "}
                  <div className="live-wrapper">
                    <img src={bubbles} alt="" className="bubbles1" />
                    <img src={bubbles} alt="" className="bubbles2" />
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
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project3;
