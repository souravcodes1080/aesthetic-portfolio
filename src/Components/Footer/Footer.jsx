import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import portfolio from "/assets/portfolio.png";
import cloud from "/assets/cloud.png";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
function Footer() {
  return (
    <div data-cursor-color="#e3a81d33">
      <Cursor
        isGelly={true}
        animationDuration={0.7}
        gellyAnimationAmount={5}
        cursorSize={100}
      />
      <div   className="welcome-banner" id="welcome">
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
            <span>we are</span> <span>getting back</span> <span>together</span>{" "}
          </i>
        </p>
        <div className="footer-contact">
          <p >
            phone: <a data-cursor-text="" href="tel:+918695155200">(+91) 86951 55200</a>{" "}
          </p>
          <p>|</p>
          <p>
            <a data-cursor-text="" href="mailto:souravch2003@gmail.com">souravch2003@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="hero footer-hero">
        {/* <img src={portfolio} alt="portfolio_image" width={"100%"} /> */}
        <div className="thankyou-wrapper">
          <div className="thank">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0, duration: 0.1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 1 }}
            >
              t
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 1 }}
            >
              h
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 1 }}
            >
              a
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 1 }}
            >
              n
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 1 }}
            >
              k
            </motion.span>
          </div>
          <div className="you">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 1 }}
            >
              y
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "max-content" }}
                transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.7 }}
                className="thank-you-subtitle"
              >
                <p>and by the way, am going out tonight ✨</p>
              </motion.div>
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 1 }}
            >
              o
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.1, ease: "easeInOut" }}
              viewport={{ once: true, amount: 1 }}
            >
              u
            </motion.span>
          </div>
        </div>
      </div>
      {/* <div className="homepage-date">
            <p>{new Date().getFullYear()}</p>
            <div></div>
          </div> */}
      <div className="scroll credit">
        <a href="#">created with 💖 by sourav</a>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Footer;
