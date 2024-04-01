import Link from 'next/link'
import React from 'react'
import { BiCycling, BiShoppingBag } from 'react-icons/bi'
import { FaBurger } from 'react-icons/fa6'
import { HiBars3BottomRight } from 'react-icons/hi2'

interface Props {
    openNav : ()=> void
}

const Nav = ({openNav}:Props) => {
    return (
        <div className='h-[12vh] bg-white'>
            <div className='sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between'>

                {/* logo design */}
                <div className='flex items-center space-x-2'>

                    
                    <h1 className='text-[20px] sm:text-[30px] font-semibold'>AncestorHub</h1>
                </div>
                {/* Nav Links */}

                <ul className='hidden lg:flex items-center space-x-10'>
                    <li>
                        <Link className='text-[20px] font-medium hover:text-red-600' href='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='text-[20px] font-medium hover:text-red-600' href='/About'>About</Link>
                    </li>
                    <li>
                        <Link className='text-[20px] font-medium hover:text-red-600' href='/FQA'>FQA</Link>
                    </li>
                    <li>
                        <Link className='text-[20px] font-medium hover:text-red-600' href='/Profile'>Profile</Link>
                    </li>
                    <li>
                        <Link className='text-[20px] font-medium hover:text-red-600' href='/Contact'>Contact</Link>
                    </li>
                </ul>
                <div className='flex items-center space-x-4'>
                    <button className='px-6 py-2 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-blue-950 transition-all duration-200 hover:bg-blue-600 flex rounded-md item-center space-x-2 text-white'>
                        <span>
                            <BiCycling className='w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]' />
                        </span>
                        <span className='font-bold'>
                            Order Now
                        </span>
                    </button>
                    <button className='sm:px-6 sm:py-3 px-4 py-2 hover:bg-green-700 transition-all duration-200 bg-black flex items-center rounded-md text-white'>
                        <BiShoppingBag className='w-[1.3rem] h-[1.3rem] sm:w-[1.7rem] sm:h-[1.7rem]' />
                    </button>
                    <HiBars3BottomRight onClick={openNav} className='lg:hidden h-[2rem] w-[2rem] text-black' />
                </div>
            </div>
        </div>
    )
}

export default Nav