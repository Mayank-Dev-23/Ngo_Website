import Image from "next/image";
import React from "react";

const Reviews = () => {
  return (
    <div className="mt-20 relaitve p-4">
      <div className="h-[50rem] md:h-[30rem] w-full relative max-w-6xl mx-auto">
        <Image
          src="/reviews_banner.png"
          fill
          className="rounded-[5rem]"
          objectFit="cover"
        />
        <div className="absolute  inset-0 rounded-[5rem] grid md:grid-cols-2 gap-6 ">
          <div className=" grid place-content-center">
            <div className="relative h-96 w-96 bg-white rounded-full ">
              <Image src="/child.jpg" fill className="rounded-full p-2" objectFit="cover" />
            </div>
          </div>

          <div className=" grid place-content-center p-10">
            <div className="flex flex-col space-y-3">
              <h1 className="text-2xl font-semibold text-[#144047]">
                Clients Reviews:
              </h1>
              <p className="text-lg text-gray-500 italic">
                There are many variations of passages of by injected humour, or
                randomised ere must-have solution to satisfy most ..
              </p>
              <div className="flex items-center space-x-4 ">
              <div class="flex mb-5 -space-x-4">
                <img
                  class="w-16 h-16 border-[3px] shadow-md border-white rounded-full dark:border-gray-800"
                  src="/child.jpg"
                  alt=""
                />
                <img
                  class="w-16 h-16 border-[3px] shadow-md border-white rounded-full dark:border-gray-800"
                  src="/child.jpg"
                  alt=""
                />
                <img
                  class="w-16 h-16 border-[3px] shadow-md border-white rounded-full dark:border-gray-800"
                  src="/child.jpg"
                  alt=""
                />
                <img
                  class="w-16 h-16 border-[3px] shadow-md border-white rounded-full dark:border-gray-800"
                  src="/child.jpg"
                  alt=""
                />
              </div>
              <p className="uppercase text-purple-600 font-semibold cursor-pointer"> More + </p>
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-xl font-semibold text-[#144047]">Mereta Barat</p>
                <p className="text-gray-500 text-md">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
