import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className= 'md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/*center section*/}

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/*right section*/}

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+123456789</li>
                <li>abcd@bookadoc.com</li>
            </ul>
        </div>
      </div>
      <div>

        {/*copyright text */}

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
