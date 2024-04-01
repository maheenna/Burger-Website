import React from 'react'
import person1 from '../../../../public/image/person1.webp'
import person2 from '../../../../public/image/person2.jpg';
import person3 from '../../../../public/image/person3.jpg';
import Image from 'next/image'

const Feature = () => {
    return (
        <div className='pt-[5rem] pb-[3rem]'>
            <h1 className='heading'>
            Empowering Users Through  <br /> 
                <span className='text-blue-600'>Seamless Experiences </span>
            </h1>
            {/* cards */}

            <div className='w-[50%] md:w-[80%] mt-[2rem] md:mt-[3rem] mb-[3rem] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>
                {/* 1st card */}
                <div>
                    <div className='p-6 hover:bg-white rounded-lg transition-all'>
                        <Image src={person1} alt='Person' className='rounded-3xl' />
                        <h1 className='mt-[1.5rem] font-semibold text-black text-center text-[24px]'>John Doe</h1>
                        <p className='text-center text-black opacity-60 mt-[0.2rem]'>
                        Absolutely delighted with the service! From start to finish, the team went above and beyond to ensure a seamless experience. Highly recommend!
                        </p>
                    </div>
                </div>

                {/* 2nd card */}
                <div>
                    <div className='p-6 hover:bg-white rounded-lg transition-all lg:translate-y-[3rem]'>
                        <Image src={person2} alt='Burger' className='rounded-3xl' />
                        <h1 className='mt-[1.5rem] font-semibold text-black text-center text-[24px]'>Kohn Doe</h1>
                        <p className='text-center text-black opacity-60 mt-[0.2rem]'>
                        Impressed beyond words! The product exceeded my expectations, and the customer support was exceptional. Will definitely be a returning customer!"
                        </p>
                    </div>
                </div>

                {/* 3rd card */}
                <div>
                    <div className='p-6 hover:bg-white rounded-lg transition-all'>
                        <Image src={person3} alt='Burger' className='rounded-3xl' />
                        <h1 className='mt-[1.5rem] font-semibold text-black text-center text-[24px]'>Franklin</h1>
                        <p className='text-center text-black opacity-60 mt-[0.2rem]'>
                        Incredible attention to detail! The quality of the product speaks volumes about the dedication of the team behind it. 5 stars without a doubt!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature