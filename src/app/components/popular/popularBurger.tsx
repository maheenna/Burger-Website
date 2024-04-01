'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BurgerCards from './BurgerCards';

const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slideToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slideToSlide: 1
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slideToSlide: 1
  }
};

const PopularBurger = () => {
  return (
    <div className='pt-[3rem] pb-[3rem] '>
      <h1 className='heading'>More Than <span className='text-blue-600'> 5 Million Users</span></h1>
      <div className='w-[80%] mt-[4rem] mx-auto'>
        <Carousel additionalTransfrom={0} autoPlay={true} autoPlaySpeed={4000} arrows={true} centerMode={false} infinite responsive={responsive} itemClass='item' showDots={false}>

          <BurgerCards 
          title="Emily Johnson" 
          image="/image/user2.avif" 
          
          price="10.88$" />

<BurgerCards 
          title="William Smith"
          image="/image/user3.avif" 
          
          price="12.88$" />

<BurgerCards 
          title="James Brown" 
          image="/image/user5.jpg" 
          
          price="15.88$" />

<BurgerCards 
          title="Olivia Taylor" 
          image="/image/user2.avif" 
          
          price="23.88$" />

<BurgerCards 
          title="Benjamin Wilson" 
          image="/image/user3.avif" 
         
          price="16.88$" />

<BurgerCards 
          title="Charlotte Davies" 
          image="/image/user5.jpg" 
          
          price="23.88$" />

<BurgerCards 
          title="Alexander Evans" 
          image="/image/user2.avif" 
          
          price="23.88$" />

<BurgerCards 
          title="Sophia Clark" 
          image="/image/user3.avif" 
          
          price="10.88$" />

<BurgerCards 
          title="Jacob Roberts" 
          image="/image/user5.jpg" 
          
          price="15.88$" />
        </Carousel>
      </div>
    </div>
  )
}

export default PopularBurger