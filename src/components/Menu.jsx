import { IoCloseOutline } from 'react-icons/io5';
import { useContext } from 'react';
import { menuContext } from '../context/Context';
import React from 'react';

const Menu = () => {
  const menuYes = useContext(menuContext);

  return (
    <div className=' flex'>
      <ul
        className={` absolute left-0 top-0 h-screen pt-20 bg-green-300 sm:h-auto sm:pt-0 sm:static text-2xl sm:text-sm sm:bg-transparent  flex flex-col gap-20 sm:gap-[100px] text-center font-bold sm:flex-row sm:justify-center w-[100%] sm:translate-y-[0%] transition  md:ml-[-70px] ${
          menuYes.menuStatus ? 'translate-y-[-200%]' : 'translate-y-[0%]  '
        }  `}
      >
        <li className='cursor-pointer hover:text-red-200 active:text-red-200'>Home</li>
        <li className='cursor-pointer hover:text-red-200  active:text-red-200'>Categories</li>
        <li className='cursor-pointer hover:text-red-200  active:text-red-200'>Contact</li>
        <li className='cursor-pointer hover:text-red-200  active:text-red-200'>About Us</li>
        <li
          onClick={() => {
            menuYes.setmenuStatus(true);
          }}
          className='sm:hidden absolute left-[46%] bottom-[100px] cursor-pointer'
        >
          <IoCloseOutline />
        </li>
      </ul>
    </div>
  );
};
export default Menu;
