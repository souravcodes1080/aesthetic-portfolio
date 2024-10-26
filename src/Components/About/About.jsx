import React from "react";
import "./About.css";
import bookmark from "../../../public/assets/bookmark.png";
import profile from "../../../public/assets/profile.png";
import flower from "/assets/flower.png";
import Skill from "../Skill/Skill";
function About() {
  return (
    <>
      <div className="about-wrapper">
        <h2>01. introduction</h2>
        <div className="about-box">
          <img src={flower} alt="" className="flower" />
          <div className="container">
            <img
              className="bookmark"
              src={bookmark}
              alt="bookmark_png"
              width={"100%"}
            />

            <div className="about-me">
              <div className="profile">
                <img src={profile} alt="" />
              </div>
              <div className="description">
                <div className="name">
                  <p>
                    <i>hello, it's </i>
                  </p>
                  <p>SOURAV CHOWDHURY</p>
                </div>

                <div className="subtitle">
                  <span>Indian</span>
                  <span>|</span>
                  <span>11th April, 2003</span>
                  <span>|</span>
                  <span>@_souravjustchill</span>
                </div>

                <div className="details">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis quisquam saepe fuga voluptates illo quae? Eos
                    adipisci excepturi hic voluptatem dolores incidunt
                    repudiandae aspernatur eum harum quia rem accusamus
                    architecto aliquid, consequatur eveniet sapiente tenetur,
                    tempore reprehenderit rerum dolore! Accusamus!
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam aliquid ducimus nisi, aliquam possimus excepturi a.
                    Eius ullam itaque, sequi id asperiores vero laboriosam
                    accusamus, voluptates reiciendis minus laborum incidunt
                    veritatis nisi voluptate fugiat, neque sit ad iusto
                    repellendus quo perspiciatis nulla soluta! Tenetur eligendi
                    illo cum rem commodi dolorum?
                  </p>
                </div>
              </div>
            </div>
            
            <br /><br /><br />
            <br /><br /><br></br>
            <Skill/>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
