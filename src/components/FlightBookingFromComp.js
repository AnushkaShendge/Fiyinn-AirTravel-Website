import React from 'react'
import { InputTextComp } from './InputTextComp'
import { IoAirplane } from "react-icons/io5";
import { Button } from './Button';

export const FlightBookingFromComp = () => {
  return (
    <div className='bg-white w-[25%] pb-5 rounded-3xl absolute bottom-1 shadow shadow-gray-400'>
      <div className='p-5'><p className='font-semibold ml-8'>Book Cheap <span className='text-yellow-400'>Flights</ span></p></div>
      <div className='bg-black text-white flex justify-evenly py-3'>
        <div className='flex '> 
          <input className='text-yellow-400' type='radio' id='agel' name='age' value='30' />
          <p className='text-sm'>One Way</p>
        </div>
        <div className='flex'> 
          <input className='text-yellow-400' type='radio' id='agel' name='age' value='30' />
          <p className='text-sm'>Round Trip</p>
        </div>
      </div>
      <div className='p-2'>
        <InputTextComp image={<IoAirplane />}placeholder={"Enter City"} label="Departure"  />
        <InputTextComp image={<IoAirplane />}placeholder={"Enter City"} label="Departure"  />
        <InputTextComp image={<IoAirplane />}placeholder={"Enter City"} label="Departure"  />
        <InputTextComp image={<IoAirplane />}placeholder={"Enter City"} label="Departure"  />
        <InputTextComp image={<IoAirplane />}placeholder={"Enter City"} label="Departure"  />
      </div>
      <div className='px-5'>
        <Button label={"Find Flights"} extraStyle={"mt-1 mb-2 w-full text-center"} />
      </div>
    </div>

  )
}

