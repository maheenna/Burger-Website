'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import medicine1 from "../../../../public/image/medicine1.jpg";
import medicine2 from "../../../../public/image/medicine2.jpg";
import Image from 'next/image';
import { BiCycling, BiDownload } from 'react-icons/bi';

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
              <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[1rem] mx-auto'>
                {/* Image */}
                <Image src={medicine1} alt='Digital Art' className='hidden md:block h-[400px] w-[400px]'/>
                {/* Text  */}
                <div >
                  <h1 className='text-[40px] md:text-[50px] font-semibold text-yellow-400'>ANCESTORHUB</h1>
                  
                  <p className='mt-[1rem] text-white opacity-70 text-[18px]'>
                  It's simple, A secure digital health identity for members, enabling privacy focused healthcare access
                  </p>

                  <button className=' mt-[2rem] px-8 py-3 text-[16px] bg-green-500 transition-all duration-200 hover:bg-green-700 flex rounded-md item-center space-x-2 text-white'>
                        <span>
                            <BiDownload className='w-[1.7rem] sm:h-[1.7rem]' />
                        </span>
                        <span className='font-bold'>
                            Download Now
                        </span>
                    </button>
                </div>
              </div>
            </div>

          {/* 2nd Hero slide */}
          <div className='w-[100%] h-[88vh] flex items-center justify-center flex-col bg-gray-800 
           md:clip_path'>
              <div className='w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[1rem] mx-auto'>
                {/* Image */}
                <Image src={medicine2} alt='Digital Art' className='hidden md:block h-[400px] w-[400px]'/>
                {/* Text  */}
                <div >
                  <h1 className='text-[40px] md:text-[50px] font-semibold text-yellow-400'>ANCESTORHUB</h1>
                  
                  <p className='mt-[2rem] text-white opacity-70 text-[18px]'>
                  It's simple, A secure digital health identity for members, enabling privacy focused healthcare access
                  </p>

                  <button className=' mt-[2rem] px-8 py-3 text-[16px] bg-blue-500 transition-all duration-200 hover:bg-blue-700 flex rounded-md item-center space-x-2 text-white'>
                        <span>
                            <BiDownload className='w-[1.7rem] sm:h-[1.7rem]' />
                        </span>
                        <span className='font-bold'>
                            Download Now
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