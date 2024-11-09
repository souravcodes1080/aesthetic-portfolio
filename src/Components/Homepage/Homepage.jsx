import React from "react";
import "./Homepage.css";
import portfolio from "/assets/portfolio.png";
import cloud from "/assets/cloud.png";
import down from "/assets/down.png";
function Homepage() {
  return (
    <>
      <div className="container homepage">
        <header>
          <p className="brand">sourav.</p>
          <p className="title">web developer.</p>
        </header>

        <main>
          <img src={cloud} alt="" className="cloud" />
          <img src={cloud} alt="" className="cloud2" />

          <div className="hero-image">
            <p className="welcome">
              welcome to <span>Sourav's</span>
            </p>
            <img src={portfolio} alt="" className="portfolio" />
          </div>

          <div className="homepage-date">
          <p>{new Date().getFullYear()}</p>
          <div></div>
        </div>
        <div className="scroll">
          <a href="#welcome">
            scroll down to view 
          </a><img className="down-arrow" src={down} alt="" />
        </div>
        </main>
      </div>

      <div className="welcome-banner" id="welcome">
        <div class="marquee">
          <div class="marquee-content">
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
            <span>WELCOME.</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
