import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useContext } from 'react';
import { menuContext } from '../context/Context';
import { useState } from 'react';
import Wishlist from './Wishlist';
import { IoIosAdd } from 'react-icons/io';
import Cart from './Cart';
import { IoIosCheckmark } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Products = () => {
  const TheArr = useContext(menuContext);
  const { Wishlist, setWishlist } = useContext(menuContext);
  let arr = TheArr.items;
  const [view, setview] = useState(-1);

  return (
    <>
      <h1 className='  sm:ml-16 mb-2 m-5 font-bold text-xl'>New Arrivals</h1>
      <div className='flex flex-wrap justify-center '>
        {arr.map((item, index) => (
          <div
            key={index}
            className='border border-slate-200 rounded-xl flex flex-row m-4 flex-wrap items-start  h-[500px] w-[170px] md:w-[300px]  '
            onMouseOver={() => {
              setview(index);
            }}
            onMouseOut={() => {
              setview(-1);
            }}
          >
            <Link to={`/${item.id}`}>
              <img
                src={`${item.thumbnail}`}
                className=' rounded-xl p-1 border w-[300px]  h-[300px] object-cover cursor-pointer'
                alt=''
              />
            </Link>
            <div className='flex items-center justify-between w-[285px]'>
              <p className='font-semibold text-xl p-1'>{item.title}</p>
            </div>
            <div className='flex items-center justify-between  w-[280px]'>
              <p id='price' className='italic p-1'>
                ${item.price}
              </p>
            </div>
            <div className='flex justify-center items-center w-[100%]'>
              <Link
                key={item.id}
                to={`/${item.id}`}
                className={`cursor-pointer text-center mx-auto m-3 w-[90%] rounded p-1 bg-black text-white hover:opacity-50  duration-200  opacity-50${
                  view === index ? 'block md:block ' : 'block md:hidden '
                } transition-all`}
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Products;
