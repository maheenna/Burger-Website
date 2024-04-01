import React from 'react'
import Carousel from 'react-multi-carousel';
import qrcode from "../../../public/image/qr_code-removebg-preview.png"
import Image from 'next/image';
import Detail from "../../../public/image/Detail.png"


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

const Slider = () => {
    return (
    <div >
        <Carousel additionalTransfrom={0} arrows={false} autoPlay={false} 
        centerMode={false} infinite responsive={responsive} itemClass='item' showDots={true}>

          {/* 1st Hero slide */}
          <div className='w-full h-[88vh] flex flex-col justify-center items-center bg-teal-400'>
  <div className='w-80% max-w-md grid grid-rows-2 justify-center items-center gap-[1rem] mx-auto'>
    {/* Image */}
    <div className='flex justify-center'>
      <Image src={qrcode} alt="QR Code" className='w-48 h-48' />
    </div>
    {/* Text */}
    <div className='text-center'>
      <h1 className='text-2xl md:text-3xl font-semibold text-white mb-4'>Simply Scan the Code</h1>
      <p className='text-white  text-lg'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, sapiente ipsa? Sed laborum sint illum rerum perspiciatis veniam facere! Neque laudantium veniam architecto. Fugiat aut eos aspernatur, magnam culpa quas!
      </p>
      
    </div>
  </div>
</div>

          {/* 2nd Hero slide */}
          <div className='w-full h-[88vh] flex flex-col justify-center items-center bg-teal-400'>
  <div className='w-80% max-w-md grid grid-rows-2 justify-center items-center gap-[1rem] mx-auto'>
    {/* Image */}
    <div className='flex justify-center'>
      <Image src={Detail} alt="Detail" className='w-48 h-48' />
    </div>
    {/* Text */}
    <div className='text-center'>
      <h1 className='text-2xl md:text-3xl font-semibold text-white mb-4'>Find Medicine Detail</h1>
      <p className='text-white  text-lg'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, sapiente ipsa? Sed laborum sint illum rerum perspiciatis veniam facere! Neque laudantium veniam architecto. Fugiat aut eos aspernatur, magnam culpa quas!
      </p>
      
    </div>
  </div>
</div>

        </Carousel>
        
        
    </div>
  )
}

export default Slider