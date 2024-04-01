import React from 'react'

import Hero from './Hero/Hero'
import Feature from './features/Feature'
import PopularBurger from './popular/popularBurger'
import Team from './Team/Team'
import Newsletter from './Newsletter/Newsletter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Feature/>
      <PopularBurger/>
      <Team/>
      <Newsletter/>
    </div>
  )
  
}

export default Home