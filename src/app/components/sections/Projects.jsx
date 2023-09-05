'use client'


import Link from "@/app/assests/icons/Link";
import Image from "next/image";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Projects = () => {
    const swiperParams = {
        slidesPerView: 1, // Show one card on mobile devices
        spaceBetween: 30,
        breakpoints: {
          640: {
            slidesPerView: 2, // Show three cards on tablets and larger screens
          },
          1024:{
              slidesPerView:4
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      };
  return (
    <div className="mt-20 relative h-auto mb-[27rem] lg:mb-[18rem]">
      <div className="h-[25rem] w-full relative">
        <Image src="/projects.jpg" fill alt="projects_banner"  />
        <div className="absolute   inset-0">
          <div className="flex flex-col lg:flex-row lg:items-center p-3 lg:justify-between max-w-6xl mx-auto py-14">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <div className="flex flex-col space-y-1">
                  <div className="h-2 w-2 bg-seconday"></div>
                  <div className="h-2 w-2 bg-green-400"></div>
                </div>
                <h1 className="text-xl lg:text-2xl tracking-wide uppercase text-white font-semibold">
                  our causes goals
                </h1>
              </div>
              <h1 className="text-[2.4rem] font-extrabold text-white">We Charity Shops Pojects</h1>
            </div>
            <p className="max-w-[500px] text-white text-lg">Services address a range of simply application and infrastructure of passages of available, but the majority have suffered alteration in some form.</p>
          </div>

          <div className="h-96 w-full  ">
            <Swiper {...swiperParams}>
                {Array(14).fill().map((i)=>{
                    return (
                       <SwiperSlide key={i} >
                        <div className="h-[25rem] w-full relative group overflow-hidden ">
                            <Image src="/projectspic.jpg" fill objectFit="cover" />
                            <div className=" inset-0 absolute p-3  translate-x-56 translate-y-14 group-hover:translate-y-0 transition-transform group-hover:translate-x-0 duration-300 ease-in-out opacity-0 group-hover:opacity-100  ">
                                <div className="bg-[#1b808c] h-full w-full p-4  opacity-90">
                                    <div className="h-full w-full bg-transparent border-4 grid place-content-center  border-white ">
                                        <div className="bg-white h-28 w-28 transition-transform grid place-content-center opacity-10 group-hover:opacity-100 rotate-45  ">
                                        <Link  height={40} width={40} className="rotate-90 transition-transform"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                       </SwiperSlide>
                    )
                })}

            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
