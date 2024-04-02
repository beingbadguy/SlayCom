import { useEffect, useState } from 'react';
import React from 'react';

const TimerSlider = () => {
  const [slider, setSlider] = useState(0);
  useEffect(() => {
    if (slider < 2400) {
      setTimeout(() => {
        setSlider(slider + 400);
      }, 2000);
      //   console.log(slider);
    } else {
      setSlider(0);
    }
  }, [slider]);

  return (
    <div>
      <div className='md:w-[95%] h-[80%] duration-2000 delay-5000 overflow-x-hidden  ml-10 mr-10 mb-10'>
        <div className={`flex translate-x-[-${slider}px] transition gap-20 `}>
          <img
            src='https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2612&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='h-[300px] md:h-[600px]'
          />
          <img
            src='https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=2679&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='h-[300px] md:h-[600px]'
          />
          <img
            src='https://images.unsplash.com/photo-1571867424485-369464ed33cc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='h-[300px] md:h-[600px]'
          />
          <img
            src='https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='h-[300px] md:h-[600px]'
          />
          <img
            src='https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=2525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='h-[300px] md:h-[600px]'
          />
          <img
            src='https://images.unsplash.com/photo-1610136649349-0f646f318053?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='h-[300px] md:h-[600px]'
          />
          <img
            src='https://images.unsplash.com/photo-1585387015210-403b7652291f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='h-[300px] md:h-[600px]'
          />
          <img
            src='https://images.unsplash.com/photo-1508204444-a2df673be7d5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='h-[300px] md:h-[600px]'
          />
        </div>
      </div>
    </div>
  );
};
export default TimerSlider;
