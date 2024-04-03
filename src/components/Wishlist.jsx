import { MdDelete } from 'react-icons/md';
import { IoIosClose } from 'react-icons/io';
import React, { useContext } from 'react';
import { useState } from 'react';
import { menuContext } from '../context/Context';
const Wishlist = ({ wish }) => {
  const showWishList = useContext(menuContext);
  let toggleWishlist = showWishList.wishStatus;
  let wishHeart = wish.filter((item) => item.status === true);
  const [removeWish, setremoveWish] = useState(false);

  // console.log(wishHeart);

  return (
    <div
      className={`absolute top-0 bg-white h-auto min-h-[100vh] w-[100%] transition duration-1000 border-b-2 border-black  ${
        toggleWishlist ? 'translate-x-[-200%]' : 'translate-x-0'
      }  `}
    >
      <div className='flex items-center justify-between p-5'>
        <h1 className='pl-12 mb-2'>Wishlist ({wishHeart.length})</h1>
        <div
          onClick={() => {
            showWishList.setwishStatus((toggleWishlist = true));
          }}
        >
          <IoIosClose className='h-10 w-10 cursor-pointer' />
        </div>
      </div>

      <hr />
      {wishHeart.length === 0 ? (
        <h1 className='p-20'>Your wishlist is empty, kindly add items to the wishlist </h1>
      ) : (
        ''
      )}
      {}
      <div className='p-12 flex flex-wrap justify-center'>
        {wishHeart.map((item, index) => (
          <div
            key={index}
            className='border border-slate-200 rounded-xl flex flex-col flex-wrap items-start  m-6  '
          >
            <img
              src={`${item.image}`}
              className=' rounded-xl p-1 border w-[200px]  h-[200px] object-cover cursor-pointer'
              alt=''
            />
            <p className='font-semibold text-xl p-1'>{item.name}</p>
            <div className='flex items-center justify-between  w-[200px] p-2'>
              <p id='price' className='italic p-1'>
                {item.price}
              </p>
              <div
                onClick={() => {
                  let updateRemove = [...wishHeart];
                  updateRemove[index].status = false;
                  setremoveWish(updateRemove);
                  console.log(updateRemove[index].status);
                }}
              >
                <MdDelete className='cursor-pointer' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Wishlist;
