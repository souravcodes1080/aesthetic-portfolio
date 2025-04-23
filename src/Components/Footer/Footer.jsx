import React from "react";
import "./Footer.css";

import portfolio from "/assets/portfolio.png";
import cloud from "/assets/cloud.png";
function Footer() {
  return (
    <>
      <div className="welcome-banner" id="welcome">
        <div className="marquee">
          <div className="marquee-content">
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
      {/* <div className="container"> */}
        <div className="footer-header ">
          <p className="footer-sub">
            <i>
              <span>we are</span> <span>getting back</span>{" "}
              <span>together</span>{" "}
            </i>
          </p>
          <div className="footer-contact">
            <p>
              phone: <a href="#">(+91) 86951 55200</a>{" "}
            </p>
            <p>|</p>
            <p>
              <a href="#">souravch2003@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="hero footer-hero">
          <span className="subtitle">
            <i>for scrolling all the way down here</i>
          </span>
          {/* <img src={portfolio} alt="portfolio_image" width={"100%"} /> */}
          <div className="thankyou-wrapper">
            <div className="thank">
              <span>t</span>
              <span>h</span>
              <span>a</span>
              <span>n</span>
              <span>k</span>
            </div>
            <div className="you">
              <span>y<p className="thank-you-subtitle">and by the way, am going out tonight ✨</p></span>
              <span>o</span>
              <span>u</span>
            </div>
            

          </div>
          <img
            className="cloud"
            src={cloud}
            alt="portfolio_image"
            width={"100%"}
          />
        </div>
        {/* <div className="homepage-date">
            <p>{new Date().getFullYear()}</p>
            <div></div>
          </div> */}
        <div className="scroll credit">
          
          <a href="#">created with 💖 by sourav</a>
        </div>
      {/* </div> */}
    </>
  );
}

export default Footer;
