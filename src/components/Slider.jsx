import { useState } from 'react';
import { FaCaretRight } from 'react-icons/fa6';
import { FaCaretLeft } from 'react-icons/fa6';
import React from 'react';

const Slider = () => {
  const [slider, setSlider] = useState(0);

  return (
    <>
      <div className='relative bottom-[0%] hidden md:flex '>
        <div
          onClick={() => {
            if (slider < 0) {
              setSlider(slider + 600);
            } else {
              setSlider(0);
            }
          }}
          className='text-3xl cursor-pointer absolute top-[350px]   left-[1%] '
        >
          <FaCaretLeft />
        </div>
        <div
          onClick={() => {
            if (slider > -4540) {
              setSlider(slider - 1110);
            } else {
              setSlider(0);
            }
          }}
          className='text-3xl cursor-pointer absolute top-[350px] right-[1%]'
        >
          <FaCaretRight />
        </div>
      </div>
      <p className='text-center font-bold md:hidden'> Slide over to see the slider </p>

      {/* slider  */}
      <div className='overflow-hidden ml-0 sm:ml-16 w-[100%] sm:w-[90%]'>
        <div
          className={` flex translate-x-[${slider}px] overflow-auto md:overflow-visible transition-all duration-1000 gap-10  m-10  `}
        >
          <img
            src='https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='h-[300px]  md:h-[700px]'
          />
          <img
            src='https://images.unsplash.com/photo-1567958451986-2de427a4a0be?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='h-[300px] md:h-[700px]'
          />
          <img
            src='https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='h-[300px] md:h-[700px]'
          />
          <img
            src='https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='h-[300px] md:h-[700px]'
          />
          <img
            src='https://images.unsplash.com/photo-1552867544-184c9903cddf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='h-[300px] md:h-[700px]'
          />
          <img
            src='https://images.unsplash.com/photo-1600185365778-7875a359b924?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='h-[300px] md:h-[700px]'
          />
          <img
            src='https://images.unsplash.com/photo-1613461920867-9ea115fee900?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='h-[300px] md:h-[700px]'
          />
        </div>
      </div>
    </>
  );
};
export default Slider;
