import { AiOutlineLoading } from "react-icons/ai";
import { IoIosCheckmarkCircle } from "react-icons/io";

const MonthlyDuesCard = ({ year, dues }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex items-center justify-center space-x-2'>
        <p className='text-lg text-purple-950'>{year}</p>
        {dues === 12 && (
          <IoIosCheckmarkCircle className=' text-xl text-green-600' />
        )}
        {dues > 0 && dues <= 11 && (
          <AiOutlineLoading className=' text-lg text-yellow-600 animate-spin' />
        )}
      </div>

      {dues === 0 && (
        <div
          className={`flex items-center justify-center space-x-2 bg-gray-300  px-3 py-1 rounded-full`}>
          <p>{dues}</p>
          <p className='leading-3'>months</p>
        </div>
      )}

      {dues > 0 && dues < 12 && (
        <div
          className={`flex items-center justify-center space-x-2 bg-yellow-300  px-3 py-1 rounded-full`}>
          <p className=''>{dues}</p>
          <p className='leading-3'>months</p>
        </div>
      )}

      {dues === 12 && (
        <div
          className={`flex items-center justify-center space-x-2 bg-green-600 text-white px-3 py-1 rounded-full`}>
          <p className=''>{dues}</p>
          <p className='leading-3'>months</p>
        </div>
      )}
    </div>
  );
};

export default MonthlyDuesCard;
