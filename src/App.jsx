import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Project2 from "./Components/Project2/Project2";
import Project3 from "./Components/Project3/Project3";
import cat from "/assets/cat2.png";
import Footer from "./Components/Footer/Footer";
import "react-creative-cursor/dist/styles.css";
import "./App.css";
import { Cursor } from "react-creative-cursor";
function App() {
  const catWrapperRef = useRef(null);
  const isInView = useInView(catWrapperRef, { once: false, amount: 0.2 });
  return (
    <>
      <section className="app">
        <Homepage />

        <About data-cursor-color="#00934942" />
        <Project />
        <Footer />
        <div
          ref={catWrapperRef}
          className="cat-wrapper"
          data-cursor-color="#e3a81d33"
          data-cursor-text="resume"
        >
          <a href="/assets/Resume.pdf" download>
            <motion.img
              initial={{ bottom: "-600px" }}
              animate={isInView ? { bottom: "0px" } : {}}
              transition={{ duration: 0.8, type: "spring" }}
              src={cat}
              alt="cute-cat"
              className="cat"
              width={"100%"}
            />
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
