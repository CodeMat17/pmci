"use client";

import FormatedCurrency from "@/components/FormatedCurrency";
import dayjs from "dayjs";
import { motion } from "framer-motion";

const OtherLeviesCard = ({ title, created_at, amount, desc, paid_by }) => {
  return (
    <>
      {/* <motion.div
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
      </motion.div> */}

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { type: "spring", bounce: 0.4, duration: 1.5 },
        }}
        viewport={{ once: false, amount: 0.4 }}
        className='bg-purple-200 rounded-xl overflow-hidden pt-4 px-1 pb-1'>
        <h1 className='px-4 uppercase text- font-medium truncate text-purple-900'>
          {paid_by}
        </h1>
        <div className='mt-4 p-3 text-sm font-medium text-purple-900/50 bg-purple-50 rounded-xl overflow-hidden'>
          <p className=''>Title: {title}</p>
          <p className=''>Desc: {desc}</p>
          <div className='flex items-center justify-between'>
            <p className=''>Amount: ₦{amount}</p>
            <p className=''>{dayjs(created_at).format("MMM D, YYYY")}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OtherLeviesCard;
