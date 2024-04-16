import React from 'react';
import coin from '../assets/coin.png';

const ServiceItem = ({ title, description }) => {
  return (
    <div className='mt-5'>
      <div className='h-12 w-12 rounded-full bg-[#dce8f6] flex justify-center items-center'>
        <img src={coin} className='w-6 h-6' alt='Coin' />
      </div>
      <p className='text-xl mt-2'>{title}</p>
      <div className='w-48 mt-1'>
        <p className='text-sm text-gray-400'>{description}</p>
      </div>
    </div>
  );
};

export const Services = () => {
    return (
      <div className='h-full px-20 py-20'>
        <div className='grid grid-cols-2 gap-6 h-[90%]'>
          <div>
            <p className='text-sm'>BEST CHOICE</p>
            <p className='text-3xl mt-2'>Why Should<br />You Use<br /><span className='text-[#3781c5]'>Our<br />Services</span></p>
            <ServiceItem
              title='Price Beating Guarantee'
              description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            />
          </div>
          <div className='grid grid-cols-2 gap-6'>
          <ServiceItem
            title='Service 1'
            description='Description of Service 1.'
          />
          <ServiceItem
            title='Service 2'
            description='Description of Service 2.'
          />
          <ServiceItem
            title='Service 3'
            description='Description of Service 3.'
          />
          <ServiceItem
            title='Service 4'
            description='Description of Service 4.'
          />
        </div>
        </div>
      </div>
    );
};