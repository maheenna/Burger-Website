import React from 'react'
import img1 from '../../../../public/image/f1.jpg'
import img2 from '../../../../public/image/f2.jpg';
import img3 from '../../../../public/image/f3.jpg';
import Image from 'next/image'

const Feature = () => {
    return (
        <div className='pt-[5rem] pb-[3rem]'>
            <h1 className='heading'>
                Burgers made with <br /> love and
                <span className='text-red-600'> Care</span>
            </h1>
            {/* cards */}

            <div className='w-[50%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>
                {/* 1st card */}
                <div>
                    <div className='p-6 hover:bg-white rounded-lg transition-all'>
                        <Image src={img1} alt='Burger' className='rounded-3xl' />
                        <h1 className='mt-[1.5rem] font-semibold text-black text-center text-[24px]'>Our Burgers</h1>
                        <p className='text-center text-black opacity-60 mt-[0.2rem]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa eius doloribus vitae vel similique! Dolorum, laborum mollitia aspernatur illum, tempore nam odit quae corrupti, ipsam excepturi earum illo labore!
                        </p>
                    </div>
                </div>

                {/* 2nd card */}
                <div>
                    <div className='p-6 hover:bg-white rounded-lg transition-all lg:translate-y-[3rem]'>
                        <Image src={img2} alt='Burger' className='rounded-3xl' />
                        <h1 className='mt-[1.5rem] font-semibold text-black text-center text-[24px]'>Your opinion is important</h1>
                        <p className='text-center text-black opacity-60 mt-[0.2rem]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa eius doloribus vitae vel similique! Dolorum, laborum mollitia aspernatur illum, tempore nam odit quae corrupti, ipsam excepturi earum illo labore!
                        </p>
                    </div>
                </div>

                {/* 3rd card */}
                <div>
                    <div className='p-6 hover:bg-white rounded-lg transition-all'>
                        <Image src={img3} alt='Burger' className='rounded-3xl' />
                        <h1 className='mt-[1.5rem] font-semibold text-black text-center text-[24px]'>Chicken Burgers</h1>
                        <p className='text-center text-black opacity-60 mt-[0.2rem]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa eius doloribus vitae vel similique! Dolorum, laborum mollitia aspernatur illum, tempore nam odit quae corrupti, ipsam excepturi earum illo labore!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature