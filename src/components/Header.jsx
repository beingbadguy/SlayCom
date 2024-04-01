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

const Header = () => {
  const menuyes = useContext(menuContext);

  const [search, setsearch] = useState(false);
  const inpRef = useRef();

  return (
    <div>
      {/* ad  */}
      <div id='ad' className=' bg-[#2EBB77] p-2 flex items-center justify-evenly'>
        <div className=' hidden md:flex  flex items-center justify-evenly gap-2'>
          <CiDeliveryTruck />
          <p className='uppercase text-sm'>free delivery</p>
        </div>
        <div className='flex items-center justify-evenly gap-2'>
          <LiaRupeeSignSolid />
          <p className='uppercase text-sm'>new customers save 15% use code : AMAN15</p>
        </div>
        <div className='hidden md:flex  flex items-center justify-evenly gap-2'>
          <FiShoppingBag />
          <p className='uppercase text-sm'>
            shop <span className='italic'>slayed</span> gift cards
          </p>
        </div>
      </div>

      {/* nav  */}
      <div className='flex m-4 justify-between items-center md:ml-20 md:mr-20 relative'>
        <div className='flex'>
          <img src='/logo.svg' className='h-[30px]' />
          <h1>layyyyyy</h1>
        </div>
        <div>
          <h1 className='text-xl hidden sm:block'>Slayyyyyy</h1>
        </div>
        <div className='flex gap-5'>
          <div
            onClick={() => {
              setsearch(true);
            }}
          >
            <CiSearch className='w-8 h-8 cursor-pointer ' />
          </div>
          <CiHeart className='w-8 h-8 cursor-pointer hidden sm:block' />
          <IoPersonOutline className='w-8 h-8 cursor-pointer hidden sm:block' />
          <div className='flex'>
            <CiBag1 className='w-8 h-8 cursor-pointer' />
            <div className='text-green-800'>1</div>
          </div>
          <div
            onClick={() => {
              menuyes.setmenuStatus(false);
            }}
          >
            <CiMenuFries className='w-8 h-8 cursor-pointer sm:hidden' />
          </div>
        </div>
      </div>

      <div
        className={` absolute ${
          !search ? 'translate-x-[-100%]' : 'translate-x-[0%]'
        } flex justify-between p-2  transition duration-1000  delay-0  bg-white w-[100%] left-1  rounded-xl`}
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
