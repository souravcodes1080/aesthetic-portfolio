import React from "react";
import { motion } from "framer-motion";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About/About";

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
    </>
  );
}

export default App;
