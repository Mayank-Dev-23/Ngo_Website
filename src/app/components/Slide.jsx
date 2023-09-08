import Image from "next/image";
import React, { useState } from "react";
import RightArrow from "../assests/icons/RightArrow";
import Play from "../assests/icons/Play";

const Slide = ({image}) => {

  const [change, setChange] = useState(false);
  return (
    <div className="relative">
      <div className="absolute top-0 z-20 hide ">
        <div className="relative h-60 w-60">
          <Image src="/banner_arrow.png" fill alt="arrow" />
        </div>
      </div>
      <div className="absolute bottom-20 z-20 animate-bounce hide ">
        <div className="relative h-60 w-60">
          <Image src="/light.png" fill alt="circle_light" />
        </div>
      </div>

      <div className="h-[30rem] sm:h-[40rem]  md:h-[50rem] lg:h-[55rem]  w-full relative">
        <Image src={image.image} alt={image.image} fill objectPosition="center" objectFit="cover"  />
      </div>
      <div className="absolute top-20 w-full max-w-7xl mx-auto lg:left-[50%] lg:-translate-x-[50%] lg:grid lg:grid-cols-6 ">
        <div className="flex flex-col col-span-5 px-5 mt-6 sm:mt-24 h-full">
          <div className="h-20 w-48 sm:h-32 sm:w-56  md:w-80  relative ">
            <Image src="/notalogo2.png" fill alt="secondlogo" />
          </div>
          <h1 className="uppercase mt-5 lg:mt-10 text-white   font-semibold text-2xl sm:text-5xl xl:text-7xl max-w-[400px] xl:max-w-[800px] sm:max-w-none">
            give someone hand the people poor.
          </h1>
          <p className="text-white mt-2 lg:mt-8 text-lg text-justify lg:max-w-[660px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            sapiente minima quasi qui at ipsum laboriosam
          </p>

          <div className="flex items-center space-x-10 mt-6 lg:mt-10">
            <button
              onMouseEnter={() => setChange(true)}
              onMouseLeave={() => setChange(false)}
              className="uppercase   relative  bg-white border border-seconday overflow-hidden group p-4 px-6 font-bold flex items-center gap-4 hover:text-white text-seconday tracking-wide"
            >
              <p className="z-50">donate now</p>
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

            <div className="flex items-center space-x-3">
             

             <div className="relative cursor-pointer">
             <div className="h-16 w-16 absolute inset-0 -top-[5px]  pulse-animation -left-[5px] border  border-white flex items-center justify-center rounded-full"></div>
             <div className="h-20 w-20 absolute inset-0 -top-[12px] -left-[13px] pulse-animation border   border-white flex items-center justify-center rounded-full"></div>
             <button className="bg-white p-3     rounded-full flex items-center justify-center">
                <Play height={30} width={30} />
              </button>
             </div>
             <h1 className="uppercase text-white font-semibold">watach video</h1>
            </div>
          </div>
        </div>
        <div className="col-span-1 grid place-content-center  ">
          <div className="h-36 w-36 relative hide">
            <Image src="/handslogo.png" alt="handlogo" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
