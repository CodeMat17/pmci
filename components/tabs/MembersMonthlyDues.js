// import { useEffect, useState } from "react";
import Link from "next/link";
import { AiFillForward } from "react-icons/ai";

const MembersMonthlyDues = ({ profiles }) => {
  return (
    <div className='py-8 w-full '>
      <h1 className='text-center text-purple-800 text-xl tracking-wider font-medium'>
        MEMBERS AND DUES
      </h1>

      {/* <pre>{JSON.stringify(profiles, null, 2)}</pre> */}
      <div className='w-full pt-6 space-y-6 max-w-md mx-auto'>
        {profiles &&
          profiles.map((profile) => (
            <Link href={`admin/${profile.id}`}
              key={profile.id}
              className='w-full flex justify-between items-center border p-4 rounded-full shadow-lg transition duration-500 hover:scale-110 bg-purple-100 hover:bg-purple-200 group'>
              <h1 className='text-lg text-purple-700 truncate group-hover:text-purple-900'>{profile.username}</h1>
              <div>
                <AiFillForward className="text-2xl text-purple-500 group-hover:text-green-600" />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MembersMonthlyDues;
