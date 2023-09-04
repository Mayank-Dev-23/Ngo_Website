"use client";

import Expand from "@/app/assests/icons/Expand";
import Image from "next/image";
import React, { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperParams = {
  slidesPerView: 1, // Show one card on mobile devices
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 2, // Show three cards on tablets and larger screens
    },
    1024:{
        slidesPerView:3
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const Causesgoals = () => {

    const colors=[ "red","blue","green","yellow","orange","green"]

    const [change,setChange] =useState(false);
  return (
    <div className="w-full mt-20 ">
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center space-x-2">
          <div className="flex flex-col space-y-1">
            <div className="h-2 w-2 bg-seconday"></div>
            <div className="h-2 w-2 bg-green-400"></div>
          </div>
          <h1 className="text-xl lg:text-2xl tracking-wide uppercase text-[#138999] font-semibold">
            our causes goals
          </h1>
        </div>
        <h1 className="text-3xl lg:text-5xl tracking-wide font-bold text-[#144047] mt-4">
          We Gools Popular Causes
        </h1>
      </div>

      {/* slider  */}

      <div className="mt-10 max-w-6xl mx-auto p-4 ">
        <Swiper {...swiperParams}>
          {colors
            .map((color,i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="group h-auto">
                    <div className="h-auto w-full grid grid-rows-1  transition-all ease-in duration-500 border ">
                      <div className="row-span-1 group-hover:bg-[#2a6b75] border border-gray-300   group-hover:border-[#2a6b75] bg-white flex flex-col p-2 transition-all duration-300 ease-in">
                        <div className="h-64 w-full relative">
                          <Image src="/gools.jpg" fill objectFit="cover" />
                          <div
                          onMouseEnter={()=>setChange(true)}
                          onMouseLeave={()=>setChange(false)}
                          className="bg-white scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 p-1 hover:bg-[#2a6b75] cursor-pointer absolute bottom-4 left-4 transition-transform ease-in duration-200">
                            <Expand height={30} width={30} change={change} />
                          </div>
                          <div className="px-4 py-1 bg-white rounded-full absolute   transition-all ease-in duration-500 group-hover:bg-[#2a6b75] top-3 right-2">
                            <p className="uppercase text-md text-[#2a6b75]   transition-all ease-in duration-500 group-hover:text-white">Events</p>
                          </div>
                        </div>

                        <div className="px-5 flex flex-col space-y-1 py-7">
                          <h1 className="text-2xl max-w-[500px] font-semibold text-[#144047] group-hover:text-white">
                            Medical & healthy facilities off goals built
                          </h1>
                          <p className="text-lg text-gray-500 group-hover:text-white">
                            wee poor standard chunk off nibh velit auctor
                            aliquet sollic...
                          </p>
                        </div>
                      </div>
                      <div className="row-span-1 bg-white border flex px-6 py-14 flex-col border-gray-300 group-hover:border-[#2a6b75] transition-all ease-in duration-500">
                        <div className="relative w-full h-2 rounded-full bg-gray-100">
                        <div className="flex items-center justify-between mt-3">
                                    <p className="font-semibold">$2,230</p>
                                    <p className="font-semibold">$2,230</p>
                                </div>
                            <div className="absolute inset-0 w-64 bg-[#2a6b75] rounded-full">
                                <div className=" bg-[#2a6b75] p-1 absolute rounded-sm -top-10 -right-4 grid place-content-center">
                                    <p className="text-sm font-semibold text-white ">68%</p>
                                    <div className="bg-[#2a6b75] h-3 w-3 absolute -bottom-1 rotate-45 right-3"></div>
                                    
                                </div>
                                
                            </div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default Causesgoals;
