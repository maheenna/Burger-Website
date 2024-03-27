import React from 'react'
import { BiPhone } from 'react-icons/bi'
import Reservationform from './Reservationform'

const Reservation = () => {
  return (
    <div className="pt-[5rem] bg-center bg-cover relative mt-[2rem] pb-[5rem] mb-[3rem] bg-[url('/image/bg-black.jpg')]">
        {/* overlap */}
        <div className='absolute w-full h-full bg-[#000000a6] top-0 right-0 bottom-0 left-0'>

        </div>
        <div className='w-[80%] relative z-[20] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]'>
            {/* Text */}
            <div>
                <h1 className='text-[30px] md:text-[40px] lg:text-[50px] text-white font-bold leading-[3rem]md:leading-[4rem]'>
                    DO YOU HAVE ANY DINNER PLAN TODAY? RESERVE YOUR TABLE
                </h1>
                <p className='text-[17px] mt-[1rem] text-white text-opacity-50 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illo repellat voluptatem quaerat aspernatur dicta delectus rem quae  </p>
                <div className='items-center flex mt-[2rem] space-x-4'>
                    <div className='w-[4rem] h-[4rem] flex items-center bg-red-500 rounded-full justify-center flex-col'>
                      <BiPhone className='w-[1.7rem] h-[1.7rem] text-white'/>
                    </div>
                    <div>
                      <h1 className='text-[25px] text-white font-semibold'>Quick Order 24/7</h1>
                      <h1 className='text-[30px] text-yellow-300 font-bold'>+0123 567 890</h1>
                    </div>
                </div>
            </div>
            {/* Reservation */}
            <Reservationform/>
            <div></div>
        </div>
    </div>
  )
}

export default Reservation