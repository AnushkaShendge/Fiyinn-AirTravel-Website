import React from 'react';
import { LOWEST_FARE_LIST } from '../constants/AppCons';
import { Button } from './Button';

export const LowestFare = () => {
  return (
    <div className='h-[80%] px-20 py-20 bg-[#1a63a8] relative'>
      <p className='text-sm text-center text-white'>CURRENT FARE</p>
      <p className='text-3xl mt-1 text-center text-white'>Today's <span className='font-bold'>Lowest Fare</span></p>
      <div className='flex justify-center mt-4 bottom-{-100px} '>
        {LOWEST_FARE_LIST.map((item) => (
          <div key={`lowest-fare-${item.id}`} className='bg-white p-4 rounded-lg text-center mx-4 mb-4' style={{ minWidth: '250px', maxWidth: '300px' }}>
            <img src={item.image} alt={item.name} className='h-40 w-40 mx-auto mb-4 rounded-md' />
            <p className='font-semibold'>{item.heading}</p>
            <p className='text-sm text-gray-600 mt-2'>Starting From <span className='text-red-400 font-semibold'>{item.price}</span></p>
            <Button label={"CHECK OUT NOW"} extraStyle={"m-5"}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LowestFare;
