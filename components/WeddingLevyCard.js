'use client'

import { motion } from "framer-motion";
import dayjs from "dayjs";
import FormatedCurrency from "./FormatedCurrency";


const textAnimation = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1.5 },
  },
};

const WeddingLevyCard = ({ beneficiary, amount, username, created_at }) => {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.9 }}
      className='border rounded-lg shadow-md overflow-hidden bg-gray-100 transition transform duration-500 hover:scale-110'>
      <div className='relative p-4 bg-blue-200'>
        <h1 className='uppercase truncate text-xl text-blue-900'>
          {beneficiary}
        </h1>
        <div className='absolute -bottom-7 bg-blue-200 px-5 py-1 rounded-lg'>
          <FormatedCurrency item={amount} itemcolor='red-600' />
        </div>
      </div>
      <motion.div variants={textAnimation} className='px-4 pb-4 pt-10'>
        <p className='text-sm text-gray-500'>Paid by: {username}</p>
        <p className='text-sm text-gray-500'>
          Recorded on: {dayjs(created_at).format("MMMM D, YYYY")}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WeddingLevyCard