import FormatedCurrency from "@/components/FormatedCurrency";
import PageTitle from "@/components/PageTitle";
import supabase from "@/utils/supabase";
import dayjs from "dayjs";
import { BsCheckSquareFill } from "react-icons/bs";

export const revalidate = 0;

const Lateness = async () => {
  const { data: lateness } = await supabase
    .from("lateness")
    .select(`*`)
    .order("created_at", { ascending: false });

  return (
    <div className='px-4 py-12 min-h-screen'>
      <PageTitle title='Lateness Log' />

      {/* <pre>{JSON.stringify(lateness, null, 2)}</pre> */}
      <div className='py-12 w-full max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {lateness && lateness.length < 1 ? (
            <div className='text-center text-xl '>No record yet!</div>
          ) : (
            <>
              {lateness.map((late) => (
                <div
                  key={late.id}
                  className={`pt-3 pb-1 px-1 bg-purple-200 rounded-xl overflow-hidden w-full shadow-md ${
                    late.has_paid ? "shadow-green-400" : "shadow-gray-400"
                  } `}>
                  <h1 className='px-3 text-purple-800 font-medium'>
                    {dayjs(late.created_at).format("MMM DD, YYYY")}
                  </h1>
                  <div className='p-3 mt-3 bg-purple-100 rounded-xl'>
                    <h2 className='text-lg truncate capitalize'>
                      {late.username} Matthew Anthony Chukwu Eze
                    </h2>
                    <div className='flex items-center justify-between'>
                      <div>
                        <BsCheckSquareFill
                          className={`text-lg ${
                            late.has_paid ? "text-green-500" : "text-gray-400"
                          }`}
                        />
                      </div>
                      <div className='flex items-center gap-x-2'>
                        <p>Fine: </p>
                        <FormatedCurrency
                          item={late.fine}
                          size='md'
                          itemcolor='purple-600'
                        />
                      </div>
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

export default Lateness;
