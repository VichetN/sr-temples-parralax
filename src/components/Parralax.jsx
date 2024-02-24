"use client";

import Image from "next/image";
import Picture1 from "../../public/images/1.jpg";
import Picture2 from "../../public/images/2.jpg";
import Picture3 from "../../public/images/3.jpg";
import Picture4 from "../../public/images/4.jpg";
import Picture5 from "../../public/images/5.jpg";
import Picture6 from "../../public/images/6.jpg";
import Picture7 from "../../public/images/7.jpeg";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";

function Parralax() {
  const scrollContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainer,
    offset: ["start start", "end end"],
  });

  const scrollY = useSpring(scrollYProgress, {damping: 20})

  const scale4 = useTransform(scrollY, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollY, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollY, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollY, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollY, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollY, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
      style: {
        top: 0,
        left: 0,
        width: "25vw",
        height: "25vh",
      },
    },
    {
      src: Picture2,
      scale: scale5,
      style: {
        top: "-30vh",
        left: "5vw",
        width: "35vw",
        height: "30vh",
      },
    },
    {
      src: Picture3,
      scale: scale6,
      style: {
        top: "-10vh",
        left: "-25vw",
        width: "20vw",
        height: "45vh",
      },
    },
    {
      src: Picture4,
      scale: scale5,
      style: {
        left: "27.5vw",
        width: "25vw",
        height: "25vh",
      },
    },
    {
      src: Picture5,
      scale: scale6,
      style: {
        top: "27.5vh",
        left: "5vw",
        width: "20vw",
        height: "25vh",
      },
    },
    {
      src: Picture6,
      scale: scale8,
      style: {
        top: "27.5vh",
        left: "-22.5vw",
        width: "30vw",
        height: "25vh",
      },
    },
    {
      src: Picture7,
      scale: scale9,
      style: {
        top: "22.5vh",
        left: "25vw",
        width: "15vw",
        height: "15vh",
      },
    },
  ];

  return (
    <div ref={scrollContainer} className="w-full relative h-[300vh]">
      <div className="sticky top-0 left-0 h-screen bg-pink-600 overflow-hidden">
        {pictures.map(({ src, scale, style }, index) => {
          return (
            <motion.div
              style={{ scale }}
              key={index}
              className="w-full h-full absolute top-0 left-0 flex items-center justify-center"
            >
              <div style={{ ...style }} className="relative">
                <Image
                  className="object-cover"
                  src={src}
                  fill
                  alt="image"
                  placeholder="blur"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Parralax;
