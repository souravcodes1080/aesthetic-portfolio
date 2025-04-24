import React from "react";
import { motion } from "framer-motion";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Project2 from "./Components/Project2/Project2";
import Project3 from "./Components/Project3/Project3";
import Other from "./Components/Other/Other";
import Footer from "./Components/Footer/Footer";
import "react-creative-cursor/dist/styles.css";
import "./App.css";
import { Cursor } from "react-creative-cursor";
function App() {
  return (
    <>
      {/* <motion.div
        initial={{ width: 5000, height: 5000}}
        animate={{ width: 0, height: 0, borderRadius:'100%' }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 1 }}
        className="curtain"
      ></motion.div> */}
<Cursor
            isGelly={true}
            animationDuration={0.7}
            gellyAnimationAmount={5}
            cursorSize={100}
            cursorInnerColor="#00934942"
          />
      <Homepage />

      <About data-cursor-color="#00934942" />
      <Project />
      {/* <Project2 /> */}
      {/* <Project3 /> */}
      {/* <Other /> */}
      <Footer />
    </>
  );
}

export default App;
