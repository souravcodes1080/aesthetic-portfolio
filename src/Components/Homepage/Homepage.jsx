import React from "react";
import "./Homepage.css";
import portfolio from "/assets/portfolio.png";
import cloud from "/assets/cloud.png";
function Homepage() {
  

  return (
    <>
      <div className="container">
        <div className="header">
          <p>
            <span>s</span>
            <span>o</span>
            <span>u</span>
            <span>r</span>
            <span>a</span>
            <span>v</span>
            <span>.</span>
          </p>
          <p>web developer.</p>
        </div>
        <div className="hero">
          <p>
            welcome to <span>Sourav's</span>
          </p>
          <img src={portfolio} alt="portfolio_image" width={"100%"} />
          <img className="cloud" src={cloud} alt="portfolio_image" width={"100%"} />
          <img className="cloud2" src={cloud} alt="portfolio_image" width={"100%"} />
        </div>
        <div className="date">
          <p>{new Date().getFullYear()}</p>
          <div></div>
        </div>
        <div className="scroll">
          <a href="#welcome">scroll down to view</a>
        </div>
      </div>

      <div className="welcome-banner" id="welcome">
        <div class="marquee">
          <div class="marquee-content">
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
            <span>Welcome.</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
