"use client"


import React, { useEffect, useRef, useState } from 'react';



import { Pagination,EffectFade } from 'swiper/modules';
import 'swiper/css/pagination';

import 'swiper/css';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import Slide from './Slide';








const bannerImage =[
  {id:1,image:'/bg_image_1.jpg'},
  {id:2,image:'/bg_image_2.jpg'},
  {id:3,image:'/bg_image_3.jpg'},
]



const HomePage = () => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
 


 
  return (
    <Swiper
    slidesPerView={1}
  allowTouchMove={true}
  effect={'fade'}
        navigation={true}
        pagination={pagination}
        modules={[EffectFade, Pagination]}
      
   
    
  >
    {bannerImage.map((image,i)=>{
      // console.log(image);
      return (
        <>
        <SwiperSlide key={i} >
          <Slide image={image} />
        </SwiperSlide>
        
        
        </>
      )
    })}
  </Swiper>
  )
}

export default HomePage