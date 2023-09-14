'use client'

import Image from 'next/image'
import React from 'react'
import About from '../components/sections/About'
import Causesgoals from '../components/sections/Causesgoals'
import Reviews from '../components/sections/Reviews'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import RightArrow from '../assests/icons/RightArrow'
import BestService from '../components/sections/BestService'
import Link from 'next/link'

const colors=[
  {id:1,color:'#DF5311'},
  {id:2,color:'#138999'},
  {id:3,color:'#8139E7'},
  {id:4,color:'#2E9ECD'},
]

const about = () => {

  const swiperParams = {
    slidesPerView: 1, // Show one card on mobile devices
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2, // Show three cards on tablets and larger screens
      },
      1024:{
          slidesPerView:5
      },
      320:{
        slidesPerView:2
      }
      
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
   <div className='min-h-screen w-full'>
    <div className='h-[15rem] md:h-[40rem] relative w-full'>
      <Image src="/aboutbanner.jpg" fill objectFit='cover' alt="aboutbanner" objectPosition='center' />
      <div className='flex flex-col absolute inset-0 justify-center p-5 xl:px-[30rem]'>
        <h1 className='text-4xl text-white font-semibold lg:text-7xl'>About</h1>
        <div className='flex items-center space-x-1 '>
        <Link href="/" className='text-white text-lg '>Home /</Link>
        <Link href="/about" className='text-seconday text-lg'>About</Link>
        </div>
       
      </div>
    </div>

    <About />
    <div className='mt-20 mb-20'>
      <div className='grid md:grid-cols-2 xl:grid-cols-4 p-5'>
        {colors.map((color,i)=>{
          return (
            <div key={i} style={{backgroundColor:color.color}} className=' relative text-white hover:scale-105  z-20 group duration-200  transition-transform flex p-10 lg:p-20 flex-col'>
          <div className='absolute inset-0 opacity-0 group-hover:opacity-25'>
            <Image src="/child.jpg" fill objectFit='cover' alt="child" objectPosition='center' />
          </div>
          <div className='h-40 w-40 group-hover:opacity-0 absolute bottom-0 right-0'>
          <Image  src="/hands.png" fill alt="hands" />
          </div>
         <div className='flex flex-col space-y-3 z-20'>
         <h1 className=' text-xl font-semibold'>01</h1>
          <h1 className='text-2xl font-semibold'>People are lifted poverty for this Poor</h1>
          <p className='text-md'>We poor standard chunk ofI nibh velit auctor aliquet sollic tudin</p>
          <RightArrow height={30} width={30} color="#FFFFFF" />
         </div>
        </div>
          )
        })}
        
      </div>

      <BestService />

    </div>

    <div className='mt-20 max-w-6xl mx-auto'>
    <Swiper {...swiperParams}>
      {Array(10).fill().map((i)=>{
        return (
          <SwiperSlide key={i}>
            <div>
            <div className='h-8 w-28 relative'>
              <Image src="/evanto.png" fill alt="circle"/>
            </div>
            </div>
          </SwiperSlide>
        )
      })}
      </Swiper>

    </div>

    <Causesgoals/>
    <Reviews />
   </div>
  )
}

export default about