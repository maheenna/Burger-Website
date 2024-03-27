import React from 'react'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <h1 className='heading'>
            MEET OUR EXPERTS <span className='text-red-600'>CHEFS</span>
        </h1>
        <div className='mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center'>
            <TeamCard image="/image/t1.jpg" name="John Doe" position="Kitchen Porter"/>
            <TeamCard image="/image/t2.jpg" name="Kohn Doe" position="Executive Chef"/>
            <TeamCard image="/image/t3.jpg" name="Hohn Doe" position="Head Chef"/>
        </div>
    </div>
  )
}

export default Team