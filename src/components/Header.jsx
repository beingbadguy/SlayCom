import { CiDeliveryTruck } from 'react-icons/ci';
import { LiaRupeeSignSolid } from 'react-icons/lia';
import { FiShoppingBag } from 'react-icons/fi';
import { CiSearch } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { CiMenuFries } from 'react-icons/ci';
import { CiBag1 } from 'react-icons/ci';
import { useContext } from 'react';
import { menuContext } from '../context/Context';
import { MdArrowRightAlt } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useState, useRef } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { SiAiqfome } from 'react-icons/si';

const Header = () => {
  const { menuyes, wishlist, menuStatus, setmenuStatus } = useContext(menuContext);

  const [search, setsearch] = useState(false);
  const inpRef = useRef();
  return (
    <div>
      {/* ad  */}
      <div id='ad' className=' bg-[#2EBB77] p-2 flex items-center justify-evenly'>
        <div className=' hidden md:flex   items-center justify-evenly gap-2'>
          <CiDeliveryTruck />
          <p className='uppercase text-sm'>free delivery</p>
        </div>
        <div className='flex items-center justify-evenly gap-2'>
          <LiaRupeeSignSolid />
          <p className='uppercase text-sm'>new customers save 15% use code : AMAN15</p>
        </div>
        <div className='hidden md:flex   items-center justify-evenly gap-2'>
          <FiShoppingBag />
          <p className='uppercase text-sm'>
            shop <span className='italic'>slayed</span> gift cards
          </p>
        </div>
      </div>

      {/* nav  */}
      <div className=' flex m-4 justify-between items-center md:ml-20 md:mr-20 relative'>
        <div className='flex'>
          <img src='/logo.svg' className='h-[30px]' />
          <Link to='/'>
            <h1>layyyyyy</h1>
          </Link>
        </div>
        <div>
          <h1 className='text-xl hidden sm:block'>Slayyyyyy</h1>
        </div>
        <div className='flex'>
          <div
            onClick={() => {
              setsearch(true);
              inpRef.current.focus();
            }}
          >
            <CiSearch className='w-8 h-8 cursor-pointer  mr-3 ' />
          </div>
          <div
            onClick={() => {
              menuyes.setwishStatus((menuyes.wishStatus = false));
            }}
          >
            <Link to='/wishlist' className='relative'>
              <CiHeart className='w-8 h-8 cursor-pointer block mr-3' />
              <div className='absolute top-[0] left-5 bg-black text-white rounded-full text-[10px] w-4 h-4 p-2  text-center flex items-center justify-center'>
                {wishlist.length}
              </div>
            </Link>
          </div>
          <Link to='/login'>
            <SiAiqfome className='w-7 h-8 cursor-pointer  font-[50] md:block mr-3' />
          </Link>
          <div
            className='flex'
            onClick={() => {
              menuyes.setcartStatus((menuyes.cartStatus = false));
            }}
          >
            <CiBag1 className='w-8 h-8 cursor-pointer  hidden md:block mr-3' />
          </div>
          <div
            onClick={() => {
              setmenuStatus(false);
            }}
          >
            <CiMenuFries className='w-8 h-8 cursor-pointer sm:hidden' />
          </div>
        </div>
      </div>

      <div
        className={` absolute ${
          !search ? 'translate-y-[-200%]' : 'translate-y-[0%]'
        } flex justify-between p-2  transition duration-1000  delay-0  bg-white w-[100%] left-0  top-0`}
      >
        <input
          ref={inpRef}
          type='text'
          className=' p-3 w-[80%] sm:w-[90%] border-b-2 outline-none'
          placeholder='Enter your search '
        />
        <div
          onClick={() => {
            setsearch(false);
            inpRef.current.value = '';
          }}
        >
          <MdArrowRightAlt className='w-8 h-16 absolute right-[20%] sm:right-[12%] font-thin cursor-pointer' />
        </div>
        <div
          onClick={() => {
            setsearch(false);
            inpRef.current.value = '';
          }}
        >
          <IoIosCloseCircleOutline className=' w-8 h-16 sm:mr-6 mr-0 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};
export default Header;
