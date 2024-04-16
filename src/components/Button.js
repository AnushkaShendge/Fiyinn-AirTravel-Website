import React from 'react'

export const Button = ({label , extraStyle}) => {
  return (
    <div className={`${extraStyle}`}>
        <a href='index.html'>
            <div className='py-2 px-5 bg-yellow-400 text-sm'>
                <button className='text-white'>{label}</button>
            </div>
        </a>          
    </div>
  )
}

