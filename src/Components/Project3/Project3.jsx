import React from "react";
import "./Project3.css";
import p30 from "/assets/p30.png";
import p31 from "/assets/p31.png";
import p32 from "/assets/p32.png";
import p33 from "/assets/p33.png";
import pipe from "/assets/pipe.png";
import bubbles from "/assets/bubbles.png";
import curve from "/assets/curve.png";
import camera from "/assets/camera.png";
import star from "/assets/star.png";
import view from "/assets/view.png";
import cloud from "/assets/cloud.png";
function Project3() {
  return (
    <>
      <div className="project3-wrapper">
        <h2>04. picture to burn</h2>
        <div className="project3-box">
          <img src={camera} alt="" className="camera" />
          <div className="container">
            <section>
              <div className="tomato-wrapper">
                <div className="tomato-img">
                  <img src={p30} alt="" />
                </div>{" "}
                <div className="tomato-desc">
                  <div className="bubbles project-bubbles">
                    <span>React JS</span>
                    <span>Browser Image Compression</span>
                  </div>
                  <p>
                    <span>Image Compressor</span> is a React JS utility web app
                    is designed specifically for developers looking to optimize
                    their images and assets for building websites. This
                    application utilizes a browser image compression library for
                    client-side image compression. It supports multi-thread (web
                    worker) non-blocking compression options, allowing users to
                    continue working without interruption. By streamlining the
                    image compression process, this tool ensures that developers
                    can enhance website performance without sacrificing quality.
                    It's all about efficiency—making the web a little lighter,
                    just like how <i>Taylor's</i> melodies can lift your
                    spirits!
                  </p>
                </div>
              </div>
              <div className="tomato-pictures">
                <img src={pipe} className="pipe1" alt="pipe1" />
                <img src={pipe} className="pipe2" alt="pipe2" />
                <img src={p31} alt="desktop_view" width={"100%"} />
              </div>
              <div className="tomato-outro">
                <div className="tomato-outro-img">
                  <img src={star} alt="mobile view" className="star3" />
                  <img src={curve} alt="mobile view" className="curve1" />
                  <img src={p32} alt="mobile view" />
                  <img src={p33} alt="mobile view" />
                </div>
                <div className="tomato-outro-desc">
                  <ul>
                    <li>
                      React JS utility web app that can be used by developers to
                      compress their images/assets for building websites.
                    </li>
                    <li>
                      Used browser image compression library for compressing the
                      image on the client side.
                    </li>
                    <li>
                      Multi-thread (web worker) non-blocking compression is
                      supported through options.
                    </li>
                    <li>
                      Can compress images up to 85% without degrading the
                      quality.
                    </li>
                    <li>
                      Supports various image formats, including JPEG, PNG, and
                      GIF, ensuring versatility for users.
                    </li>
                    <li>
                      User-friendly interface allows for drag-and-drop
                      functionality, making it easy to upload images.
                    </li>
                    <li>
                      Offers customizable compression settings, enabling users
                      to adjust quality levels based on their specific needs.
                    </li>
                  </ul>

                  <div className="project-live-wrapper">
                    <img src={bubbles} alt="" className="bubbles1" />
                    <img src={bubbles} alt="" className="bubbles2" />
                    <a href="https://image-compressor-online.netlify.app/" target="_blank">
                      <div className="live-circle">view live</div>
                    </a>
                    <a href="https://github.com/souravcodes1080/img-compressor" target="_blank">
                      <div className="code-circle"> github</div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project3;
