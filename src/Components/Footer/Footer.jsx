import React from "react";
import "./Footer.css";

import portfolio from "/assets/portfolio.png";
import cloud from "/assets/cloud.png";
function Footer() {
  return (
    <>
      <div className="container">
        <div className="footer-header header">
          <p className="footer-sub">
            <i>
              <span>let's</span> <span>create</span> <span>together</span>{" "}
            </i>
          </p>
          <div className="footer-contact">
            <p>phone: (+91) 86951 55200</p>
            <p>|</p>
            <p>souravch2003@gmail.com</p>
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
                <span>y</span>
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
        <div className="date">
          <p>{new Date().getFullYear()}</p>
          <div></div>
        </div>
        <div className="scroll credit">
          <a href="#welcome">Made with 💖 by sourav</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
