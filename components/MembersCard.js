"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IoMdContact } from "react-icons/io";

const animateAvatar = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const textAnimation = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1.5 },
  },
};

const MembersCard = ({ id, username, position, biz }) => {
  const router = useRouter();

  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.8 }}
      transition={{ staggerChildren: 0.5 }}
      onClick={() => router.push(`/members/${id}`)}
      className='cursor-pointer bg-gray-100 transform transition duration-500 hover:scale-110 hover:bg-gray-100 shadow-md rounded-lg py-4 px-2'>
      <div className=' flex items-center space-x-2'>
        <motion.div variants={animateAvatar} className='max-w-[20%'>
          <IoMdContact size={60} className='text-blue-950' />
        </motion.div>
        <motion.div className='max-w-[80%]'>
          <motion.h1
            variants={textAnimation}
            className='font-medium text-xl truncate capitalize text-blue-900'>
            {username}
          </motion.h1>
          <motion.div variants={textAnimation}>
            <p className='font-ligh text-blue-950'>{position}</p>
            <p variants={textAnimation} className='text-sm font-light'>
              {biz}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MembersCard;
