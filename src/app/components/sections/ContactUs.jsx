import Image from "next/image";
import React from "react";
import ContactForm from "../ContactForm";
import Maps from "../Maps";
import Phone from "@/app/assests/icons/Phone";
import Email from "@/app/assests/icons/Email";
import Location from "@/app/assests/icons/Location";

const contact = [
  {
    id: 1,
    name: "Call This Now",
    data1: "+584440066953 ",
    data2: "+8265425554811",
    color: "#DF5311",
    icon:<Phone height={50} width={50} color="#FFFFFF"/>
  },
  {
    id: 2,
    name: "Your Message",
    data1: "Karat2145@Gmail",
    data2: "rubel203@Gmail",
    color: "#138999",
    icon:<Email height={50} width={50} color="#FFFFFF"/>
  },
  {
    id: 3,
    name: "Your location",
    data1: "Dhaka 125,Gazipur",
    data2: "214-Road 235",
    color: "#823BE7",
    icon:<Location height={50} width={50} color="#FFFFFF"/>
  },
];

const ContactUs = () => {
  return (
    <div className="relative">
      <div className="h-[104rem] lg:h-[75rem] xl:h-[60rem]  w-full relative ">
        <Image src="/contact.jpg" fill content="center" objectFit="cover" />
        <div className="grid    gap-10 lg:grid-cols-2 xl:grid-cols-3 absolute inset-0 p-5 h-[40rem] ">
          <div className="relative   h-[25rem] lg:h-auto  bg-white rounded-lg">
            <Image
              src="/child.jpg"
              fill
              objectPosition="center"
              objectFit="cover"
              className="p-2 rounded-lg"
            />
          </div>
          <div className="bg-white   rounded-lg ">
            <ContactForm />
          </div>
          <div className="  rounded-lg  lg:col-span-2 xl:col-span-1   h-full  ">
            <Maps />
          </div>
        </div>
      </div>
      <div className="h-56 w-full -bottom-24 bg-white relative p-10 xl:absolute max-w-6xl left-[50%] -translate-x-[50%]  rounded-full">
        <div className="grid lg:grid-cols-3 gap-10 w-full h-full rounded-full">
          {contact.map((data, i) => {
            return (
              <div
                className="bg-white border-[1.6px] flex items-center p-5   space-x-5 rounded-md border-dashed"
                style={{ borderColor: data.color }}
              >
                <div className=" p-4 rounded-full" style={{backgroundColor:data.color}}>
                  {data.icon}
                </div>

                <div className="flex flex-col space-y-1 text-justify">
                  <h1 className="text-2xl font-semibold text-[#144047]">{data.name}</h1>
                  <p>{data.data1}</p>
                  <p>{data.data2}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
