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
  let arr = TheArr.items;
  const [view, setview] = useState(-1);

  // let updatedArr = arr.map((item, index) => {
  //   return {
  //     ...item,
  //     id: index,
  //     name: `Product-${index}`,
  //     status: false,
  //     isAddedToCart: false,
  //   };
  // });

  // console.log(updatedArr);

  // const [wishList, setwishList] = useState(updatedArr);

  return (
    <>
      {/* <Cart cart={wishList} /> */}
      {/* <Wishlist wish={wishList} /> */}
      <h1 className=' ml-14 sm:ml-16 mb-2 m-5 font-bold text-xl'>New Arrivals</h1>
      <div className='flex flex-wrap justify-center '>
        {arr.map((item, index) => (
          <div
            key={index}
            className='border border-slate-200 rounded-xl flex flex-col flex-wrap items-start  m-6 h-[470px] w-[300px]  '
            onMouseOver={() => {
              setview(index);
            }}
            onMouseOut={() => {
              setview(-1);
            }}
          >
            <img
              src={`${item.thumbnail}`}
              className=' rounded-xl p-1 border w-[300px]  h-[300px] object-cover cursor-pointer'
              alt=''
            />
            <div className='flex items-center justify-between w-[285px]'>
              <p className='font-semibold text-xl p-1'>{item.title}</p>

              <div></div>
            </div>
            <div className='flex items-center justify-between  w-[280px]'>
              <p id='price' className='italic p-1'>
                ${item.price}
              </p>
              <div>
                <FaHeart />
              </div>
            </div>
            <div className='flex justify-center items-center w-[100%]'>
              {/* <p className=' cursor-pointer text-center mx-auto m-3  w-20 bg-green-200'>
                    Add to cart
                  </p> */}
              <Link
                key={item.id}
                to={`/${item.id}`}
                className={`cursor-pointer text-center mx-auto m-3 w-[90%] rounded p-1 bg-black text-white ${
                  view === index ? 'block md:block ' : 'block md:hidden'
                } transition-all`}
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* #TODO  */}

      {/* <Cart cart={wishList} />
      <Wishlist wish={wishList} />
      <h1 className=' ml-14 sm:ml-16 mb-2 m-5'>New Arrivals</h1>
      <div className='flex flex-wrap justify-center '>
        {arr.map((item, index) => (
          <div
            key={index}
            className='border border-slate-200 rounded-xl flex flex-col flex-wrap items-start  m-6  '
          >
            <img
              src={`${item.thumbnail}`}
              className=' rounded-xl p-1 border w-[300px]  h-[300px] object-cover cursor-pointer'
              alt=''
            />
            <div className='flex items-center justify-between w-[285px]'>
              <p className='font-semibold text-xl p-1'>{item.title}</p>

              <div
                onClick={() => {
                  let CartArray = [...wishList];
                  CartArray[index].isAddedToCart = true;
                  setwishList(CartArray);
                  console.log(CartArray[index].isAddedToCart);
                }}
              >
                {wishList[index].isAddedToCart ? (
                  <IoIosCheckmark className='h-6 w-6' />
                ) : (
                  <IoIosAdd className='h-6 w-6 cursor-pointer' />
                )}
              </div>
            </div>
            <div className='flex items-center justify-between  w-[280px]'>
              <p id='price' className='italic p-1'>
                ${item.price}
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
      </div> */}
    </>
  );
};
export default Products;
