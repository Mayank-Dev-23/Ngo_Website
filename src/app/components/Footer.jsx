import Image from 'next/image'
import React from 'react'
import Facebook from '../assests/icons/Facebook'
import Instagram from '../assests/icons/Instagram'
import Twitter from '../assests/icons/Twitter'
import Pinterest from '../assests/icons/Pinterest'
import Search from '../assests/icons/Search'
import Speaker from '../assests/icons/Speaker'

const social=[
    {id:1,name:'Facebook',icon:<Facebook height={20} width={20} color="#aaa" />},
    {id:2,name:'Twitter',icon:   <Twitter height={20}  width={20} color="#aaa" />},
    {id:3,name:'Pineterest',icon:<Pinterest height={20} width={20} color="#aaa" />},
    {id:4,name:'Instagram',icon: <Instagram height={20} width={20}  color="#aaa"/>},
]

const Footer = () => {
  return (
    <div className=' w-full '>
        {/* --------- */}
        <div className='mt-[27rem] md:mt-40 '>
        <div className='h-48 hide w-full relative overflow-hidden'>
           
            <Image  src="/subscribe.jpg" fill alt="banner" />
            <div className=' absolute inset-0 grid md:grid-cols-4 w-full'>
                <div className='col-span-1 hide bg-white rounded-r-full flex justify-end p-3 items-center'>
                    <div className='border-4  border-purple-500 bg-white grid place-content-center h-36 w-36 md:h-44 md:w-44 rounded-full p-2 border-dashed'>
                        <Speaker height={100} width={100} />
                    </div>
                </div>
                <div className='relative  md:col-span-2 w-full p-6 '>

                    <div className='flex flex-col space-y-5  w-full  items-center justify-center '>
                        <h1 className='text-xl  font-semibold text-center text-white'>Subscribe Newsletter in your to connect our services</h1>
                        <div className='bg-white rounded-full p-1  flex items-center justify-between'>
                            <input type='email' placeholder='Email Address*' className='outline-none p-1 bg-transparent border-none' />
                            <button className='uppercase text-white rounded-full px-5 font-semibold bg-[#138999] p-2'>subscribe</button>
                        </div>
                    </div>
                <div className='h-32 w-32 absolute right-0 top-5 hide'>
                <Image src="/heart.png" fill className='absolute right-0 ' alt="heart" />
                </div>

                </div>
            </div>
        </div>
    </div>
        {/* --------- */}
    <div className=' relative h-[80rem] md:h-[38rem] lg:h-[30rem]  w-full '>
        <Image src="/footer.jpg" fill objectFit='cover' alt="footerbanner" />

        <div className='grid absolute md:grid-cols-2 p-10 lg:grid-cols-4  gap-3  inset-0 max-w-7xl mx-auto'>
            <div className='flex flex-col space-y-5 '>
                <div className='h-16 w-20 relative'>
                    <Image src="/sikarialogo.png" fill alt="logo"/>
                </div>
                <p className='text-white'>Nemo enim ipsam voluptate quia voluptas sit aspernatur aut odit aut fugit, sed quia magni this dolores eos qui ratione .</p>
                <div className='flex items-center space-x-2'>
                    {social.map((data,i)=>{
                        return(
                            <div key={i} className='p-2 bg-transparent border border-[#aaa] rounded-full'>{data.icon}</div>
                        )
                    })}

                </div>
            </div>
            <div className='flex flex-col text-white font-semibold space-y-4 '>
                <h1 className='text-2xl  '>Quick Links</h1>
               <div className='flex flex-col space-y-3 mt-2'>
               <p className='text-md mt-4'>- Best Services</p>
                <p className='text-md'>- Department</p>
                <p className='text-md'>- About Our Company</p>
                <p className='text-md'>- Business Contact</p>
                <p className='text-md'>- Make An Appointment</p>
               </div>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-2xl font-semibold text-white'>Our Gallery</h1>

                <div className='mt-8 grid grid-cols-3 gap-3'>
                    {Array(6).fill().map((i)=>{
                        return(
                            <div key={i} className='h-20 w-20 relative rounded-lg overflow-hidden group'>
                                <Image src="/child.jpg" fill className='rounded-lg' alt="child" />
                              
                                <div className='bg-black opacity-60 grid place-content-center absolute inset-0 rounded-lg -translate-y-[100%] group-hover:translate-y-[0%] transition-all duration-150 ease-in'>
                                  <div className='p-3 bg-seconday rounded-full cursor-pointer opacity-100'>
                                  <Search height={20} width={20} color="#FFFFFF"  />
                                  </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-2xl font-semibold text-white'>Our Contacts</h1>
                <div className='flex flex-col mt-8 space-y-4 text-md font-semibold text-white'>
                    <p>Adress: 27 Division St, Berakuti, NY 121102, USA</p>
                    <div className='flex flex-col'>
                        <p>Phone: +8 1440 456 782</p>
                        <p>Phone: +8 1440 456 782</p>
                    </div>
                    <div className='flex flex-col'>
                        <p>Email: example@mail.com </p>
                        <p>Website: yourwebsite.com </p>
                    </div>
                    <div className='flex flex-col  md:flex-row w-full md:items-center md:justify-between'>
                <p className='text-white'>Copyright ©Nonta 2023 all rights reserved.</p>
                <div className='flex items-center space-x-3 text-white  font-semibold'>
                    <p>Privacy</p>
                    <p>Policy</p>
                    <p>About</p>
                </div>
            </div>
                </div>
            </div>
            
            <div className=' absolute bottom-14 w-full px-10 '>
            <div className='h-[0.1rem] w-full bg-gray-100 '></div>
            
            </div>
            
            
        </div>
        
       

    </div>
    </div>
  )
}

export default Footer