"use client";

import dayjs from "dayjs";
import UpdateWeddingLevies from "../crud/UpdateWeddingLevies";
import DeleteWeddingLevy from "../crud/DeleteWeddingLevy";
import FormatedCurrency from "../FormatedCurrency";

const WeddingLevies = ({ weddings }) => {
  return (
    <div className='py-8 w-full'>
      <h1 className='text-center text-xl tracking-wider font-medium'>
        WEDDING LEVIES
      </h1>

      {/* <pre>{JSON.stringify(weddings, null, 2)}</pre> */}
      <div className='w-full pt-6 max-w-md mx-auto rounded-2xl'>
        <div className='space-y-10'>
          {weddings &&
            weddings.map((wed) => (
              <div key={wed.id} className='relative'>
                <div className='w-full bg-purple-100 text-purple-900  px-4 py-6 rounded-xl'>
                  <h1 className='truncate uppercase text-xl font-medium pt-4'>
                    {wed.username}
                  </h1>
                  <div className='flex items-center justify-between'>
                    <div className='bg-purple-200 p-2 rounded-lg tracking-wide'>
                      <FormatedCurrency
                        item={wed.amount}
                        size='md'
                        itemcolor='purple-00'
                      />
                    </div>

                    <p className='text-sm'>
                      {dayjs(wed.created_at).format("MMM D, YYYY")}
                    </p>
                  </div>
                </div>
                <p className='absolute -top-5 left-4 text-gray-500 text-sm truncate bg-purple-100 p-2 border border-purple-200 shadow-md rounded-xl'>
                  FOR: {wed.beneficiary}
                </p>
                <div className='absolute -bottom-4 right-16 rounded-full bg-purple-300 shadow-md'>
                  <DeleteWeddingLevy
                    user_id={wed.id}
                    benefy={wed.beneficiary}
                    name={wed.username}
                    amnt={wed.amount}
                  />
                </div>
                <div className='absolute -bottom-4 right-4 rounded-full bg-purple-300 shadow-md'>
                  <UpdateWeddingLevies
                    user_id={wed.id}
                    benefy={wed.beneficiary}
                    name={wed.username}
                    amnt={wed.amount}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingLevies;
