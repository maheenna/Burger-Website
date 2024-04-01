import Image from 'next/image'
import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { FaStar } from 'react-icons/fa6'

interface Props {
  title: string
  image: string
  price: string
  
}

const BurgerCards = ({ title, image, price,  }: Props) => {

  return (
    <div className='bg-white p-6 rounded-lg m-3'>
      <div className='w-[200px] h-[200px] mx-auto'>
        <Image src={image} alt={title} width={200} height={200} className='w-[100%] h-[100%] object-cover' />
      </div>
      <h1 className='mt-[1.3rem] text-[22px] text-black font-semibold text-center'>{title}</h1>
      <div className='flex items-center mt-[0.5rem] space-x-3'>

        

      </div>
      <p className='text-black text-opacity-70 mt-[0.5rem] text-center'>Excellent product! High quality and fast delivery exceeded my expectations. Thank</p>
      
    </div>
  )
}

export default BurgerCards