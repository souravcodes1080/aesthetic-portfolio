import React from "react";
import "./Homepage.css";
import portfolio from "/assets/portfolio.png";
import cloud from "/assets/cloud.png";
import down from "/assets/down.png";

import { motion } from "framer-motion";

function Homepage() {
  return (
    <>
      <div className="container homepage">
        <header>
          <p className="brand">sourav.</p>
          <p className="title">web developer.</p>
        </header>

        <main>
          <motion.img
            initial={{ right:400, top: 0 }}
            whileInView={{ right: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 1}}
            src={cloud}
            alt=""
            className="cloud"
          />
          <motion.img
          initial={{ left:400, top: 180 }}
          whileInView={{ left: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 1}}
          src={cloud} alt="" className="cloud2" />

          <div className="hero-image">
            <p className="welcome">
              welcome to <span>Sourav's</span>
            </p>
            <motion.img 
            initial={{ height:"80%" }}
            whileInView={{ height:"100%" }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 1}}
            
            src={portfolio} alt="" className="portfolio" />
          </div>

          <div className="homepage-date">
            <p>{new Date().getFullYear()}</p>
            <div></div>
          </div>
          <div className="scroll">
            <a href="#welcome">scroll down to view</a>
            <img className="down-arrow" src={down} alt="" />
          </div>
        </main>
      </div>

      <div className="welcome-banner" id="welcome">
        <div className="marquee">
          <div className="marquee-content">
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
