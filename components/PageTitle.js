"use client";

import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      // delay: 0.3,
      staggerChildren: 0.5,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 70,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const PageTitle = ({ title }) => {
  return (
    <motion.h1
      variants={quote}
      initial='initial'
      whileInView='animate'
      className='text-4xl text-center text-blue-950 font-light uppercase'>
      {title.split(" ").map((word, index) => (
        <motion.span
          key={index}
          className='inline-block'
          variants={singleWord}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default PageTitle;
