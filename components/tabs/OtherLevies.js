"use client";
import dayjs from "dayjs";
import UpdateOtherLevies from "../crud/UpdateOtherLevies";
import DeleteOtherLevy from "../crud/DeleteOtherLevy";
import FormatedCurrency from "../FormatedCurrency";

const OtherLevies = ({ others }) => {
  return (
    <div className='py-8 w-full'>
      <h1 className='text-purple-900 text-center text-xl tracking-wider font-medium'>
        OTHER LEVIES
      </h1>

      {/* <pre>{JSON.stringify(others, null, 2)}</pre> */}

      <div className='w-full pt-6 max-w-md mx-auto rounded-2xl'>
        <div className='space-y-10'>
          {others &&
            others.map((other) => (
              <div
                key={other.id}
                className='bg-purple-100 rounded-xl overflow-hidden pt-4 px-1 pb-1'>
                <h1 className='px-4 uppercase text- font-medium truncate text-purple-900'>
                  {other.paid_by}
                </h1>
                <div className='mt-4 p-3 text-sm font-medium text-purple-600 bg-purple-50 rounded-xl overflow-hidden'>
                  <p className=''>Title: {other.title}</p>
                  <p className=''>Desc: {other.desc}</p>
                  <div className='flex items-center justify-between'>
                    <div className="flex items-center gap-x-1">
                      <p className=''>Amount:</p>
                      <FormatedCurrency
                        item={other.amount}
                        size='md'
                        itemcolor='purple-00'
                      />
                    </div>
                    <p className=''>
                      {dayjs(other.created_at).format("MMM D, YYYY")}
                    </p>
                  </div>
                </div>
                <div className='p-1 border rounded-full overflow-hidden gap-x-4 flex float-right bg-purple-50'>
                  <DeleteOtherLevy
                    user_id={other.id}
                    name={other.paid_by}
                    descp={other.desc}
                    titlee={other.title}
                    amnt={other.amount}
                  />
                  <UpdateOtherLevies
                    user_id={other.id}
                    name={other.paid_by}
                    descp={other.desc}
                    titlee={other.title}
                    amnt={other.amount}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OtherLevies;
