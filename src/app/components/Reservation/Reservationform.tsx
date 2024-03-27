import React from 'react'
import { GrRestaurant } from 'react-icons/gr'

const Reservationform = () => {
    return (
        <div className='bg-green-600 p-6 rounded-lg'>
            <GrRestaurant className='w-[5rem] h-[5rem] text-white mt-[2rem] mx-auto' />
            <h1 className='font-bold uppercase text-center text-[30px] md:text-[40px] lg:text-[50px] mt-[0.5rem] text-white'>Reservation</h1>
            <p className='uppercase font-semibold text-[20px] md:text-[25px] text-white text-center'>Book your table</p>

            {/* inputs */}
            <div className='mt-[2rem]'>
                <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 w-[80%] mx-auto justify-between space-x-4'>
                    <select className='px-10 py-2.5 bg-transparent rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100' name="people" id="people">
                        <option value="1" className='text-black'>1 People</option>
                        <option value="2" className='text-black'>2 People</option>
                        <option value="3" className='text-black'>3 People</option>
                        <option value="4" className='text-black'>4 People</option>
                    </select>

                    <input type="date" className='px-10 py-2.5 bg-transparent rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100' />

                </div>

                <input type="time" className='px-10 py-2.5 block bg-transparent w-[80%] mx-auto mt-[1rem] rounded-lg outline-none font-bold text-[17px] text-white border-[2.2px] border-gray-100' />

                <div className='w-[80%] mx-auto text-center mt-[2rem]'>
                    <button className='text-[16px] px-8 py-3 rounded-lg mb-[3rem] w-full bg-blue-950 hover:bg-red-600 transition-all duration-200 text-white'>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default Reservationform