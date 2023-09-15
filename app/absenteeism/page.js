import FormatedCurrency from "@/components/FormatedCurrency";
import PageTitle from "@/components/PageTitle";
import supabase from "@/utils/supabase";
import dayjs from "dayjs";
import { AiOutlineLoading } from "react-icons/ai";
import { BsCheckSquareFill } from "react-icons/bs";

export const revalidate = 0;

const Absenteeism = async () => {
  const { data: absent } = await supabase
    .from("absenteeism")
    .select(`*`)
    .order("created_at", { ascending: false });

  return (
    <div className='px-4 py-12 min-h-screen'>
      <PageTitle title='Absenteeism Log' />

      {/* <pre>{JSON.stringify(lateness, null, 2)}</pre> */}
      <div className='py-12 w-full max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {absent && absent.length < 1 ? (
            <div className='text-center text-xl '>No record yet!</div>
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
                    <div className='pr-3'>
                      <BsCheckSquareFill
                        className={`text-lg ${
                          abst.has_paid ? "text-green-500" : "text-gray-400"
                        }`}
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
                      {abst.has_paid ? (
                        <p className='text-yellow-500'>Paid</p>
                      ) : (
                        <div className='flex items-center gap-x-2'>
                          <AiOutlineLoading
                            className={`text-xl font-medium text-yellow-500 animate-spin`}
                          />
                          <span className='text-sm'>waiting for payment</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Absenteeism;
