'use client'
import React from 'react'
import { FaRegCircleDot, FaStar } from 'react-icons/fa6'
import Slider from './Slider'

const Faq = () => {
  
  return (
    <div className='pt-[1rem] pb-[3rem]'>
      
      <h1 className='text-left md:ml-16 ml-6 md:text-[50px] font-bold text-[30px]'>FAQ</h1>
      <Slider/>
      <div className='md:mx-[6rem] md:w-[80%] w-[65%] pt-[2rem] mx-[3rem]'>
        <div className='flex items-center text-white space-x-2'>

            <FaStar className='h-[1.2rem] w-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-teal-400' />
            <h1 className='text-[20px] sm:text-[20px] font-semibold text-black'> How  are product rated?</h1>
          </div>
          <div className='flex items-center text-white space-x-2 pt-5 pb-5 '>

            <p className='text-[12px] sm:text-[15px] font-normal text-black  '> At HLV, we prioritize your safety and well-being by carefully analyzing and rating various products, including prescribed and Over-the-Counter (OTC) drugs. Our advanced models map the active and inactive ingredients present in a drug to your personal health information. We also consider adverse reaction data, allergies information, and user feedback to provide reliable ratings. At HLV, our commitment is to empower you with reliable and personalized information to make informed decisions about your healthcare. By leveraging advanced analysis and incorporating user feedback, we strive to provide you with the most trustworthy and up-to-date ratings for the products you use.</p>
          </div>

          <div className='flex items-center text-white space-x-2'>

            <FaStar className='h-[1.2rem] w-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-teal-400' />
            <h1 className='text-[20px] sm:text-[20px] font-semibold text-black'>  How does the scanner work?</h1>
          </div>
          <div className='flex items-center text-white space-x-2 pt-5 pb-5 '>

            <p className='text-[12px] sm:text-[15px] font-normal text-black  '>  We employ a highly reliable data capture technology on smart mobile devices to effortlessly scan barcodes, IDs, and QR codes found on various products. Our state-of-the-art scanner utilizes advanced text recognition to extract essential information, feeding it directly into our secure backend for further analysis.

To access the scanner functionality: <br />
    - Simply grant camera access to the HLV app, enabling seamless scanning capabilities. <br />
    - Ensure a stable and reliable internet connection to efficiently retrieve the necessary data.</p>
          </div>

          <div className='flex items-center text-white space-x-2'>

            <FaStar className='h-[1.2rem] w-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-teal-400' />
            <h1 className='text-[20px] sm:text-[20px] font-semibold text-black'>   How can I update my health profile?</h1>
          </div>
          <div className='flex items-center text-white space-x-2 pt-5 pb-5 '>

            <p className='text-[12px] sm:text-[15px] font-normal text-black  '>  To access and update your health profile, follow these simple steps: <br />

            - Go to your profile section, where you'll find a dedicated feature called "Health Profile." <br />
            - Look for the edit icon located on the right-hand side and tap on it. <br />
            - Upon tapping, you'll be able to select or deselect your previously chosen health conditions. <br />
            - Keep in mind that you can select a maximum of three health conditions to ensure relevance and focus. <br />
            - If you're having trouble locating your health profile, simply click on this direct link: Health Profile. <br />
        Maintaining an up-to-date health profile is crucial for personalized care and tailored recommendations. Take control of your well-being by effortlessly managing your health conditions through our user-friendly profile feat</p>
          </div>

          <div className='flex items-center text-white space-x-2'>

            <FaStar className='h-[1.2rem] w-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-teal-400' />
            <h1 className='text-[20px] sm:text-[20px] font-semibold text-black'>   How can I reach out to the HLV team?</h1>
          </div>
          <div className='flex items-center text-white space-x-2 pt-5 pb-5 '>

            <p className='text-[12px] sm:text-[15px] font-normal text-black  '>   To reach out to us, please send an email to oluowolabi12@gmail.com</p>
          </div>

          <div className='flex items-center text-white space-x-2'>

            <FaStar className='h-[1.2rem] w-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-teal-400' />
            <h1 className='text-[20px] sm:text-[20px] font-semibold text-black'>How is my data store?</h1>
          </div>
          <div className='flex items-center text-white space-x-2 pt-5 pb-5 '>

            <p className='text-[15px] sm:text-[15px] font-normal text-black  '> At HLV, we take data privacy and security very seriously. Your data is stored with the utmost care and in compliance with stringent security protocols and polices. We prioritize the confidentiality of your information and adhere to strict policies to ensure its protection. <br />

        Rest assured that we do not share or sell your data without your explicit consent. Your data remains confidential and is used solely for the purpose of providing you with personalized health and wellness services within the app. <br />
        
    </p>
          </div>

        <div className='flex items-center text-white space-x-2'>

            <FaStar className='h-[1.2rem] w-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-teal-400' />
            <h1 className='text-[20px] sm:text-[20px] font-semibold text-black'>What happens if I encounter technical issues or need assistance with the app?</h1>
          </div>
          <div className='flex items-center text-white space-x-2 pt-5 pb-5 '>

            <p className='text-[15px] sm:text-[15px] font-normal text-black  '>
        
    What happens if I encounter technical issues or need assistance with the app?
        At HLV, we strive to provide a seamless and user-friendly experience. If you encounter any technical issues or need assistance, our dedicated support team is here to help. Please reach out to our support team via the "Contact Us" section within the app, and provide as much detail as possible about the problem you are facing. Our team will promptly investigate the issue and provide you with the necessary guidance and support to resolve it.m</p>
          </div>

          <div className='flex items-center text-white space-x-2'>

            <FaStar className='h-[1.2rem] w-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-teal-400' />
            <h1 className='text-[20px] sm:text-[20px] font-semibold text-black'>How does HLV handle user feedback and incorporate it into the app's features?</h1>
          </div>
          <div className='flex items-center text-white space-x-2 pt-5 pb-5 '>

            <p className='text-[15px] sm:text-[15px] font-normal text-black  '>
        
   
        We highly value user feedback as it plays a crucial role in improving our app and enhancing the user experience. We actively collect and review user feedback through various channels, including in-app feedback forms and user surveys. Our team carefully evaluates this feedback and incorporates valuable insights into the development and enhancement of HLV's features and functionalities. Your feedback helps us understand your needs better and ensures that we continue to deliver an app that meets your expectations.</p>
          </div>

                    <div className='flex items-center text-white space-x-2'>

            <FaStar className='h-[1.2rem] w-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-teal-400' />
            <h1 className='text-[20px] sm:text-[20px] font-semibold text-black'>What should I do if I suspect any suspicious activity or unauthorized use of my account?</h1>
          </div>
          <div className='flex items-center text-white space-x-2 pt-5 pb-5 '>

            <p className='text-[15px] sm:text-[15px] font-normal text-black  '>
        
   
        
        If you suspect any suspicious activity or unauthorized use of your HLV account, it is important to take immediate action to protect your information. We recommend the following steps: <br />
            - Change your account password: Access the account settings within the app and update your password to a strong, unique one. <br />
            - Enable two-factor authentication: If available, enable two-factor authentication for an added layer of security. <br />
            - Contact our support team: Notify our support team immediately about the suspected unauthorized activity. They will assist you in securing your account and investigating the issue further. <br />

        We advise out users to monitor and review thier personl account regularly and report any additional concerns or incidents to our support team..</p>
          </div>

      </div>
      



    

  

    </div>
  

    
  )
}

export default Faq