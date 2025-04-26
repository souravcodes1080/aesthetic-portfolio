import React from "react";
import "./Project.css";
import star from "/assets/star.png";
import p1 from "/assets/p1.png";
import p21 from "/assets/p21.png";
import p1_share from "/assets/p1_share.png";
import p2_share from "/assets/p2_share.png";
import p3_share from "/assets/p3_share.png";
import p2_movie from "/assets/p2_movie.png";
import p4_share from "/assets/p4_share.png";
import o2 from "/assets/o2.png";
import o4 from "/assets/o4.png";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import { motion } from "framer-motion";
function Project() {
  return (
    <>
      <Cursor
        isGelly={true}
        animationDuration={0.7}
        gellyAnimationAmount={5}
        cursorSize={100}
      />
      <div data-cursor-color="#cd729631" className="project1-wrapper">
        <div className="project1-title">
          <h1>projects</h1>
        </div>
        <div className="project1-main">
          <div className="project1-main-right">
            <div className="container">
              <motion.img
                initial={{
                  position: "absolute",
                  top: "-90px",
                  left: "90px",
                }}
                whileInView={{top:"20px"}}
                transition={{ duration: 0.6, ease: "easeInOut" ,type: "spring" }}
                viewport={{ once: false, amount: 0.2 }}
                src={star}
                alt=""
                className="star"
              />
              <div className="project-1 pp1">
                <div className="project-description">
                  <h2>
                    <a
                      data-cursor-text=""
                      className="p1"
                      href="https://tomato-food-delivery.onrender.com/"
                      target="_blank"
                    >
                      the hungry helper <img src={p1_share} alt="" />
                    </a>
                  </h2>
                  <p>
                    It is a comprehensive food ordering platform designed to
                    enhance the ordering experience for users. The website
                    enables customers to browse through a diverse menu of food
                    items that are displayed only if they are within a 10 km
                    radius of the restaurant. Users can effortlessly update
                    their personal details, add their addresses, and review
                    their previous orders. With various payment options,
                    including card payments through Stripe and cash on delivery.
                  </p>
                  <motion.div
                    initial={{
                      opacity: 0,
                      marginTop: "20px",
                      display: "flex",
                      columnGap: "15px",
                    }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 1 }}
                    className="project-bubbles"
                  >
                    <p data-cursor-text="react js">react js</p>
                    <p data-cursor-text="express">express</p>
                    <p data-cursor-text="node js">node js</p>
                    <p data-cursor-text="mongo db">mongo db</p>
                  </motion.div>
                </div>
                <div className="project-image">
                  <img src={p1} alt="" />
                </div>
              </div>
              <div className="project-2">
                <div className="project-image">
                  <img src={p2_movie} alt="" />
                </div>
                <div className="project-description">
                  <h2>
                    <a
                      data-cursor-text=""
                      className="p2"
                      href="https://github.com/souravcodes1080/movie-recomendation-system"
                    >
                      movie recommender <img src={p2_share} alt="" />
                    </a>
                  </h2>
                  <p>
                    A smart movie recommendation system built using the TMDB
                    5000 dataset, designed to suggest films based on user
                    preferences. By analyzing genres, keywords, cast, and crew
                    similarities, it provides personalized recommendations
                    tailored to what users love. The clean interface makes it
                    easy to explore new titles, discover hidden gems, and
                    revisit favorites. Whether you're a casual viewer or a film
                    buff, this tool ensures you always have the perfect movie
                    lined up for your next watch.
                  </p>
                  <motion.div
                    initial={{
                      opacity: 0,
                      marginTop: "20px",
                      display: "flex",
                      columnGap: "15px",
                    }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 1 }}
                    className="project-bubbles"
                  >
                    <p data-cursor-text="python">python</p>
                    <p data-cursor-text="pandas">pandas</p>
                    <p data-cursor-text="numPy">numPy</p>
                    <p data-cursor-text="scikit-learn">scikit-learn</p>
                    <p data-cursor-text="tmdb">tmdb</p>
                  </motion.div>
                </div>
              </div>
              <div className="project-1">
                <div className="project-description">
                  <h2>
                    <a
                      data-cursor-text=""
                      className="p3"
                      href="https://srt-url-dev.vercel.app/"
                      target="_blank"
                    >
                      url shrotener <img src={p3_share} alt="" />
                    </a>
                  </h2>
                  <p>
                    A clean and efficient URL shortener website that allows
                    users to quickly generate short links for long URLs. With a
                    simple, user-friendly interface, it offers fast redirection
                    and easy sharing. Ideal for social media, marketing, or
                    personal use, it enhances accessibility and organization. No
                    login required—just paste, shorten, and go. Built with
                    scalability in mind, it's a lightweight tool perfect for
                    modern web users.
                  </p>
                  <motion.div
                    initial={{
                      opacity: 0,
                      marginTop: "20px",
                      display: "flex",
                      columnGap: "15px",
                    }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 1 }}
                    className="project-bubbles"
                  >
                  <p data-cursor-text="react js">react js</p>
                    <p data-cursor-text="express">express</p>
                    <p data-cursor-text="node js">node js</p>
                    <p data-cursor-text="mongo db">mongo db</p>
                  </motion.div>
                </div>
                <div className="project-image">
                  <img src={p21} alt="" />
                </div>
              </div>
              <div className="project-2">
                <div className="project-image">
                  <img src={o4} alt="" />
                </div>
                <div className="project-description">
                  <h2>
                    <a
                      data-cursor-text=""
                      className="p4"
                      href="https://keralaroadlines.com/"
                    >
                      kerala roadlines <img src={p4_share} alt="" />
                    </a>
                  </h2>
                  <p>
                    Welcome to Kerala Roadline — your trusted logistics partner
                    for seamless and reliable cargo transportation. Our landing
                    page highlights our commitment to safe, timely deliveries
                    across Kerala and beyond. With real-time tracking, efficient
                    routes, and a customer-first approach, we make logistics
                    hassle-free. Whether it's bulk transport or last-mile
                    delivery, Kerala Roadline ensures excellence on every
                    journey. Get in touch easily and request quotes directly
                    from the landing page.
                  </p>
                  <motion.div
                    initial={{
                      opacity: 0,
                      marginTop: "20px",
                      display: "flex",
                      columnGap: "15px",
                    }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 1 }}
                    className="project-bubbles"
                  >
                    <p data-cursor-text="html">html</p>
                    <p data-cursor-text="css">css</p>
                    <p data-cursor-text="java script">java script</p>
                    <p data-cursor-text="bootstrap">bootstrap</p>
                    <p data-cursor-text="php">php</p>
                  </motion.div>
                </div>
              </div>
              <div className="project-1">
                <div className="project-description">
                  <h2>
                    <a
                      data-cursor-text=""
                      className="p2"
                      href="https://hike-psi.vercel.app/auth/v1/671uy885/login"
                      target="_blank"
                    >
                      hike - chat app <img src={p2_share} alt="" />
                    </a>
                  </h2>
                  <p>
                    A real-time chat application inspired by Hike, offering
                    seamless messaging with modern features. Users can register,
                    log in, and chat instantly using a clean, intuitive
                    interface. Built with React, Node.js, MongoDB, and
                    Socket.io, the app supports live message updates, emoji
                    integration, and random avatar assignment. Designed for
                    speed and simplicity, it delivers a smooth chatting
                    experience while demonstrating strong full-stack development
                    skills and real-time communication implementation.
                  </p>
                  <motion.div
                    initial={{
                      opacity: 0,
                      marginTop: "20px",
                      display: "flex",
                      columnGap: "15px",
                    }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 1 }}
                    className="project-bubbles"
                  >
                    <p data-cursor-text="react js">react js</p>
                    <p data-cursor-text="express">express</p>
                    <p data-cursor-text="node js">node js</p>
                    <p data-cursor-text="mongo db">mongo db</p>
                  </motion.div>
                </div>
                <div className="project-image">
                  <img src={o2} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="project1-main-left"></div>
        </div>
      </div>
    </>
  );
}

export default Project;
