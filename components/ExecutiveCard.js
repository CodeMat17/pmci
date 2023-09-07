import Image from 'next/image';
import React from 'react'

const ExecutiveCard = ({name, position, img}) => {
  return (
    <div className='border shadow-md rounded-xl overflow-hidden'>
      <div className='bg-blue-900 text-white tracking-widest p-4'>
        <h1 className='text-2xl text-center truncate'>
        {name}
        </h1>
      </div>
      <div className=' px-4 py-2 flex items-center space-x-4 w-full'>
        <div className='relative shadow-md rounded-full flex items-center justify-center'>
          <div className='border  relative z-30 w-[120px] h-[120px] animate-spin-slower rounded-full overflow-hidden'>
            <Image alt='logo' fill priority src='/photo-frame.png' />
          </div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className=' relative w-[90px] h-[90px] rounded-full overflow-hidden'>
              <Image
                alt='profile photo'
                fill
                priority
                src={img}
              />
            </div>
          </div>
        </div>

        <h2 className=' text-blue-900 text-2xl text-center'>{position}</h2>
      </div>
    </div>
  );
}

export default ExecutiveCard