"use client";

import dayjs from "dayjs";
import { motion } from "framer-motion";
import FormatedCurrency from "./FormatedCurrency";

const textAnimation = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1.5 },
  },
};

const WeddingLevyCard = ({ beneficiary, amount, username, created_at }) => {
  return (
    // <FormatedCurrency item={amount} itemcolor='red-600' />
    <>
      {/* <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.9 }}
        className='relative shadow-md overflow-hidden transition transform duration-500 hover:scale-110'>
        <div className='w-full bg-purple-100 text-purple-900  px-4 py-6 rounded-xl'>
          <h1 className='truncate uppercase text-xl font-medium pt-4'>
            {username}
          </h1>
          <div className='flex items-center justify-between'>
            <p className='tracking-wide bg-purple-200 p-2 rounded-lg'>
              ₦{amount}
            </p>
            <p className='text-sm'>{dayjs(created_at).format("MMM D, YYYY")}</p>
          </div>
          <div className='absolute -bottom-7 bg-blue-300 px-5 py-1 rounded-lg'>
            <FormatedCurrency item={amount} itemcolor='red-600' />
          </div>
        </div>
        <p className='absolute -top-5 left-4 text-gray-500 text-sm truncate bg-purple-100 p-2 border border-purple-200 shadow-md rounded-xl'>
          FOR: {beneficiary}
        </p>
        <motion.div variants={textAnimation} className='px-4 pb-4 pt-10'>
          <p className='text-sm text-gray-500'>Paid by: {username}</p>
          <p className='text-sm text-gray-500'>
            Recorded on: {dayjs(created_at).format("MMMM D, YYYY")}
          </p>
        </motion.div>
      </motion.div> */}

      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.9 }}
        className='relative'>
        <div className='w-full bg-purple-100 text-purple-900  px-4 py-6 rounded-xl'>
          <h1 className='truncate uppercase text-xl font-medium pt-4'>
            {username}
          </h1>
          <div className='flex items-center justify-between'>
            <div className='bg-purple-200 p-2 rounded-lg'>
              <FormatedCurrency item={amount} size='md' itemcolor='purple-00' />
            </div>
            <p className='text-sm'>{dayjs(created_at).format("MMM D, YYYY")}</p>
          </div>
        </div>
        <motion.p
          variants={textAnimation}
          className='absolute -top-5 left-4 text-purple-600 text-sm truncate bg-purple-100 p-2 border border-purple-200 shadow-md rounded-xl'>
          FOR: {beneficiary}
        </motion.p>
      </motion.div>
    </>
  );
};

export default WeddingLevyCard;
