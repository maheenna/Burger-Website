import React from 'react'

import Hero from './Hero/Hero'
import Feature from './features/Feature'
import PopularBurger from './popular/popularBurger'
import Delivery from './Delivery/Delivery'
import Team from './Team/Team'
import Reservation from './Reservation/Reservation'
import Newsletter from './Newsletter/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Feature/>
      <PopularBurger/>
      <Delivery/>
      <Team/>
      <Reservation/>
      <Newsletter/>
    </div>
  )
}

export default Home