'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgerImage1 from "../../../../public/image/b1.png";
import BurgerImage2 from "../../../../public/image/b2.png";
import Image from 'next/image';
import { BiCycling } from 'react-icons/bi';

const Hero = () => {

    const responsive = {
        
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slideToSlide:1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slideToSlide:1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slideToSlide:1
        }
      };

  return (
    <div>
        <Carousel additionalTransfrom={0} arrows={false} autoPlay={true} autoPlaySpeed={4000} 
        centerMode={false} infinite responsive={responsive} itemClass='item' showDots={true}>

          {/* 1st Hero slide */}
            <div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-blue-950 
           md:clip_path'>
              <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto'>
                {/* Image */}
                <Image src={BurgerImage1} alt='Burger' className='hidden md:block'/>
                {/* Text  */}
                <div >
                  <h1 className='text-[40px] font-semibold text-yellow-400'>Fast Food Burger</h1>
                  <h1 className='text-[90px] font-bold text-white uppercase leading-[5rem]'>
                    Best <br /> Burgers
                  </h1>
                  <p className='mt-[1rem] text-white opacity-70 text-[18px]'>
                  Discover a symphony of flavors in every bite of our handcrafted burgers. Juicy patties, fresh veggies, and savory sauces unite for an unforgettable taste sensation.
                  </p>

                  <button className=' mt-[2rem] px-8 py-3 text-[16px] bg-green-500 transition-all duration-200 hover:bg-green-700 flex rounded-md item-center space-x-2 text-white'>
                        <span>
                            <BiCycling className='w-[1.7rem] sm:h-[1.7rem]' />
                        </span>
                        <span className='font-bold'>
                            Order Now
                        </span>
                    </button>
                </div>
              </div>
            </div>

          {/* 2nd Hero slide */}
          <div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-red-950 
           md:clip_path'>
              <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto'>
                {/* Image */}
                <Image src={BurgerImage2} alt='Burger' className='hidden md:block'/>
                {/* Text  */}
                <div >
                  <h1 className='text-[40px] font-semibold text-yellow-400'>Tasty Burger</h1>
                  <h1 className='text-[90px] font-bold text-white uppercase leading-[5rem]'>
                    Top <br /> Burgers
                  </h1>
                  <p className='mt-[1rem] text-white opacity-70 text-[18px]'>
                  Discover a symphony of flavors in every bite of our handcrafted burgers. Juicy patties, fresh veggies, and savory sauces unite for an unforgettable taste sensation.
                  </p>

                  <button className=' mt-[2rem] px-8 py-3 text-[16px] bg-blue-500 transition-all duration-200 hover:bg-green-700 flex rounded-md item-center space-x-2 text-white'>
                        <span>
                            <BiCycling className='w-[1.7rem] sm:h-[1.7rem]' />
                        </span>
                        <span className='font-bold'>
                            Order Now
                        </span>
                    </button>
                </div>
              </div>
            </div>

        </Carousel>
    </div>
  )
}

export default Hero