import React from "react";
import "./Other.css";
import o1 from "/assets/o1.png";
import o2 from "/assets/o2.png";
import o3 from "/assets/o3.png";
import o4 from "/assets/o4.png";
import o5 from "/assets/o5.png";
import yellow_circle from "/assets/yellow_circle.png";
import curve from "/assets/curve.png";
import zigzag from "/assets/yellow_zigzag.png";
function Other() {
  return (
    <>
      <div className="other-wrapper">
        <h2>05. from the vault</h2>
        <div className="other-box">
          <div className="container">
            <div className="other-works">
              <img src={yellow_circle} alt="" className="yellow_circle4" />
              <img src={curve} alt="" className="curve2" />
              <img src={zigzag} alt="" className="zigzag4" />
              <div className="other-work">
                <div className="other-work-desc">
                  <div className="other-title">
                    <p>Other Projects</p>
                  </div>
                    <p className="other-work-desc-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, nisi architecto? Minima impedit debitis eos, assumenda libero aut iure molestias porro eaque sequi repellat iste quam numquam nam atque quis, cum veritatis possimus ipsa quas? Itaque in excepturi, rerum quaerat, perspiciatis incidunt quidem, repellendus iure consectetur ipsum ratione minima eveniet.</p>
                </div>
              </div>
              <div className="other-work">
                <img src={o1} alt="" width={"100%"} />
                <div className="project-links">
                  <a href="">
                    <button className="blue">View Live</button>
                  </a>
                  <a href="">
                    <button className="yellow">Github</button>
                  </a>
                </div>
              </div>
              <div className="other-work">
                <img src={o2} alt="" width={"100%"} />
                <div className="project-links">
                  <a href="">
                    <button className="red">View Live</button>
                  </a>
                  <a href="">
                    <button className="blue">Github</button>
                  </a>
                </div>
              </div>
              <div className="other-work">
                <img src={o3} alt="" width={"100%"} />
                <div className="project-links">
                  <a href="">
                    <button className="red">View Live</button>
                  </a>
                  <a href="">
                    <button className="yellow">Github</button>
                  </a>
                </div>
              </div>
              <div className="other-work">
                <img src={o4} alt="" width={"100%"} />
                <div className="project-links">
                  <a href="">
                    <button className="yellow">View Live</button>
                  </a>
                  <a href="">
                    <button className="red">Github</button>
                  </a>
                </div>
              </div>
              <div className="other-work">
                <img src={o5} alt="" width={"100%"} />
                <div className="project-links">
                  <a href="">
                    <button className="blue">View Live</button>
                  </a>
                  <a href="">
                    <button className="yellow">Github</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="welcome-banner" id="welcome">
        <div class="marquee">
          <div class="marquee-content">
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
            <span>THE END.</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Other;
