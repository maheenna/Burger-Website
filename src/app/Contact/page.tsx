import React from 'react'
import { GrRestaurant } from 'react-icons/gr'

const Contact = () => {
    return (
        <div className='flex justify-center items-center w-[100%] h-[100vh]'>
      <div className='max-w-md w-full mx-auto bg-gray-800 rounded-lg shadow-md p-12'>
        <h2 className='text-3xl text-center text-yellow-600 font-bold mb-6'>Contact Us</h2>
        <form action="">
            <div className='mb-4'>
                <label htmlFor="" className='block text-white text-sm font-semibold mb-2 '>Your Name</label>
                <input placeholder='John' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500'
                required type="text" />
            </div>
            <div className='mb-4' >
                <label htmlFor="" className='block text-white text-sm font-semibold mb-2 '>Your Email</label>
                <input type="email" placeholder='john@examle.com' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500'
                required />
            </div>
            <div className='flex justify-center'>
                <button type='submit' className='bg-yellow-300 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-800 focus:outline-white '>Submit</button>
            </div>
        </form>
      </div>
       </div>
    
    )
}

export default Contact