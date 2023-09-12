'use client'


import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


// import html2pdf from 'html2pdf.js'


const Registration = () => {

  const [name,Setname] =useState(null);

  return (

    <div className='min-h-screen'>
         {/* top section  */}
      <div className="h-[15rem] md:h-[40rem] relative w-full ">
        <Image
          src="/certificate.jpg"
          fill
          alt="cirtificatebanner"
          objectFit='cover'
          
          objectPosition="center"
        />
        <div className='bg-black opacity-25 absolute inset-0'></div>
        <div className="flex flex-col absolute inset-0 justify-center p-5 xl:px-[30rem]">
          <h1 className="text-4xl text-white font-semibold lg:text-7xl">
           Registration
          </h1>
          <div className="flex items-center space-x-1 ">
            <Link href="/" className="text-white text-lg ">
              Home /
            </Link>
            <Link href="/team" className="text-seconday text-lg">
              Registration
            </Link>
          </div>
        </div>
      </div>
    <div className='grid md:grid-cols-2 shadow-lg  max-w-5xl mt-20 mx-auto p-3 '>
        <div className='bg-black grid  h-[30rem]  md:h-auto place-content-center relative'>
            <Image src="/registration.jpg" alt="certificateillustration" fill objectFit='cover' className='opacity-50' />
           <div className='absolute inset-0 grid place-content-center'>
           <h1 className='text-5xl font-semibold md:max-w-[400px] text-center text-white  '>Become a Member to get the certificate</h1>
           </div>
            
        </div>
        <form  >
        <div className='bg-white flex flex-col justify-center border border-gray-100  p-5'>
<div className='flex flex-col space-y-3'>
<label htmlFor='name'>Name</label>
        <input
         value={name}
         onChange={(e) => Setname(e.target.value)}
         required
        id="name" type='text' placeholder='Your Name*' className='p-2 focus:border-[#138999] outline-none border-dashed border-2 rounded-md border-gray-400' />
        <label htmlFor='email'>Email</label>
        <input required id="email" type='text' placeholder='Your Email*' className='p-2 focus:border-[#138999] outline-none border-dashed border-2  rounded-md border-gray-400' />
        <label htmlFor='phone'>Phone Number</label>
        <input required id="phone" type='text' placeholder='Your Phone Number*' className='p-2 focus:border-[#138999] outline-none border-dashed border-2 rounded-md border-gray-400' />
        <label htmlFor='address'>Address</label>
        <input required type='text' id="address" placeholder='Your Address*' className='p-2 focus:border-[#138999] outline-none border-dashed border-2 rounded-md border-gray-400' />
        <label htmlFor='aadhaar'>Aadhaar Number</label>
        <input required type='text' id="aadhaar" placeholder='Your Aadhaar Number*' className='p-2 focus:border-[#138999] outline-none border-dashed border-2 rounded-md border-gray-400' />
        <label htmlFor='gender'>Gender</label>
        <input required id="gender" type='text' placeholder='Gender*' className='p-2 focus:border-[#138999] outline-none border-dashed border-2 rounded-md border-gray-400' />
</div>
        <div className='flex items-center justify-center mt-8 w-full'>
            <button  type="submit" className='p-4 bg-[#138999] text-white w-full font-semibold tracking-wide rounded-md'>Register</button>
        </div>
        </div>
        </form>
        {/* <div className="mt-8">
        {name && <CertificateTemplate id="certificateTemplate" recipientName={name} />}
      </div> */}
    </div>
    </div>
  )
}

export default Registration