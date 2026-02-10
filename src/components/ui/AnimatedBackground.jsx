"use client";

import { motion } from "framer-motion";
import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-black">
      {/* Dynamic Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-1/2 -left-1/2 w-[100vw] h-[100vw] rounded-full bg-gradient-to-r from-purple-900/40 to-blue-900/40 blur-3xl opacity-30"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          translateY: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-0 w-[50vw] h-[50vw] rounded-full bg-gradient-to-l from-indigo-900/30 to-fuchsia-900/30 blur-3xl opacity-20"
      />

       <motion.div
        animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0]
        }}
        transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
        }}
        className="absolute bottom-0 left-1/4 w-[60vw] h-[60vw] rounded-full bg-gradient-to-t from-blue-800/20 to-teal-800/20 blur-3xl opacity-20"
       />
       
       {/* Subtle grid or texture overlay could go here */}
       <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
    </div>
  );
};

export default AnimatedBackground;
