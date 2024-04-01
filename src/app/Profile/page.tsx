import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa6';

const Profile = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center loginpage'>
      <div className='w-[90%] md:w-[32%] h-auto py-10 px-6 md:px-12 rounded-xl logincard'>
        <h1 className='text-[1.475rem] text-white font-semibold mb-1'>Sign In</h1>
        <p className='text-sm text-gray-300 font-normal mb-8'>
          Welcome back, you've been missed
        </p>
        <div className='w-full h-auto flex flex-col gap-4 md:flex-row md:gap-7'>
          <button className='w-full md:w-1/2 h-12 p-4 outline-none justify-center bg-transparent border-[2px] border-gray-200/40 text-white rounded-md flex items-center gap-x-2 hover:bg-gray-100/10 ease-out duration-700'>
            <FaGoogle/> Google
          </button>
          <button className='w-full md:w-1/2 h-12 p-4 outline-none justify-center bg-transparent border-[2px] border-gray-200/40 text-white rounded-md flex items-center gap-x-2 hover:bg-gray-100/10 ease-out duration-700'>
            <FaFacebook/> Facebook
          </button>
        </div>
        <div className='w-full h-auto flex items-center gap-x-1 my-5 '>
          <div className='w-1/2 h-[1.5px] bg-gray-200/40 rounded-md'></div>
          <p className='text-sm text-gray-300 font-normal px-2'>OR</p>
          <div className='w-1/2 h-[1.5px] bg-gray-200/40 rounded-md '></div>
        </div>
        <div className='w-full h-auto mb-5'>
          <label htmlFor="username" className='block text-white mb-1'>Username</label>
          <input type="text" id='username' className='w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-white rounded-md ' placeholder='Enter your username' />
        </div>
        <div className='w-full h-auto mb-5'>
          <label htmlFor="password" className='block text-white mb-1'>Password</label>
          <input type="password" id='username' className='w-full h-12 p-4 outline-none bg-transparent border-[2px] border-gray-200/40 text-white rounded-md ' placeholder='Enter your password' />
        </div>
        <div className='w-full h-auto flex items-center justify-between mb-5 '>
          <div className='flex items-center gap-x-2'>
            <input type="checkbox" id='remember' className='w-4 h-4 accent-gray-200 border-gray-200/20 rounded-md text-white' />
            <label htmlFor="remember" className='text text-white text-[0.875rem]'>Remember me</label>
          </div>
          <div className='w-auto h-auto '>
            <Link href="/" className='text-ehite text-sm font-medium hover:underline ease-out duration-500 text-white hover:text-black'>Forgot Password</Link>
          </div>
        </div>
        <button className='w-full h-12 outline-none bg-white/70 rounded-md text-lg text-black font-medium mb-7'>
          Sign In
        </button>
        <div className='w-full h-auto flex items-center justify-center gap-x-1'>
          <p className='text-black text-sm font-medium'>
            Don't have an account?
          </p>
          <Link href="/" className='text-black text-base font-medium hover:underline ease-out duration-500'>Create New Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
