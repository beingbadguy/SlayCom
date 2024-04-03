import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useContext } from 'react';
import { menuContext } from '../context/Context';
import { useState } from 'react';
import Wishlist from './Wishlist';

const Products = () => {
  const TheArr = useContext(menuContext);
  let arr = TheArr.items;

  let newArr = [];
  let updatedArr = arr.map((item, index) => {
    return (newArr = {
      ...item,
      id: index,
      name: `Product-${index}`,
      price: `$100`,
    });
  });
  const [wishList, setwishList] = useState(
    updatedArr.map((item, index) => ({
      ...item,
      status: false,
    }))
  );

  // console.log(wishList);
  return (
    <>
      <Wishlist wish={wishList} />
      <h1 className=' ml-14 sm:ml-16 mb-2'>New Arrivals</h1>
      <div className='flex flex-wrap justify-center '>
        {updatedArr.map((item, index) => (
          <div
            key={index}
            className='border border-slate-200 rounded-xl flex flex-col flex-wrap items-start  m-6  '
          >
            <img
              src={`${item.image}`}
              className=' rounded-xl p-1 border w-[300px]  h-[300px] object-cover cursor-pointer'
              alt=''
            />
            <p className='font-semibold text-xl p-1'>{item.name}</p>
            <div className='flex items-center justify-between  w-[280px]'>
              <p id='price' className='italic p-1'>
                {item.price}
              </p>
              <div
                onClick={() => {
                  setwishList((wishList) => {
                    const newList = [...wishList];
                    newList[index] = { ...newList[index], status: !newList[index].status };
                    return newList;
                  });
                }}
              >
                <FaHeart
                  className={` ${
                    wishList[index].status ? 'text-red-500' : 'text-black'
                  }  cursor-pointer `}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Products;
