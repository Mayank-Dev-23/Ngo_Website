'use client'

import Image from 'next/image'
import React from 'react'
import About from '../components/sections/About'
import Causesgoals from '../components/sections/Causesgoals'
import Reviews from '../components/sections/Reviews'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

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
      <Image src="/aboutbanner.jpg" fill objectFit='cover' objectPosition='center' />
      <div className='flex flex-col absolute inset-0 justify-center p-5'>
        <h1 className='text-4xl text-white font-semibold'>About</h1>
        <p className='text-white text-lg'>Home /<span className='text-seconday'>About</span></p>
      </div>
    </div>

    <About />
    <div className='mt-20'>
      <div className='grid md:grid-cols-2 xl:grid-cols-4 h-[30rem] p-8'>
        <div className='bg-red-400 hover:scale-105 transition-transform flex p-20 flex-col'>
          <h1>01</h1>
          <h1>People are lifted poverty for this Poor</h1>
          <p>We poor standard chunk ofI nibh velit auctor aliquet sollic tudin</p>
        </div>
        <div className='bg-yellow-400 hover:scale-105 transition-transform'>2</div>
        <div className='bg-purple-400 hover:scale-105 transition-transform'>3</div>
        <div className='bg-blue-400 hover:scale-105 transition-transform'>4</div>
      </div>

    </div>

    <div className='mt-20 max-w-6xl mx-auto'>
    <Swiper {...swiperParams}>
      {Array(10).fill().map((i)=>{
        return (
          <SwiperSlide>
            <div>
            <div className='h-8 w-28 relative'>
              <Image src="/evanto.png" fill/>
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