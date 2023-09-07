'use client'

import {useRouter} from 'next/navigation'

const DashboardButtn = () => {
const router = useRouter()

  return (
    <div className='relative mt-8'>
      <button onClick={() => router.push('/members')} className='relative bg-blue-950 text-white px-6 py-3 rounded-full'>
        Check your financial status
        <div className='absolute -top-3 right-2'>
          <span className='relative flex justify-center items-center h-6 w-6'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-600 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-4 w-4 bg-sky-600'></span>
          </span>
        </div>
      </button>
    </div>
  );
}

export default DashboardButtn