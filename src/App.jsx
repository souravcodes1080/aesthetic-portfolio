import React from "react";
import { motion } from "framer-motion";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Project2 from "./Components/Project2/Project2";
import Project3 from "./Components/Project3/Project3";
import Other from "./Components/Other/Other";
import Footer from "./Components/Footer/Footer";
import "./App.css";
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      ></motion.div>
      <Homepage />

      <About />
      <Project />
      {/* <Project2 /> */}
      {/* <Project3 /> */}
      {/* <Other /> */}
      <Footer />
    </>
  );
}

export default App;
