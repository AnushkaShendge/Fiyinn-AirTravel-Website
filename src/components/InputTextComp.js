import React from 'react';

export const InputTextComp = ({ image, placeholder, label, extraStyle }) => {
  return (
    <div className={`flex items-center border border-gray-300 px-3 py-3 ${extraStyle}`}>
      <div className='pr-4 rounded-sm'>
        {image}
      </div>
      <input className='ml-3 outline-none border-none text-sm w-full' placeholder={placeholder} />
      <p className='ml-3 text-sm text-gray-400'>{label}</p>
    </div>
  );
};
