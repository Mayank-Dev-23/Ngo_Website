import Finance from "@/app/assests/icons/Finance";
import Money from "@/app/assests/icons/Money";
import People from "@/app/assests/icons/People";
import Image from "next/image";
import React from "react";

const serviceDesc = [
  {
    id: 1,
    name: "Medical Treatment",
    color: " border-[#df5311]",
    bg: "bg-[#df5311]",
    icon: <Finance height={40} width={40} />,
    desc: "We poor standard chunk of Denounce righteous",
  },
  {
    id: 2,
    name: "Team off project",
    color: "border-[#138999]",
    bg: " bg-[#138999]",
    icon: <People height={40} width={40} color="#2a6b75" />,
    desc: "We poor standard chunk of Denounce righteous",
  },
  {
    id: 3,
    name: "Donate to case",
    color: "border-[#8139e7]",
    bg: " bg-[#8139e7]",
    icon: <Money height={40} width={40} />,
    desc: "We poor standard chunk of Denounce righteous",
  },
];

const Service = () => {
  return (
   <div className="static">
     <div className="relative h-[80%] sm:h-[50%] md:h-auto lg:h-[50%] xl:h-auto">
      <div className=" flex  lg:justify-center p-4 lg:p-0">
        <div className="lg:w-[100%] xl:w-[100%] 2xl:w-[70%] h-72  relative w-full ">
          <Image
            src="/section2background.png"
            alt="service"
            fill
            objectFit="contain"
            className="hide_pic"
          />
          <div className="grid h-full  sm:grid-grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-6  absolute inset-0 lg:p-10 w-full ">
            {serviceDesc.map((item, i) => {
              return (
                <div key={i} className="w-full mt-6">
                  <div
                    key={i}
                    className={` ${item.bg} relative flex group sm:flex-row overflow-hidden sm:items-center gap-5 p-4 lg:p-10 flex-col rounded-md md:rounded-full  w-full`}
                  >
                    <div className="flex flex-col gap-2 absolute bottom-5 right-0 rotate-[212deg]">
                        <div className="h-[6px] w-8 opacity-30 group-hover:opacity-100 transition-all duration-300 ease-in bg-white rounded-full"></div>
                        <div className="h-[6px] w-14  opacity-30 group-hover:opacity-100 transition-all duration-300 ease-in bg-white rounded-full"></div>
                        <div className="h-[6px] w-8  opacity-30 group-hover:opacity-100 transition-all duration-300 ease-in bg-white rounded-full"></div>
                    </div>
                    <div>
                      <div className="bg-white h-20 w-20  rounded-full relative group justify-center items-center flex ">
                        <div
                          className={` border-2 h-16 w-16 group-hover:animate-spin  ${item.color} border-dashed  rounded-full`}
                        ></div>

                        <div className="absolute ">{item.icon}</div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-xl font-semibold text-white">
                        {item.name}
                      </h1>
                      <p className="text-md  text-white font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Service;
