import React from 'react'


const About = () => {
    return (
        <div>
            <div className='md:pt-[3rem] md:pb-[3rem] pt-[3rem]'>
                <h1 className='uppercase md:text-[50px] text-[40px]  text-center mt-[1.5rem] font-bold'>
                    About <span className='text-amber-800'>HVL</span>
                </h1>
                {/* cards */}

                <div className='w-[65%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[3rem]'>
                    {/* 1st card */}
                    <div>
                        <div className='p-6 hover:bg-orange-100 rounded-lg transition-all shadow-md bg-amber-100'>
                            <h1 className='mt-[1.5rem] font-semibold text-black text-center text-[24px]'>What is HLV:</h1>
                            <p className='text-center text-black opacity-60 mt-[1rem]'>
                                HLV is a cutting-edge MedTech app designed to revolutionize personalized health and wellness management. By leveraging advanced AI technology, HLV aims to empower individuals to take control of their well-being by providing them with a comprehensive suite of features and tools. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quia accusamus ducimus blanditiis?
                            </p>
                        </div>
                    </div>

                    {/* 2nd card */}
                    <div>
                        <div className='p-6 hover:bg-orange-100 shadow-md rounded-lg transition-all  bg-amber-100'>
                            <h1 className='mt-[1.5rem] font-semibold text-black text-center text-[24px]'>HLV Mission</h1>
                            <p className='text-center text-black opacity-60 mt-[1rem]'>
                                At HLV, our mission is to transform the way people approach their health and wellness. We believe that everyone deserves personalized care and support that adapts to their unique needs. With this vision in mind, we have developed HLV as a platform that seamlessly integrates various components to deliver tailored solutions, empowering individuals to optimize their health journeys.
                            </p>
                        </div>
                    </div>



                </div>

                <div className='w-[65%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[3rem]'>
                    {/* 1st card */}
                    <div>
                        <div className='p-6 hover:bg-orange-100  rounded-lg transition-all shadow-md  bg-amber-100 '>
                            <h1 className='mt-[1.5rem] font-semibold text-black text-center text-[24px]'>Headlines</h1>
                            <p className='text-center text-black opacity-60 mt-[1rem]'>
                                We are dedicated to creating an inclusive and user-centric experience, putting the power of health management directly into the hands of our users. By utilizing advanced algorithms and data analytics, we enable users to access personalized workout plans, receive tailored news content, and stay on track with their medication schedules. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, amet? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, consequatur!
                            </p>
                        </div>
                    </div>

                    {/* 2nd card */}
                    <div>
                        <div className='p-6 hover:bg-orange-100 rounded-lg transition-all shadow-md  bg-amber-100'>
                            <h1 className='mt-[1.5rem] font-semibold text-black text-center text-[24px]'>Features</h1>
                            <p className='text-center text-black opacity-60 mt-[1rem]'>
                                HLV strives to enhance health outcomes and promote holistic well-being by fostering a sense of connection and empowerment. We aim to be a trusted partner, accompanying individuals on their path to optimal health and offering guidance and support every step of the way.Join us on this transformative journey and unlock the potential of personalized health and wellness management with HLV. Together, we can create a future where individuals thrive and achieve their well-being goals.
                            </p>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    )
}

export default About;