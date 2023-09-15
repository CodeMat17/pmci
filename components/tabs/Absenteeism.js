"use client";

import dayjs from "dayjs";
import { BsCheckSquareFill } from "react-icons/bs";
import FormatedCurrency from "../FormatedCurrency";
import UpdateAbsent from "../crud/UpdateAbsent";
import UpdatePayAbsent from "../crud/UpdatePayAbsent";

const Absenteeism = ({ absent }) => {
  return (
    <div className='py-8 w-full '>
      <h1 className='text-purple-900 text-center text-xl tracking-wider font-medium'>
        ABSENTEEISM LOG
      </h1>

      {/* <pre>{JSON.stringify(absent, null, 2)}</pre> */}

      <div className='pt-12  grid grid-flow-row grid-cols-1 sm:grid-cols-2  gap-4'>
        {absent && absent.length < 1 ? (
          <p className='text-center py-20'>No log yet!</p>
        ) : (
          <>
            {absent.map((abst) => (
              <div
                key={abst.id}
                className={`pt-3 pb-1 px-1 bg-purple-200 rounded-xl overflow-hidden w-full shadow-md ${
                  abst.has_paid ? "shadow-green-400" : "shadow-gray-400"
                } `}>
                <div className='flex items-center justify-between'>
                  <h1 className='px-3 text-purple-800 font-medium'>
                    {dayjs(abst.created_at).format("MMM DD, YYYY")}
                  </h1>
                  <div className='pr-3 flex items-center gap-4'>
                
                    <UpdateAbsent
                      user_id={abst.id}
                      name={abst.username}
                    />

                    <UpdatePayAbsent
                      user_id={abst.id}
                      paid={abst.has_paid}
                    />
                  </div>
                </div>

                <div className='p-3 mt-3 bg-purple-100 rounded-xl'>
                  <h2 className='text-lg truncate capitalize'>
                    {abst.username}
                  </h2>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-2'>
                      <p>Fine: </p>
                      <FormatedCurrency
                        item={abst.fine}
                        size='md'
                        itemcolor='purple-600'
                      />
                    </div>

                    <div className=''>
                      <BsCheckSquareFill
                        className={`text-lg ${
                          abst.has_paid ? "text-green-500" : "text-gray-400"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {/* <div className='p-1 border rounded-full overflow-hidden gap-x-4 flex float-right bg-purple-50'>
        <DeleteOtherLevy
          user_id={abst.id}
          name={abst.username}
          fine={abst.amount}
          paid={abst.has_paid}
        />
        <UpdateOtherLevies
           user_id={abst.id}
          name={abst.username}
          fine={abst.amount}
          paid={abst.has_paid}
        />
      </div> */}
    </div>
  );
};

export default Absenteeism;
