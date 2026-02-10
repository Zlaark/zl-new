"use client";

import { motion } from "framer-motion";
import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-[#fffbf7]">
      {/* Warm Gradient Orbs */}
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
        className="absolute -top-1/4 -left-1/4 w-[80vw] h-[80vw] rounded-full bg-gradient-to-r from-orange-200/40 to-amber-200/40 blur-3xl opacity-60"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          translateY: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-0 w-[60vw] h-[60vw] rounded-full bg-gradient-to-l from-orange-100/50 to-yellow-100/50 blur-3xl opacity-60"
      />

       <motion.div
        animate={{
            scale: [1, 1.4, 1],
            rotate: [0, -45, 0]
        }}
        transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
        }}
        className="absolute -bottom-1/4 left-1/3 w-[70vw] h-[70vw] rounded-full bg-gradient-to-t from-red-100/30 to-orange-100/30 blur-3xl opacity-50"
       />
       
       {/* Noise Overlay */}
       <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>
    </div>
  );
};

export default AnimatedBackground;
