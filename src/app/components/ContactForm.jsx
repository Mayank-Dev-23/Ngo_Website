import React from 'react'
import RightArrow from '../assests/icons/RightArrow'

const ContactForm = () => {
  return (
    <div className='w-full max-w-[400px] mx-auto py-10 '>
       <div className='flex items-center flex-col space-y-1'>
        <h1 className='text-3xl font-semibold text-[#144047]'>Request A Quote</h1>
        <p className='text-gray-500 text-lg'>24/7 support</p>
       </div>
        <div className='flex flex-col w-full space-y-8 mt-4 px-5'>
            <input type='text' placeholder='Your Name*' className='p-5 outline-none border rounded-md border-gray-400' />
            <input type='text' placeholder='Phone Number*' className='p-5 outline-none border rounded-md border-gray-400' />
            <input type='text' placeholder='Subjects Date*' className='p-5 outline-none border rounded-md border-gray-400' />
            <input type='text' placeholder='Email Address*' className='p-5 outline-none border rounded-md border-gray-400' />
            <input type='text' placeholder='Sex*' className='p-5 outline-none border rounded-md border-gray-400' />
        </div>
        <button className='flex items-center space-x-2 mt-10 transition-all ease-in duration-300 hover:scale-105  hover:bg-[#144047]  justify-center bg-seconday w-full p-4 rounded-full'>
            <p className='text-white uppercase font-semibold'>send request</p>
            <RightArrow height={20} width={20} color='#FFFFFF' />
        </button>
    </div>
  )
}

export default ContactForm