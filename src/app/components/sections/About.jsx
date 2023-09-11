'use client'


import Chat from "@/app/assests/icons/Chat";
import CheckMark from "@/app/assests/icons/CheckMark";
import People from "@/app/assests/icons/People";
import RightArrow from "@/app/assests/icons/RightArrow";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const About = () => {
  const [change, setChange] = useState(false);
  const router= useRouter();
  return (
    <div className={`relative   ${router.pathname==="/about" ? "mt-1" :'mt-32'} overflow-hidden  z-20`}>
      <div className="absolute -bottom-20 z-50  md:-right-[20rem] lg:-right-[10rem]  hide ">
         <div className="h-[400px] w-[500px] relative">
            <Image  src="/splash.png" fill  alt="splash" />
          </div>
         </div>
    <div className="mt-10 relaitve p-4">
       
      
      <div className="grid lg:grid-cols-2  gap-20 lg:gap-40 relative max-w-[80rem] mx-auto">
     
        <div className="lg:col-span-1 relative ">
         <div className="h-full w-full relaitve ">
         <div className="h-[43rem] w-48 relative hide">
            <Image  src="/image_holder.jpg" fill alt="holder"/>
          </div>
          <div className="relative lg:absolute lg:top-8 lg:left-10 bg-white w-full ">
          <div className="absolute -bottom-10 z-50 translate-y-[8%] right-10">
       <div className="bg-white h-24 w-24 lg:h-32 lg:w-32  rounded-full relative group justify-center items-center flex ">
          <div
            className={` border-2 h-20 w-20 lg:h-28 lg:w-28 animate-spin  border-[#138999] border-dashed  rounded-full`}
          ></div>

          <div className="absolute ">
            <People height={40} width={40}  color="#2a6b75"/>
          </div>
        </div>
       </div>
          <div className="h-[22rem] sm:h-[40rem] md:h-[45rem] lg:h-[39rem] md:w-full  relative">
            <Image  src="/child.jpg" fill className="p-2" alt="child"/>
          </div>
          </div>
           

         </div>
        </div>




        <div className="lg:col-span-1 flex flex-col   relative space-y-7">

         
          {/* heading  */}

          <div className="flex items-center space-x-3">
            <div className="flex flex-col space-y-2">
              <div className="h-2 w-2 bg-red-400"></div>
              <div className="h-2 w-2 bg-purple-400"></div>
            </div>
            <h1 className="uppercase text-2xl font-semibold text-[#138999]">our about us</h1>
          </div>

          <h1 className=" text-3xl sm:text-4xl md:text-5xl font-semibold mt-4 max-w-[600px] text-[#144047]">
            We Proved Give believe donate People.
          </h1>
          <p className="  text-[17.4px] text-[#636363] font-[545] text-justify max-w-[500px]">
            Services address a range of simply application and infrastructure of
            passages of available, but the majority have suffered alteration in
            some form.
          </p>

          {/* testimonoal  */}
          <div className="flex items-start flex-col md:flex-row space-y-3 space-x-5 bg-[#F1F6F7] max-w-[500px] overflow-hidden relative p-3">
            <div className="bg-[#8139E7] rounded-full h-10 w-10 absolute -bottom-5 right-10"></div>
            <div className="h-24 w-24 relative border border-gray-300 p-2">
              <Image src="/child.jpg" fill className="p-1" alt="child" />
            </div>
            <div className="flex space-x-3">
              <Chat height={30} width={30} color="#138999" />
              <p className="max-w-[330px] text-sm text-left italic text-[#636363]">
                We always remained the same: to maximize their marketing
                accelerate customer best fat pore to big the,
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center group space-x-2">
              <CheckMark height={20} width={20} color="#DF5311" />
              <p className="group-hover:text-[#DF5311] font-[800px]">We standard chunk of Ipsum used  <span>Poor People.</span></p>
            </div>
            <div className="flex items-center group space-x-2">
              <CheckMark height={20} width={20} color="#138999" />
              <p className="group-hover:text-[#138999] font-[800px]">No matter what problem you face, you have.</p>
            </div>
          </div>

          <div>
          <button
              onMouseEnter={() => setChange(true)}
              onMouseLeave={() => setChange(false)}
              className="uppercase   relative  bg-white border border-seconday overflow-hidden group p-4 px-6 font-bold flex items-center gap-4 hover:text-white text-seconday tracking-wide"
            >
              <p className="z-50 uppercase">About more</p>
              <div className="h-7 w-full bg-seconday absolute  z-20  -translate-x-[100%] group-hover:-translate-x-0 transition-all duration-300 ease-in inset-0"></div>
              <div className="h-7 w-full bg-seconday absolute  z-20 translate-x-[100%] group-hover:translate-x-0 transition-all duration-300 ease-in left-0 bottom-0"></div>
              <div className="z-50">
                <RightArrow
                  height={17}
                  width={17}
                  color={change ? "#FFFFFF" : "#DF5311"}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
