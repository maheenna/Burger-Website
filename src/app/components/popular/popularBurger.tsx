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
      <h1 className='heading'>Our Popular <span className='text-red-600'> Burgers</span></h1>
      <div className='w-[80%] mt-[4rem] mx-auto'>
        <Carousel additionalTransfrom={0} autoPlay={true} autoPlaySpeed={4000} arrows={true} centerMode={false} infinite responsive={responsive} itemClass='item' showDots={false}>

          <BurgerCards 
          title="Beefy Bite" 
          image="/image/b1.png" 
          reviews="6" 
          price="10.88$" />

<BurgerCards 
          title=" Chipotle Burger"
          image="/image/b2.png" 
          reviews="28" 
          price="12.88$" />

<BurgerCards 
          title="Zinger Burger" 
          image="/image/b3.png" 
          reviews="10" 
          price="15.88$" />

<BurgerCards 
          title="Chicken Burger" 
          image="/image/b4.png" 
          reviews="57" 
          price="23.88$" />

<BurgerCards 
          title="Patty Burger" 
          image="/image/b5.png" 
          reviews="34" 
          price="16.88$" />

<BurgerCards 
          title="Swiss Burger" 
          image="/image/b6.png" 
          reviews="6" 
          price="23.88$" />

<BurgerCards 
          title="Cheddar Burger" 
          image="/image/b7.png" 
          reviews="43" 
          price="23.88$" />

<BurgerCards 
          title="Beefy Bite" 
          image="/image/b8.png" 
          reviews="6" 
          price="10.88$" />

<BurgerCards 
          title="Veggie Supreme Burger" 
          image="/image/b9.png" 
          reviews="16" 
          price="15.88$" />
        </Carousel>
      </div>
    </div>
  )
}

export default PopularBurger