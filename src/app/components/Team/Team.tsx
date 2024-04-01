import React from 'react'
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <h1 className='heading'>
            MEET OUR EXPERT <span className='text-blue-600'>TEAM</span>
        </h1>
        <div className='mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center'>
            <TeamCard image="/image/team1.jpg" name="John Doe" position="Frontend Developer"/>
            <TeamCard image="/image/team2.jpg" name="Kohn Doe" position="Backend Developer"/>
            <TeamCard image="/image/team3.webp" name="Hohn Doe" position="Full Stack Developer"/>
        </div>
    </div>
  )
}

export default Team