import React from "react";
import "./Project.css";
import arrow_diagonal from "/assets/diagonal.png";
import pink_flower from "/assets/pink_flower.png";
import cloud from "/assets/cloud.png";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
function Project() {
  return (
    <>
      <Cursor
        isGelly={true}
        animationDuration={0.7}
        gellyAnimationAmount={5}
        cursorSize={100}
      />
      <div data-cursor-color="#cd729654" className="project1-wrapper">
        <div className="project1-title">
          <h1>Projects</h1>
        </div>
        <div className="project1-main">
          <div className="project1-main-right">
            <div className="container">
              {/* <section>
                <div className="tomato-wrapper">
                  <div className="tomato-desc">
                    <p>
                      <span>" The Hungry Helper " </span>food ordering app is a
                      comprehensive food ordering platform designed to enhance
                      the ordering experience for users. The website enables
                      customers to browse through a diverse menu of food items
                      that are displayed only if they are within a 10 km radius
                      of the restaurant. Users can effortlessly update their
                      personal details, add their addresses, and review their
                      previous orders. With various payment options, including
                      card payments through Stripe and cash on delivery,
                      customers can complete their orders as effortlessly as
                      they would <i>shake it off</i>. To keep users informed,
                      the website sends order confirmation and tracking emails
                      at various stages of the ordering process.
                    </p>
                  </div>
                  <div className="tomato-img">
                    <img src={p0} alt="" />
                    <div className="bubbles project-bubbles">
                      <span>MERN</span>
                      <span>JWT</span>
                      <span>Stripe</span>
                      <span>Cloudinary</span>
                    </div>
                  </div>
                </div>
                <div className="tomato-pictures">
                  <img src={p1} alt="desktop_view" width={"100%"} />
                </div>
                <div className="tomato-outro">
                  <div className="tomato-outro-img">
                    <img src={p2} alt="mobile view" />
                    <img src={p3} alt="mobile view" />
                  </div>
                  <div className="tomato-outro-desc">
                    <ul>
                      <li>
                        Users can easily update their details and view previous
                        orders through a dedicated panel, enhancing their
                        experience.
                      </li>{" "}
                      <li>
                        Integrated Stripe allows for seamless card payments,
                        complemented by the convenient option for cash on
                        delivery. Added coupon code option.{" "}
                        <i>—You're the one I want.</i>
                      </li>
                      <li>
                        Users receive email updates at various stages of the
                        order process, fostering better engagement and
                        communication.{" "}
                      </li>
                      <li>
                        A separate admin panel enables easy updating of food
                        items, user monitoring, and efficient order management.
                      </li>
                      <li>
                        The website features over 800 lines of hand-coded CSS,
                        ensuring a fully responsive design that adapts
                        beautifully to both large and small devices.
                      </li>
                    </ul>
                    <div className="project-live-wrapper">
                      <img src={star} alt="" className="star1" />
                      <img src={star} alt="" className="star2" />
                      <a
                        href="https://tomato-food-delivery.onrender.com/"
                        target="_blank"
                      >
                        <div className="live-circle">view live</div>
                      </a>
                      <a
                        href="https://github.com/souravcodes1080/food-delivery"
                        target="_blank"
                      >
                        <div className="code-circle"> github</div>
                      </a>
                    </div>
                  </div>
                </div>
              </section> */}
              <div className="project-grid-wrapper">
                <div className="grid-wrapper">
                  <div className="grid1">
                    <p>The Hungry Helper</p>
                    <div className="grid-description">
                      <p>
                        It is a comprehensive food ordering platform designed to
                        enhance the ordering experience for users. The website
                        enables customers to browse through a diverse menu of
                        food items that are displayed only if they are within a
                        10 km radius of the restaurant. Users can effortlessly
                        update their personal details, add their addresses, and
                        review their previous orders. With various payment
                        options, including card payments through Stripe and cash
                        on delivery.
                      </p>
                    </div>
                  </div>
                  <a href="#">
                    <img className="arrow" src={arrow_diagonal} alt="" />
                  </a>
                </div>

                <div className="grid-wrapper">
                  <div className="grid2">
                    <p>Url Shortener</p>
                    <div className="grid-description">
                      <p>
                      A clean and efficient URL shortener website that allows users to quickly generate short links for long URLs. With a simple, user-friendly interface, it offers fast redirection and easy sharing. Ideal for social media, marketing, or personal use, it enhances accessibility and organization. No login required—just paste, shorten, and go. Built with scalability in mind, it's a lightweight tool perfect for modern web users.
                      </p>
                    </div>
                  </div>
                  <a href="#">
                    <img className="arrow" src={arrow_diagonal} alt="" />
                  </a>
                </div>
                <div className="grid-wrapper">
                  <div className="grid3">
                    <p>Movie Recomend System</p>
                    <div className="grid-description">
                      <p>
                      A smart movie recommendation system built using the TMDB 5000 dataset, designed to suggest films based on user preferences. By analyzing genres, keywords, cast, and crew similarities, it provides personalized recommendations tailored to what users love. The clean interface makes it easy to explore new titles, discover hidden gems, and revisit favorites. Whether you're a casual viewer or a film buff, this tool ensures you always have the perfect movie lined up for your next watch.
                      </p>
                    </div>
                  </div>
                  <a href="#">
                    <img className="arrow" src={arrow_diagonal} alt="" />
                  </a>
                </div>
                <div className="grid-wrapper">
                  <div className="grid4">
                    <p>Kerala Road Lines</p>
                    <div className="grid-description">
                      <p>
                      Welcome to Kerala Roadline — your trusted logistics partner for seamless and reliable cargo transportation. Our landing page highlights our commitment to safe, timely deliveries across Kerala and beyond. With real-time tracking, efficient routes, and a customer-first approach, we make logistics hassle-free. Whether it's bulk transport or last-mile delivery, Kerala Roadline ensures excellence on every journey. Get in touch easily and request quotes directly from the landing page.
                      </p>
                    </div>
                  </div>
                  <a href="#">
                    <img className="arrow" src={arrow_diagonal} alt="" />
                  </a>
                </div>
                <div className="grid-wrapper">
                  <div className="grid5">
                    <p>
                      Gemini<br></br> Clone
                    </p>
                    <div className="grid-description">
                      <p>
                      A modern Gemini clone built to replicate the sleek functionality of Google’s AI-powered chatbot. This project offers an intuitive chat interface with real-time responses, context-aware conversations, and a clean, responsive design. Developed to showcase conversational AI integration, it mimics Gemini’s tone, layout, and user experience. Ideal for showcasing frontend skills, API integration, and chatbot UI design, it serves as a demo of building intelligent assistants for web platforms.
                      </p>
                    </div>
                  </div>
                  <a href="#">
                    <img className="arrow" src={arrow_diagonal} alt="" />
                  </a>
                </div>
                <div className="grid-wrapper">
                  <div className="grid6">
                    <p>Chat App</p>
                    <div className="grid-description">
                      <p>
                      A real-time chat application inspired by Hike, offering seamless messaging with modern features. Users can register, log in, and chat instantly using a clean, intuitive interface. Built with React, Node.js, MongoDB, and Socket.io, the app supports live message updates, emoji integration, and random avatar assignment. Designed for speed and simplicity, it delivers a smooth chatting experience while demonstrating strong full-stack development skills and real-time communication implementation.
                      </p>
                    </div>
                  </div>
                  <a href="#">
                    <img className="arrow" src={arrow_diagonal} alt="" />
                  </a>
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
