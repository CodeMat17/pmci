"use client";

import FormatedCurrency from "@/components/FormatedCurrency";
import dayjs from "dayjs";
import { motion } from "framer-motion";

const OtherLeviesCard = ({ title, created_at, amount, desc, paid_by }) => {
  return (
    <>
     

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
            <div className="flex items-center gap-x-1">
              <p className=''>Amount: </p>
              <FormatedCurrency item={amount} size='md' itemcolor='purple-00' />
            </div>

            <p className=''>{dayjs(created_at).format("MMM D, YYYY")}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OtherLeviesCard;
