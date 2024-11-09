import React from "react";
import "./Project.css";
import p0 from "/assets/p0.png";
import p1 from "/assets/p1.png";
import p2 from "/assets/p2.png";
import p3 from "/assets/p3.png";
import star from "/assets/star.png";
import pink_flower from "/assets/pink_flower.png";
import cloud from "/assets/cloud.png";
function Project() {
  return (
    <>
      {/* <div className="project-wrapper">
        <h2>02. ordering with style</h2>
        <div className="project-box">
          <img src={pink_flower} alt="" className="pink-flower" />
          <div className="container">
            <section>
              <div className="tomato-wrapper">
                <div className="tomato-desc">
                  <div className="bubbles project-bubbles">
                    <span>MERN</span>
                    <span>JWT</span>
                    <span>Stripe</span>
                    <span>Cloudinary</span>
                  </div>
                  <p>
                    <span>Tomato Food Ordering App</span> is a comprehensive
                    food ordering platform designed to enhance the ordering
                    experience for users. The website enables customers to
                    browse through a diverse menu of food items that are
                    displayed only if they are within a 10 km radius of the
                    restaurant. Users can effortlessly update their personal
                    details, add their addresses, and review their previous
                    orders. With various payment options, including card
                    payments through Stripe and cash on delivery, customers can
                    complete their orders as effortlessly as they would{" "}
                    <i>shake it off</i>. To keep users informed, the website
                    sends order confirmation and tracking emails at various
                    stages of the ordering process.
                  </p>
                </div>
                <div className="tomato-img">
                  <img src={p0} alt="" />
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
                      Users receive email updates at various stages of the order
                      process, fostering better engagement and communication.{" "}
                    </li>
                    <li>
                      A separate admin panel enables easy updating of food
                      items, user monitoring, and efficient order management.
                    </li>
                    <li>
                      The website features over 800 lines of hand-coded CSS,
                      ensuring a fully responsive design that adapts beautifully
                      to both large and small devices.
                    </li>
                  </ul>
                  <div className="project-live-wrapper">
                    <img src={star} alt="" className="star1" />
                    <img src={star} alt="" className="star2" />
                    <a href="https://tomato-food-delivery.onrender.com/" target="_blank">
                      <div className="live-circle">view live</div>
                    </a>
                    <a href="https://github.com/souravcodes1080/food-delivery" target="_blank">
                      <div className="code-circle"> github</div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div> */}


<div className="project1-wrapper">
        <div className="project1-title">
          <h1>02. ecommerce</h1>
        </div>
        <div className="project1-main">
          <div className="project1-main-right"></div>
          <div className="project1-main-left">
            
            <div className="container">
              <div className="about-me">
                <div className="profile">
                </div>
                <div className="description">
                  <div className="name">
                    <p>
                      <i>it's me, hi</i>
                    </p>
                    <p>SOURAV CHOWDHURY</p>
                  </div>

                  <div className="subtitle">
                    <span>
                      Indian &nbsp;&nbsp; | &nbsp;&nbsp; 11th April, 2003
                      &nbsp;&nbsp; | &nbsp;&nbsp;@_souravjustchill
                    </span>
                  </div>

                  <div className="details">
                    <p>
                      <i>I bet you think about me. </i>I'm a final-year Computer
                      Science student pursuing my bachelor's degree with a
                      passion for web development. I've dedicated years to
                      mastering front-end design and am now focused on backend
                      skills. Alongside development, I'm also exploring newer
                      web technologies to stay updated with the latest in the
                      field.
                    </p>
                    <p>
                      I'm passionate about blending creativity and technology. I
                      enjoy creating digital art, designing web templates, and{" "}
                      <i>paper rings. </i>Along with my technical skills,
                      <i> I never go out of Style</i> when it comes to
                      leadership, teamwork, and a focused, studious approach to
                      everything I do. These qualities help me connect with
                      others, learn continuously, and contribute meaningfully to
                      any project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
