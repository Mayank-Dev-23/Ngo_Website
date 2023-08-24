import Image from 'next/image'
import React from 'react'

const Slide = () => {
  return (
    <div className='relative'>
        <div className='absolute top-0 z-20 '>
        <div className='relative h-60 w-60'>
            <Image src="/banner_arrow.png" fill />
        </div>
        </div>
        <div className='absolute bottom-20 z-20 animate-bounce hide '>
        <div className='relative h-60 w-60'>
            <Image src="/light.png" fill />
        </div>
        </div>
    
        <div className='h-[30rem] lg:h-[50rem] w-full relative'>
            
            <Image src= "/bg_image_1.jpg" fill/> 
     </div>
     <div className='absolute inset-0'>
        
     </div>
     </div>
    
  )
}

export default Slide