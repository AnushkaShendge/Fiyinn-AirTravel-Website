import React from 'react'
import { MdAddCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const ContactUsComp = () => {
  return (
    <div class="grid grid-cols-2 gap-2">
        <div className='flex justify-center h-14 '>
            <div className='flex items-center'>
                <MdAddCall />
                <p className='text-sm ml-2 '>+91 1234567890</p>
                <MdEmail className='ml-5'/>
                <p className='text-sm ml-2 '>anushkashendge5@gmail.com</p>
            </div>
        </div>
        <div className='flex justify-center h-14'>
            <div className='flex items-center'>
                <a href='#'>{" "}<FaFacebook size={20}/></a>
                <a href='#'>{" "}<FaTwitter size={20} className='ml-2'/></a>
                <a href='#'>{" "}<FaInstagram size={20} className='ml-2'/></a>
                <a href='#'>{" "}<FaLinkedin size={20} className='ml-2'/></a>
                
            </div>
        </div>
    </div>
  )
}


