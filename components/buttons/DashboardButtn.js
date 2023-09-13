'use client'

import {useRouter} from 'next/navigation'

const DashboardButtn = () => {
const router = useRouter()

  return (
    <div className='relative mt-8'>
      <button onClick={() => router.push('/members')} className='relative transition-all transform duration-500 hover:scale-105 bg-gradient-to-t from-purple-950 to-blue-400 text-white px-8 py-3 rounded-full'>
        Explore
        <div className='absolute -top-3 right-2'>
          <span className='relative flex justify-center items-center h-6 w-6'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75'></span>
            <span className='relative inline-flex items-center justify-center rounded-full h-4 w-4 bg-yellow-500'>
              <span className='w-2 h-2 rounded-full bg-blue-900 '></span>
            </span>
          </span>
        </div>
      </button>
    </div>
  );
}

export default DashboardButtn