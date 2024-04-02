import { IoIosReturnRight } from 'react-icons/io';
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-black text-white p-10'>
      <div className='flex justify-between flex-wrap gap-6'>
        <div className='flex flex-col gap-2'>
          <p>SIGN UP FOR 10% OFF</p>
          <p>Subscribe to get special updates and discounts.</p>
          <div className='flex items-center bg-white p-2'>
            <input
              type='text'
              placeholder='Enter your E-mail address here'
              className='border-none w-[300px]  outline-none text-black bg-transparent'
            />
            <IoIosReturnRight className='text-black text-lg cursor-pointer' />
          </div>
        </div>
        <div>
          <p className='uppercase'>about us</p>
          <ul>
            <li>Our Story</li>
            <li> made wth care</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <p className='uppercase'>assistance</p>
          <ul>
            <li>terms and condition</li>
            <li>Privacy policy</li>
            <li>accessiblity</li>
          </ul>
        </div>

        <div>
          <p className='uppercase'>botiques</p>
          <ul>
            <li>Find a store</li>
            <li>Book a demo product</li>
            <li></li>
          </ul>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Footer;
