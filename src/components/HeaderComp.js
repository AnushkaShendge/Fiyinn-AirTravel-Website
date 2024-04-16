import React from 'react';
import image from '../assets/bgMain.png';
import { HeaderNavComp } from './HeaderNavComp';
import { FlightBookingFromComp } from './FlightBookingFromComp';
import { Button } from './Button';

export const HeaderComp = () => {
  return (
    <div
      className="w-full h-[75%]"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <HeaderNavComp />
      <div className='grid grid-cols-2 h-[40%]  '>
        <div className='p-5 flex items-center'>
            <div>
                <p className='text-white text-xl'>FLYING BUDGET</p>
                <p className='text-white text-5xl'>We Are Very Reliable</p>
                <p className='text-yellow-400 text-5xl'>Professional , Experienced</p>
                <p className='text-white text-sm mt-3'><span className='text-yellow-400 text-sm'>Flyinn budget</span> is versetile website expowering you</p>
                <p className='text-white text-sm'>full service airline offering <span className='text-yellow-400 text-sm'>reducing fairs.</span></p>
                <Button label={"Find Flight"} extraStyle={"mt-5 flex"}  />
            </div>
        </div>
        <div className='flex'>
            <FlightBookingFromComp />
        </div>
      </div>
    </div>
    
  );
};

