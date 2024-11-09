import React from "react";
import { motion } from "framer-motion";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Project2 from "./Components/Project2/Project2";
import Project3 from "./Components/Project3/Project3";
import Other from "./Components/Other/Other";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Homepage />
      </motion.div>

      <About/>
      <Project />
      {/* <Project2 />
      <Project3 />
      <Other />
      <Footer /> */}
    </>
  );
}

export default App;
