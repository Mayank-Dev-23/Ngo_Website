import React from 'react'
import People from '../assests/icons/People'
import Image from 'next/image'

const Card = ({color}) => {
    console.log(color)
  return (
    <div className={`bg-white group  flex flex-col p-3 m-3 rounded-[90px]`}>
    <div className="h-56 w-full relative ">
    <Image src="/child.jpg" fill objectFit="cover" alt="child" className="rounded-bl-[90px] rounded-tl-[90px] rounded-tr-[90px] bg-white p-1"  />
    </div>
    <h1 className="text-2xl font-semibold text-[#144047]">Quick fundraising</h1>
    <div className="flex items-center space-x-3">
    
     <div className="bg-transparent rounded-full flex items-center justify-center p-1 relative group-hover:bg-white ">
     <div className=" bg-transparent  h-16 w-16 group-hover:animate-spin  rounded-full border-2 border-black  border-dashed flex items-center justify-center">
         
    
     </div>
     <div className="h-14 w-14  absolute top-2 group-hover:bg-transparent  bg-green-400 rounded-full flex items-center justify-center">
             <People height={40} width={40} />
         </div>

     </div>
    </div>

 </div>
  )
}


export default Card