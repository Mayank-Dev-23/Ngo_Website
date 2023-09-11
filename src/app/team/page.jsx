import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Facebook from '../assests/icons/Facebook'
import Twitter from '../assests/icons/Twitter'
import LinkedIn from '../assests/icons/LinkedIn'

const socials =[
    {id:1,name:'Facebook',icon:<Facebook height={20} width={20} color="#FFFFFF" />},
    {id:2,name:'Twitter',icon:<Twitter height={20} width={20} color="#FFFFFF"/>},
    {id:3,name:'Linkedin',icon:<LinkedIn height={20} width={20} color="#FFFFFF" />}
]

const Team = () => {
  return (
    <div className='min-h-screen'>
         {/* top section  */}
      <div className="h-[15rem] md:h-[40rem] relative w-full">
        <Image
          src="/aboutbanner.jpg"
          fill
          alt="team banner"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="flex flex-col absolute inset-0 justify-center p-5 xl:px-[30rem]">
          <h1 className="text-4xl text-white font-semibold lg:text-7xl">
           Team
          </h1>
          <div className="flex items-center space-x-1 ">
            <Link href="/" className="text-white text-lg ">
              Home /
            </Link>
            <Link href="/team" className="text-seconday text-lg">
              Team
            </Link>
          </div>
        </div>
      </div>

      <div className='mt-20'>
      <div className="flex items-center space-y-4  flex-col justify-center">
      <div className="flex items-center space-x-3">
            <div className="flex flex-col space-y-2">
              <div className="h-2 w-2 bg-red-400"></div>
              <div className="h-2 w-2 bg-purple-400"></div>
            </div>
            <h1 className="uppercase text-2xl font-semibold text-center text-[#138999]">our team member</h1>
          </div>
        <h2 className="text-3xl lg:text-5xl text-[#144047] text-center font-bold ">Happy Team Member Meet</h2>
      </div>

      <div className='mt-10 grid sm:grid-cols-2 p-4 md:grid-cols-3 max-w-5xl gap-10 mx-auto'>
        {Array(6).fill().map((i)=>{
            return (
                <div key={i} className=' shadow-lg group relative rounded-lg overflow-hidden'>
                    <div className=' h-64 w-full relative filter grayscale group-hover:grayscale-0 duration-300 transition-all'>
                        <Image src="/team.jpg" alt="teampic" fill objectPosition='center' objectFit='cover' className='rounded-t-lg' />
                        
                    </div>
                    <div className='flex flex-col space-y-1 right-2 top-3 absolute transition-transform translate-x-[130%] group-hover:translate-x-0 duration-300'>
                            {socials.map((social,i)=>{
                                return(
                                    <div  key={i} className='p-2 bg-[#138999] hover:bg-[#144047] transition-all duration-300 ease-in cursor-pointer rounded-md filter grayscale-0'>
                                        {social.icon}
                                    </div>
                                )
                            })}
                        </div>
                    <div className='grid place-content-center text-center bg-white py-8'>
                        <h1 className='text-lg font-semibold text-[#138999]'>Nicholas Thomas</h1>
                        <p className='uppercase text-md'>founder</p>
                    </div>

                </div>
            )
        })}
      </div>
      </div>
    </div>
  )
}

export default Team