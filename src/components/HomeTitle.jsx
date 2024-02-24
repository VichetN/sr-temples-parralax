"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function HomeTitle() {
  const scrollContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainer,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 1], [1, 300]);

  return (
    <motion.div ref={scrollContainer} className="py-[25vh]">
      <motion.h1
        style={{ opacity, y }}
        animate={{
          textShadow: [
            "0 4px 8px #6366f1",
            "0 10px 15px #6366f1",
            "0 4px 8px #6366f1",
          ],
        }}
        className=" text-pink-500 text-6xl md:text-7xl lg:text-9xl text-center  font-bold"
        // style={{
        //   textShadow: ,
        // }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        SIEM REAP TEMPLES
      </motion.h1>
    </motion.div>
  );
}

export default HomeTitle;
