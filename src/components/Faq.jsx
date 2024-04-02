import { useState } from 'react';
import { FaCaretLeft } from 'react-icons/fa';
import React from 'react';


const Faq = (props) => {
  const [faq, setfaq] = useState(true);

  return (
    <>
      <div
        className={`  ${
          faq ? 'h-12 md:h-10' : ' h-[150px] md:h-[100px]'
        } overflow-hidden transition-all w-[400px] md:w-[600px]`}
      >
        <div className=' bg-green-100 flex justify-between items-center '>
          <p className=' overflow-hidden h-22 transition duration-1000  p-2 font-bold'>
            {props.que}
          </p>
          <div
            onClick={() => {
              setfaq(faq ? false : true);
            }}
          >
            <FaCaretLeft
              className={`w-10 h-10 cursor-pointer ${
                faq ? 'rotate-0' : '-rotate-90 '
              } transition-all `}
            />
          </div>
        </div>
        <p className='p-2 '>{props.ans}</p>
      </div>
    </>
  );
};
export default Faq;
