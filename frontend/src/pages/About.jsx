import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      
    <div className='text-center text-2xl pt-10 text-gray-500'>
      <p>ABOUT <span className = 'text-gray-700 font-medium'>US</span></p>
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-12'>
      <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
      <div className= 'flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
        <p>Book A Doc is a platform that simplifies the process of connecting patients with trusted healthcare professionals. We offer a seamless experience for scheduling appointments with top doctors, ensuring convenience and reliability.</p>
        <p>Our goal is to make healthcare more accessible and efficient for everyone</p>
        <b className = 'text-gray-800'>Vision</b>
        <p>To empower individuals by providing easy access to quality healthcare, fostering a healthier world through trusted doctor-patient connections.</p>
      </div>
    </div>

    <div className = 'text-xl my-4'>
      <p>Why <span className='text-gray-700 font-semibold'>Choose Us</span> </p>
    </div>

    <div className = 'flex flex-col md:flex-row mb-20'>
      <div className = 'border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>Expertise:</b>
        <p>Access a wide range of trusted, experienced doctors across various specialties for all your healthcare needs.</p>
      </div>
      
      <div className = 'border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
      <b>Trust:</b>
      <p>Our thoroughly vetted doctors and patient reviews ensure you receive the highest quality care with peace of mind.</p>
      </div>

      <div className = 'border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
      <b>Convenience:</b>
      <p>Easily book appointments at your convenience, saving time without the hassle of long wait times or calls.</p>
      </div>
    </div>

    </div>
  )
}

export default About
