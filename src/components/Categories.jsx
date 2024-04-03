import React from 'react';

const Categories = () => {
  return (
    <div className='m-8 sm:m-16 '>
      <h1>Shopping by Categories</h1>
      <div className='flex justify-evenly mt-6 gap-6 sm:gap-0 flex-wrap z-0'>
        <div className='flex flex-col items-center justify-center gap-2 font-bold  '>
          <div className='flex item-center justify-center'>
            <img
              src='/cat-1.png'
              alt=''
              className='rounded-[50%] bg-black transition cursor-pointer h-[100px] sm:h-auto  hover:scale-[0.9] '
            />
          </div>
          <p>
            T-shirt<sup>10</sup>
          </p>
        </div>
        <div className='flex flex-col items-center gap-2 font-bold'>
          <div className='flex item-center justify-center'>
            <img
              src='/cat-2.png'
              alt=''
              className='rounded-[50%] bg-black transition cursor-pointer h-[100px] sm:h-auto  hover:scale-[0.9] '
            />
          </div>
          <p>
            Long-sleeves<sup>18</sup>
          </p>
        </div>
        <div className='flex flex-col items-center gap-4 font-bold'>
          <div className='flex item-center justify-center '>
            <img
              src='/cat-1.png'
              alt=''
              className='rounded-[50%] bg-black transition cursor-pointer h-[100px] sm:h-auto  hover:scale-[0.9] '
            />
          </div>
          <p>
            Jersey<sup>12</sup>
          </p>
        </div>
        <div className='flex flex-col items-center gap-8 font-bold'>
          <div className='flex item-center justify-center'>
            <img
              src='/cat-4.png'
              alt=''
              className='rounded-[50%] bg-black transition cursor-pointer h-[100px] sm:h-auto  hover:scale-[0.9] '
            />
          </div>
          <p>
            Hoodies<sup>20</sup>
          </p>
        </div>
        <div className='flex flex-col items-center gap-2 font-bold'>
          <div className='flex item-center justify-center'>
            <img
              src='/cat-5.png'
              alt=''
              className='rounded-[50%] bg-black transition cursor-pointer h-[100px] sm:h-auto  hover:scale-[0.9]'
            />
          </div>
          <p>
            Tanktop<sup>8</sup>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Categories;
