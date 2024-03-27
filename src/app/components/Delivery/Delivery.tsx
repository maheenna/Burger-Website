import Image from 'next/image'
import React from 'react'
import deliveryboy from "../../../../public/image/delivery.svg"
import { RiEBike2Fill } from 'react-icons/ri'
import { IoFastFood } from 'react-icons/io5'
import { BsDoorOpen } from 'react-icons/bs'

const Delivery = () => {
    return (
        <div className='pt-[8rem] pb-[3rem]'>
            <div className='w-[80%] grid items-center mx-auto grid-cols-1 lg:grid-cols-2 gap-[3rem'>
                {/* Image */}
                <div>
                    <Image src={deliveryboy} alt='delivery' />
                </div>
                {/* Text */}
                <div>
                    <h1 className='uppercase text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem] '>Your <span className='text-red-600'>Favourite Burger </span> On the Way</h1>
                    <p className='mt-[2rem] text-black text-[17px] text-opacity-70 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus sit qui nesciunt assumenda repudiandae, quo, ab alias voluptates, cumque animi atque. Laborum molestias mollitia accusantium amet, quas illo quos.</p>
                    
                    <div className='flex items-center space-x-3 mt-[2rem]'>
                        <RiEBike2Fill className='w-[2rem] h-[2rem] text-red-600'/>
                        <h1 className='text-[17px] text-black font-medium uppercase'>Delivery in 30 minutes</h1>
                    </div>
                    <div className='flex items-center space-x-3 mt-[1rem]'>
                        <IoFastFood className='w-[2rem] h-[2rem] text-red-600'/>
                        <h1 className='text-[17px] text-black font-medium uppercase'>Free shipping from 75$</h1>
                    </div>
                    <div className='flex items-center space-x-3 mt-[1rem]'>
                        <BsDoorOpen className='w-[2rem] h-[2rem] text-red-600'/>
                        <h1 className='text-[17px] text-black font-medium uppercase'>Delivery on your doorstep</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery