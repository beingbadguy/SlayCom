import { menuContext } from '../context/Context';
import React from 'react';
import { useContext } from 'react';
import { IoIosClose } from 'react-icons/io';
const Wishlist = () => {
  const { wishlist, setWishlist } = useContext(menuContext);
  let totalCost = wishlist.reduce((acc, price) => acc + price.price, 0);
  console.log(totalCost);

  return (
    <div className='p-6'>
      <h1>Your Wishlist ({wishlist.length})</h1>
      {wishlist.length <= 0 ? (
        <h2 className='h-[44vh] flex items-center justify-center'>
          Add some products to the wishlist...
        </h2>
      ) : (
        ''
      )}

      {wishlist.map((item, index) => (
        <div key={index} className='flex mt-4 items-center justify-between gap-6'>
          <img src={item.thumbnail} alt='' className='h-[100px] w-[100px]' />
          <p>{item.title}</p>
          <p>${item.price}</p>
          <div
            onClick={() => {
              const updatedWishlist = [...wishlist];
              updatedWishlist.splice(index, 1);
              setWishlist(updatedWishlist);
            }}
            className='text-2xl cursor-pointer'
          >
            <IoIosClose />
          </div>
        </div>
      ))}
      <div className='font-bold mt-10'>
        <p>Total Cost - ${totalCost}</p>
      </div>
    </div>
  );
};
export default Wishlist;
