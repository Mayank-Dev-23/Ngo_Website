import Image from 'next/image'
import React from 'react'

const Donation = () => {
  return (
    <div className='h-96 w-full relative'>
        <Image src="/donation.jpg" fill objectFit='cover' />
    </div>
  )
}

export default Donation