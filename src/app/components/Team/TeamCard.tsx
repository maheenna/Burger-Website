import Image from 'next/image'
import React from 'react'

interface Props {
    image: string
    name: string
    position: string
}

const TeamCard = ({ image, name, position }: Props) => {
    return (
        <div>
            <Image
                src={image}
                alt={name}
                width={400}
                height={400}
                className='mx-auto rounded-2xl' />

            <h1 className='text-[40px] text-gray-800 mt-[1.5rem] font-bold text-center '>{name}</h1>

            <p className='mt-[0.4rem] mb-[0.4rem] px-4 py-1 bg-green-600 text-white mx-auto w-fit 
            font-medium'>{position}</p>

            <p className='mx-auto text-gray-600 text-center md:w-[70%] mt-[1rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nisi  </p>
        </div>
    )
}

export default TeamCard