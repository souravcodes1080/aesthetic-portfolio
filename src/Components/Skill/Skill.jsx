import React from "react";
import "./Skill.css";
import colud from "/assets/cloud.png";
import call from "/assets/call.png";
import mail from "/assets/mail.png";
import github from "/assets/github.png";
import linkedin from "/assets/linkedin.png";
import html from "/assets/html.png";
import css from "/assets/css.png";
import js from "/assets/js.png";
import react from "/assets/react.png";
import java from "/assets/java.png";
import vs from "/assets/vs.png";
import sql from "/assets/sql.png";
import linux from "/assets/linux.png";
import { easeInOut, motion } from "framer-motion";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
function Skill() {
  return (
    <>
      
      <div  className="skills-section">
        <div className="row1">
          <div className="col1">
            <p  className="title skills">Skills</p>
            <div  className="bubbles">
              <div>
                <motion.img
                  initial={{ width: 0, height: 0, borderRadius: 100 }}
                  whileInView={{ width: 70, height: 70, borderRadius: 12 }}
                  transition={{ duration: 0.2, ease:easeInOut }}
                  viewport={{ once: true, amount: 1 }}
                  src={html}
                  
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  initial={{ width: 0, height: 0, borderRadius: 100 }}
                  whileInView={{ width: 70, height: 70, borderRadius: 12 }}
                  transition={{ duration: 0.2, delay: 0.2, ease:easeInOut }}
                  viewport={{ once: true, amount: 1 }}
                  src={css}
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  initial={{ width: 0, height: 0, borderRadius: 100 }}
                  whileInView={{ width: 70, height: 70, borderRadius: 12 }}
                  transition={{ duration: 0.2, delay: 0.4, ease:easeInOut }}
                  viewport={{ once: true, amount: 1 }}
                  src={js}
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  initial={{ width: 0, height: 0, borderRadius: 100 }}
                  whileInView={{ width: 70, height: 70, borderRadius: 12 }}
                  transition={{ duration: 0.2, delay: 0.6 , ease:easeInOut}}
                  viewport={{ once: true, amount: 1 }}
                  src={react}
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  initial={{ width: 0, height: 0, borderRadius: 100 }}
                  whileInView={{ width: 70, height: 70, borderRadius: 12 }}
                  transition={{ duration: 0.2, delay: 0.8 , ease:easeInOut}}
                  viewport={{ once: true, amount: 1 }}
                  src={java}
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  initial={{ width: 0, height: 0, borderRadius: 100 }}
                  whileInView={{ width: 70, height: 70, borderRadius: 12 }}
                  transition={{ duration: 0.2, delay: 1, ease:easeInOut }}
                  viewport={{ once: true, amount: 1 }}
                  src={sql}
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  initial={{ width: 0, height: 0, borderRadius: 100 }}
                  whileInView={{ width: 70, height: 70, borderRadius: 12 }}
                  transition={{ duration: 0.2, delay: 1.2, ease:easeInOut }}
                  viewport={{ once: true, amount: 1 }}
                  src={vs}
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  initial={{ width: 0, height: 0, borderRadius: 100 }}
                  whileInView={{ width: 70, height: 70, borderRadius: 12 }}
                  transition={{ duration: 0.2, delay: 1.4, ease:easeInOut }}
                  viewport={{ once: true, amount: 1 }}
                  src={linux}
                  alt=""
                  width={"70px"}
                />
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 1, ease:easeInOut }}
            viewport={{ once: true, amount: 1 }}
            className="col2"
          >
            <p className="title experience">Experience</p>
            <div className="school">
              <p className="year">2023</p>
              <div>
                <p className="experience-heading">Web Developer Intern</p>
                <p>Groveus Informatics Pvt. Ltd.</p>
                <p>Siliguri</p>
              </div>
            </div>
            <div className="school">
              <p className="year">2024</p>
              <div>
                <p className="experience-heading">Web Developer Intern</p>
                <p>Wow Gateways Siliguri</p>
                <p>Siliguri</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="row2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0, ease:easeInOut }}
            viewport={{ once: true, amount: 1 }}
            className="col1"
          >
            <p className="title education">Education</p>
            <div className="school">
              <p className="year">2018-2019</p>
              <div>
                <p>Secondary</p>
                <p>Techno India Group Public School</p>
                <p>93.2%</p>
              </div>
            </div>
            <div className="school">
              <p className="year">2020-2021</p>
              <div>
                <p>Higher Secondary</p>
                <p>Techno India Group Public School</p>
                <p>92.3%</p>
              </div>
            </div>
            <div className="school">
              <p className="year">2021-2025</p>
              <div>
                <p>BTech in Computer Science</p>
                <p>Siliguri Institute of Technoloy</p>
                <p>8.85 CGPA</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.4, ease:easeInOut }}
            viewport={{ once: true, amount: 1 }}
            className="col2"
          >
            <p className="title strengths">Achievements</p>
            <div className="school">
              <p className="year">2023</p>
              <div>
                <p className="achievements-heading">Smart India Hackathon</p>
                <p>Grand Finalist</p>
                <p>Nagpur</p>
              </div>
            </div>
            <div className="school">
              <p className="year">2024</p>
              <div>
                <p className="achievements-heading">Hack 4 Bengal</p>
                <p>Participant</p>
                <p>Kolkata</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="row3">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0, ease:easeInOut }}
            viewport={{ once: true, amount: 1 }}
            className="col1"
          >
            <p className="title contact">Contact</p>
            <div className="links">
              <div>
                <img src={call} alt="" width={"25px"} />
                <a href="tel:+918695155200">(+91) 86951 55200</a>
              </div>
              <div>
                <img src={mail} alt="" width={"25px"} />
                <a href="mailto:souravch2003@gmail.com">
                  souravch2003@gmail.com
                </a>
              </div>
              <div>
                <img src={github} alt="" width={"25px"} />
                <a href="https://github.com/souravcodes1080">
                  https://github.com/souravcodes1080
                </a>
              </div>
              <div>
                <img src={linkedin} alt="" width={"25px"} />
                <a href="https://in.linkedin.com/in/sourav-chowdhury-892ba3229">
                  https://in.linkedin.com/in/sourav-chowdhury-892ba3229
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.4, ease:easeInOut }}
            viewport={{ once: true, amount: 1 }}
            className="col2 interest"
          >
            <p className="title interests">Interests</p>
            <div className="bubbles">
              <p data-cursor-text="swiftie">swifte</p>
              <p data-cursor-text="music">music</p>
              <p data-cursor-text="travelling">travelling</p>
              <p data-cursor-text="exploring">exploring</p>
              <p data-cursor-text="painting">painting</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Skill;
