'use client'

import dayjs from "dayjs";
import FormatedCurrency from "@/components/FormatedCurrency";
import { motion } from "framer-motion";


const OtherLeviesCard = ({ title, created_at, amount, desc, paid_by }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.4, duration: 1.5 },
      }}
      viewport={{ once: false, amount: 0.4 }}
      className='mb-8 border rounded-lg overflow-hidden shadow-md bg-gray-100 transition transform duration-500 hover:scale-110'>
      <div className='relative px-4 py-6 bg-blue-900'>
        <h1 className=' uppercase truncate text-xl  text-white'>{title}</h1>
        <p className='absolute -bottom-4 right-4 bg-blue-900 px-3 py-1 rounded-lg text-sm text-gray-400'>
          Paid on: {dayjs(created_at).format("MMMM D, YYYY")}
        </p>
      </div>
      <div className='p-4'>
        <FormatedCurrency item={amount} itemcolor='blue-900' />
        <p className='pb-2 pt-1 text-sm text-gray-400 leading-4'>{desc}</p>

        <p className='text-sm text-gray-600'>Paid by: {paid_by}</p>
      </div>
    </motion.div>
  );
};

export default OtherLeviesCard;
