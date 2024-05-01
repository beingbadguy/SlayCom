import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiBrassEye } from 'react-icons/gi';
import { GiBurningEye } from 'react-icons/gi';
import { useState, useRef } from 'react';
const Login = () => {
  const [pass, unsee] = useState(false);
  const myPass = useRef();
  return (
    <div className=' flex-col md:flex-row flex items-center justify-between  gap-10 p-4'>
      <div className='w-[100%] md:w-[50%]  bg-black'>
        <h1 className='absolute left-[40%] md:left-[15%] p-2 font-bold'>
          {/* <NavLink to='/'>Slayyyyy</NavLink> */}
        </h1>
        <img
          src='/chair.png'
          alt=''
          className='h-[40vh] sm:h-[60vh] md:h-[100vh] w-[100%] object-cover'
        />
      </div>
      <div className='w-[100%] md:w-[50%] flex flex-col justify-center pl-6  md:pl-20  '>
        <h1 className='text-2xl my-2'>Log In</h1>
        <p className='mt-2'>
          Don't have an account ?
          <span className=' ml-2 text-[#38CB89]'>
            <NavLink to='/sign'>Sign Up</NavLink>
          </span>
        </p>
        <form action='' className='my-4 flex gap-6 md:gap-10 flex-col w-[90%] md:w-[70%] '>
          <input
            type='email'
            className=' border-b-2 p-2 outline-none'
            placeholder='Email address'
          />
          <div className='flex items-center relative '>
            <input
              ref={myPass}
              type='password'
              className=' border-b-2 w-[100%] p-2 outline-none'
              placeholder='Password'
            />
            <div
              onClick={() => {
                unsee(!pass);
                pass ? (myPass.current.type = 'password') : (myPass.current.type = 'text');
              }}
            >
              {!pass ? (
                <GiBrassEye className='absolute right-2 top-2 w-6 h-6 ' />
              ) : (
                <GiBurningEye className='absolute right-2 top-2 w-6 h-6 ' />
              )}
            </div>
          </div>
          <div className='flex gap-2 items-center'>
            <input type='checkbox' name='' id='' />
            <p>
              I agree with <span className='text-black font-bold'>Privacy Policy</span> and
              <span className='text-black font-bold'> Terms of use</span>
            </p>
          </div>
          <Link to='/'>
            <button type='submit' className='p-3 bg-black text-white rounded-xl w-[100%]'>
              Sign Up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
