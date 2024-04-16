import React from 'react'

export const HeaderNavComp = () => {
  return (
    <div className='grid grid-cols-4 gap-2'>
      <div className='flex justify-center col-span-1 p-5 items-center'>
        <div>
            <p className='text-3xl font-bold text-white'>Flyinn</p>
            <p className='text-sm text-white text-center'>BUDGET</p>
        </div>
      </div>
      <div className='col-span-3 p-5 flex justify-center items-center'>
        <a href='index.html' className='ml-6'>
            <div className='hover:border-b-[2px] hover:border-b-yellow-400 hover:pb-2'>
                <p className='text-white'>ABOUT US</p>
            </div>
        </a>
        <a href='index.html' className='ml-6'>
            <div className='hover:border-b-[2px] hover:border-b-yellow-400 hover:pb-2'>
                <p className='text-white'>BOOKING TERMS</p>
            </div>
        </a>
        <a href='index.html' className='ml-6'>
            <div className='hover:border-b-[2px] hover:border-b-yellow-400 hover:pb-2'>
                <p className='text-white'>FLIGHT</p>
            </div>
        </a>
        <a href='index.html' className='ml-6'>
            <div className='hover:border-b-[2px] hover:border-b-yellow-400 hover:pb-2'>
                <p className='text-white'>GET IN TOUCH</p>
            </div>
        </a>
        <a href='index.html' className='ml-6'>
            <div className='py-2 px-5 border-white border-[2px] '>
                <button className='text-white'>FIND FLIGHTS</button>
            </div>
        </a>
      </div>
    </div>
  )
}

