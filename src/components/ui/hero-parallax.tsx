"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";



export const HeroParallax = ({ images }: {
  images: string[];
}) => {
  const firstRow = images.slice(0, 4);
  const secondRow = images.slice(4, 8);
  const thirdRow = images.slice(9, 13);
  const fourthRow = images.slice(13, 17);
  const fifthRow = images.slice(18, 22);
  const sixthRow = images.slice(22, 26);
  const seventhRow = images.slice(26, 30);
  const eighthRow = images.slice(30, 34);
  const ninthRow = images.slice(34, 38);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] mt-130 md:-mt-50"
    >
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white pb-12">Sample Work</h1>

        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-10 mb-4 md:mb-20 md:gap-10">
          {firstRow.map((image: string) => (
            <ImageCard
              image={image}
              translate={translateX}
              key={image}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-4 md:mb-20 space-x-4 md:space-x-10 md:gap-10">
          {secondRow.map((image) => (
            <ImageCard
              image={image}
              translate={translateXReverse}
              key={image}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4  md:space-x-10 md:gap-10">
          {thirdRow.map((image) => (
            <ImageCard
              image={image}
              translate={translateX}
              key={image}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row my-4 md:my-20 space-x-4  md:space-x-10 md:gap-10">
          {fourthRow.map((image) => (
            <ImageCard
              image={image}
              translate={translateXReverse}
              key={image}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse  space-x-4 md:space-x-10 md:gap-10">
          {fifthRow.map((image) => (
            <ImageCard
              image={image}
              translate={translateX}
              key={image}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row my-4 md:my-20  space-x-4 md:space-x-10 md:gap-10 ">
          {sixthRow.map((image) => (
            <ImageCard
              image={image}
              translate={translateXReverse}
              key={image}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse  space-x-4 md:space-x-10 md:gap-10">
          {seventhRow.map((image) => (
            <ImageCard
              image={image}
              translate={translateX}
              key={image}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row my-4 md:my-20 space-x-4 md:space-x-10 md:gap-10 ">
          {eighthRow.map((image) => (
            <ImageCard
              image={image}
              translate={translateXReverse}
              key={image}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse  space-x-4 md:space-x-10 md:gap-10">
          {ninthRow.map((image) => (
            <ImageCard
              image={image}
              translate={translateX}
              key={image}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ImageCard = ({ image, translate }: {
  image: string;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={image}
      className="group/product h-36 md:h-96 w-[12rem] md:w-[30rem] relative shrink-0"
    >
      <a
        href={image}
        target="_blank"
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={image}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={image}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>

    </motion.div>
  );
};
