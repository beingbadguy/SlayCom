import { BsThreads } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import React from 'react';

const Testimonial = () => {
  return (
    <div className='bg-white text-black p-6 w-[150px] h-[250px] md:h-auto  md:w-[400px]  rounded text-[10px] md:text-sm border'>
      <div className='flex items-start justify-start gap-2'>
        <CgProfile className=' w-[20px] h-[20px] md:w-[50px] md:h-[50px] ' />
        <div>
          <p>Aman Kumar</p>
          <span>@beingbadguy</span>
        </div>
        <BsThreads className='ml-[120px] w-[20px] h-[20px] hidden md:block' />
      </div>
      <p className='mt-6'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam magni aliquid libero
        necessitatibus porro vel voluptas. Necessitatibus quidem minus impedit et? Nihil illo
        numquam libero voluptatibus quae, eligendi maxime hic.
      </p>
    </div>
  );
};
export default Testimonial;
