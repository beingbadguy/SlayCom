import { IoCloseOutline } from 'react-icons/io5';
import { useContext } from 'react';
import { menuContext } from '../context/Context';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Menu = () => {
  const menuYes = useContext(menuContext);

  return (
    <div className=' flex'>
      <ul
        className={`absolute left-0 top-0 h-[100vh] pt-20 bg-white sm:h-auto sm:pt-0 sm:static text-2xl sm:text-sm sm:bg-transparent  flex flex-col gap-20 sm:gap-[100px] text-center font-bold sm:flex-row sm:justify-center w-[100%]  z-9999 sm:translate-y-[0%] transition duration-1000   md:ml-[-70px] ${
          menuYes.menuStatus ? 'translate-y-[-200%]' : 'translate-y-[0%]  '
        }  `}
      >
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `cursor-pointer ${
                isActive ? 'text-green-500' : 'text-black'
              } hover:text-green-500 active:text-green-500`
            }
            onClick={() => {
              menuYes.setmenuStatus(true);
            }}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/categories'
            className={({ isActive }) =>
              `cursor-pointer ${
                isActive ? 'text-green-500' : 'text-black'
              } hover:text-green-500 active:text-green-500`
            }
            onClick={() => {
              menuYes.setmenuStatus(true);
            }}
          >
            Categories
          </NavLink>
        </li>
        <NavLink
          to='/login'
          className={({ isActive }) =>
            `cursor-pointer ${
              isActive ? 'text-green-500' : 'text-black'
            } hover:text-green-500 active:text-green-500`
          }
          onClick={() => {
            menuYes.setmenuStatus(true);
          }}
        >
          Login
        </NavLink>

        <li>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              `cursor-pointer ${
                isActive ? 'text-green-500' : 'text-black'
              } hover:text-green-500 active:text-green-500`
            }
            onClick={() => {
              menuYes.setmenuStatus(true);
            }}
          >
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              `cursor-pointer ${
                isActive ? 'text-green-500' : 'text-black'
              } hover:text-green-500 active:text-green-500`
            }
            onClick={() => {
              menuYes.setmenuStatus(true);
            }}
          >
            About Us
          </NavLink>
        </li>

        <li
          onClick={() => {
            menuYes.setmenuStatus(true);
          }}
          className='sm:hidden absolute left-[46%] bottom-[80px] cursor-pointer'
        >
          <IoCloseOutline className='h-12 w-12' />
        </li>
      </ul>
    </div>
  );
};
export default Menu;
