'use client'

import RightArrow from "@/app/assests/icons/RightArrow";
import Image from "next/image";
import React, { useState } from "react";

const Donation = () => {
  const [change, setChange] = useState(false);
  return (
    <div className="h-[30rem] w-full relative">
      <Image src="/donation.jpg" fill objectFit="cover" alt="banner" />
      <div className="absolute w-full h-full md:grid place-content-center px-4 py-10">
        <div className="flex flex-col space-y-6">
          {/* Head  */}
          <div className="flex items-center space-x-2">
            <div className="flex flex-col space-y-1 items-center">
              <div className="h-2 w-2 bg-[#2a6b75]"></div>
              <div className="h-2 w-2 bg-seconday"></div>
            </div>
            <h1 className="text-xl uppercase font-semibold text-white">
              become to donat
            </h1>
          </div>

          <div className="max-w-[500px]">
            <h1 className="text-3xl font-bold text-white">
              Hands with heart flat Nonprofit organization and love.
            </h1>
          </div>

          <div className="max-w-[450px]">
            <p className="text-md font-semibold text-white tracking-wide">
              Services address a range of simply application and infrastructure
              of passages of available, but the majority have
            </p>
          </div>

          <div>
          <button
              onMouseEnter={() => setChange(true)}
              onMouseLeave={() => setChange(false)}
              className="uppercase   relative  bg-seconday border border-seconday overflow-hidden group p-4 px-6 font-bold flex items-center gap-4 hover:text-seconday text-white tracking-wide"
            >
              <p className="z-50 uppercase">About more</p>
              <div className="h-7 w-full bg-white absolute  z-20  -translate-x-[100%] group-hover:-translate-x-0 transition-all duration-300 ease-in inset-0"></div>
              <div className="h-7 w-full bg-white absolute  z-20 translate-x-[100%] group-hover:translate-x-0 transition-all duration-300 ease-in left-0 bottom-0"></div>
              <div className="z-50">
                <RightArrow
                  height={17}
                  width={17}
                  color={!change ? "#FFFFFF" : "#DF5311"}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
