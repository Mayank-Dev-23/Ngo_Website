import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Donate = () => {
  return (
    <div className='min-h-screen'>
         {/* top section  */}
      <div className="h-[15rem] md:h-[40rem] relative w-full">
        <Image
          src="/donatebanner.jpg"
          fill
          alt="donatebanner"
          
          objectPosition="center"
        />
        <div className="flex flex-col absolute inset-0 justify-center p-5 xl:px-[30rem]">
          <h1 className="text-4xl text-white font-semibold lg:text-7xl">
           Causes
          </h1>
          <div className="flex items-center space-x-1 ">
            <Link href="/" className="text-white text-lg ">
              Home /
            </Link>
            <Link href="/team" className="text-seconday text-lg">
              Causes
            </Link>
          </div>
        </div>
      </div>
      <div className='mt-20 grid md:grid-cols-2 h-[20rem] max-w-5xl mx-auto shadow-lg'>
        <div className=''>
            Qr 
        </div>
        <div className='  grid place-content-center'>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <h1 className='text-2xl lg:text-4xl italic font-semibold'>Bank Account Details</h1>
                <p className='text-xl font-semibold'>Name : Paplu Foundation</p>
                <p className='text-xl font-semibold'>Accout No. : 7351432534534253</p>
                <p className='text-xl font-semibold'>IFSC Code : ICIC0007351</p>
                <p className='text-xl font-semibold'>Panjabari Branch</p>
            </div>
        </div>

      </div>

      <div className='mt-20 flex flex-col space-y-2  w-full  max-w-6xl mx-auto'>
        <div className='flex  items-center justify-center'>
         <h1 className='text-3xl'>Donate Us To Support In Our Works!</h1>
        </div>
        <div className='grid md:grid-cols-2 mt-8 p-8 gap-8'>
          
          {Array(2).fill().map((i)=>{
            return (
              <div key={i} className='bg-white p-2 shadow-lg border-gray-100 border'>
            <div className=' h-96 w-full relative'>
              <Image src="/child.jpg" alt="child" fill objectFit='cover'/>
            </div>
            <div className='flex flex-col py-4'>
              <h1 className='text-2xl'>Cervical Cancer Awareness In Women</h1>
              <div className='flex items-center justify-between'>
                <div className='flex flex-col'>
                  <h1 className='text-lg font-semibold'>Raised</h1>
                  <p className='text-md'>₹35,000</p>
                </div>
                <div className='flex flex-col'>
                  <h1 className='text-lg font-semibold'>Raised</h1>
                  <p className='text-md'>₹35,000</p>
                </div>
                <div className='flex flex-col'>
                  <h1 className='text-lg font-semibold'>Raised</h1>
                  <p className='text-md'>₹35,000</p>
                </div>
              </div>
            </div>

            <div className='mt-4 '>
              <div className='h-2 w-full rounded-full bg-gray-100 relative'>
                <div className='h-2 rounded-full w-96 bg-[#138999] absolute inset-0'></div>
              </div>
            </div>
            <div className='flex items-center justify-between mt-3'>
              <button className='p-3 border border-[#138999] text-md  text-white bg-[#138999] rounded-md'>Donate Us</button>
              <button className='p-3 border border-[#138999] text-md  text-black bg-white rounded-md'>Contact Us</button>
            </div>
          </div>
            )
          })}
        </div>
       
      </div>
    </div>
  )
}

export default Donate