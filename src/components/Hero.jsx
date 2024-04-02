import React from 'react';

const Hero = () => {
  return (
    <div className='flex justify-evenly items-center m-8 gap-2  '>
      <div id='banner-1' className=' flex flex-col gap-2 p-10 '>
        <h1 className='text-xl font-bold'>
          Our One-Stop Shop for Everything <br /> You Need!
        </h1>
        <p>Browse, Click, Buy – It's That Simple!</p>
        <button className='w-[140px] bg-green-300 p-2 cursor-pointer  hover:border-green-300 hover:bg-transparent hover:border-2'>
          Shop here!
        </button>
      </div>
      <div id='banner-2' className=' hidden border sm:flex flex-col gap-2 p-4  relative  '>
        <h1 className='text-xl font-bold absolute bottom-20 pb-8'>
          Elevate Your Shopping Experience <br /> Today!
        </h1>
        <p className='absolute bottom-14 pb-6'>Shop 'til You Drop! Unbeatable Deals Await.</p>
        <button className='w-[140px] bg-green-300 p-2 cursor-pointer absolute bottom-2 mb-6'>
          Click me!
        </button>
      </div>
    </div>
  );
};
export default Hero;
