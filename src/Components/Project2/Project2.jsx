import React from "react";
import "./Project2.css";
import p20 from "/assets/p20.png";
import p21 from "/assets/p21.png";
import p22 from "/assets/p22.png";
import p23 from "/assets/p23.png";
import yellow_circle from "/assets/yellow_circle.png";
import zigzag from "/assets/yellow_zigzag.png";
import globe from "/assets/global.png";
import flower from "/assets/flower.png";
function Project2() {
  return (
    <>
      <div className="project2-wrapper">
        <h2>03. short n' sweet</h2>
        <div className="project2-box">
          <img src={flower} alt="" className="flower" />
          <img src={globe} alt="" className="globe" />
          <div className="container">
            <section>
              <div className="tomato-pictures">
                <img src={zigzag} className="zigzag0" alt="yellow_circle" />
                <img
                  src={yellow_circle}
                  className="yellow_circle1"
                  alt="yellow_circle"
                />
                <img
                  src={yellow_circle}
                  className="yellow_circle2"
                  alt="yellow_circle"
                />
                <img src={p21} alt="desktop_view" width={"100%"} />
              </div>{" "}
              <div className="tomato-wrapper">
                <div className="tomato-img">
                  <img src={p20} alt="" />
                </div>{" "}
                <div className="tomato-desc">
                  <div className="bubbles project-bubbles">
                    <span>React JS</span>
                    <span>Express</span>
                    <span>Mongo DB</span>
                    <span>Nanoid</span>
                  </div>
                  <p>
                    <span>URL Shortner,</span> in the digital age, where every
                    character counts, this full-stack application empowers users
                    to generate their own short URLs for long links. With just a
                    few clicks, this intuitive tool simplifies the sharing
                    experience by transforming lengthy URLs into concise,
                    manageable links that are perfect for social media posts,
                    emails, or anywhere you want to share your favorite content.
                    Its user-friendly interface ensures that anyone, regardless
                    of technical skill, can navigate the process effortlessly.
                  </p>
                </div>
              </div>
              <div className="tomato-outro">
                <div className="tomato-outro-desc">
                  <ul>
                    <li>
                      A full stack application where users can generate their
                      own short URLs for long links.
                    </li>
                    <li>
                      Hand-coded custom APIs for generating short URLs and
                      mapping them to long URLs.
                    </li>
                    <li>
                      Used Nanoid to generate unique random codes to serve as
                      the short URLs, ensuring each link is unique.
                    </li>
                    <li>
                      Implemented a Copy to Clipboard feature for easy access to
                      short URLs.
                    </li>
                    <li>
                      Utilized local storage to save previously shortened links
                      in the browser for user convenience, making it easy to
                      revisit favorite links.
                    </li>
                  </ul>

                  <div className="project-live-wrapper">
                    <img src={zigzag} alt="" className="star1" />
                    <img src={zigzag} alt="" className="star2" />
                    <a href="https://srt-url-dev.vercel.app/" target="_blank">
                      <div className="live-circle">view live</div>
                    </a>
                    <a href="https://github.com/souravcodes1080/url-shortner" target="_blank">
                      <div className="code-circle"> github</div>
                    </a>
                  </div>
                </div>
                <div className="tomato-outro-img">
                  <img
                    src={yellow_circle}
                    className="yellow_circle3"
                    alt="yellow_circle"
                  />
                  <img src={p22} alt="mobile view" />
                  <img src={p23} alt="mobile view" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project2;
