import React, { useState } from 'react';
import { useContext } from 'react';
import { menuContext } from '../context/Context';
import { MdDelete } from 'react-icons/md';
import { IoIosClose } from 'react-icons/io';

const Cart = ({ cart }) => {
  const context = useContext(menuContext);
  let ProItems = context.cartStatus;

  let newCartArray = cart.filter((item) => item.isAddedToCart === true);
  let Newprice = newCartArray.reduce((acc, item) => acc + item.price, 0);
  //   console.log(Newprice);
  const [removeCart, setremoveCart] = useState([]);

  return (
    <>
    
      <div
        className={`${
          ProItems ? 'translate-x-[-200%]' : ' translate-x-0'
        } bg-white w-[100%] min-h-[100vh] absolute top-0 transition duration-1000 mb-20`}
      >
        <div className='flex items-center justify-between p-5 '>
          <h1 className='pl-12 mb-2'>Cart ({newCartArray.length})</h1>

          <div
            onClick={() => {
              context.setcartStatus((ProItems = true));
            }}
          >
            <IoIosClose className='h-10 w-10 cursor-pointer ' />
          </div>
        </div>

        <hr />

        {/* <p>{Newprice}</p> */}
        <div className='p-1 flex flex-wrap'>
          {newCartArray.map((item, index) => (
            <div
              key={index}
              className='border border-slate-200 rounded-xl flex flex-row items-center gap-4 md:gap-20  m-6 w-[90%] justify-between  '
            >
              <img
                src={`${item.image}`}
                className=' rounded-xl p-1 border w-[100px]  h-[100px] object-cover cursor-pointer'
                alt=''
              />
              <div className='flex items-center justify-between '>
                <p className='font-semibold text-xl p-1'>{item.name}</p>
              </div>
              <div className='flex items-center justify-between '>
                <p id='price' className=' p-1'>
                  ${item.price}
                </p>
              </div>
              <div
                onClick={() => {
                  const remArr = [...newCartArray];
                  remArr[index].isAddedToCart = false;
                  setremoveCart(remArr);
                }}
              >
                <MdDelete className='cursor-pointer w-6 h-6' />
              </div>
              {/* <input type='number' className=' border border-slate-900 w-10 mr-2 p-2' maxLength={2} /> */}
            </div>
          ))}

          {newCartArray.length == 0 ? (
            <h1 className='p-12'>
              You don't have anything in your cart, add something to checkout!
            </h1>
          ) : (
            <div className='flex'>
              <h1 className='p-12  '>Your bill: {Newprice}</h1>
              <button className='border border-black bg-green-300   m-12 p-1 '>Checkout</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
