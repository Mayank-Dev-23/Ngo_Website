import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactForm from "../components/ContactForm";
import Email from "../assests/icons/Email";
import Location from "../assests/icons/Location";
import Phone from "../assests/icons/Phone";
import Maps from "../components/Maps";

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
  

const Contact = () => {
  return (
    <div className="">
      {/* top section  */}
      <div className="h-[15rem] md:h-[40rem] relative w-full">
        <Image
          src="/aboutbanner.jpg"
          alt="contactbanner"
          fill
          objectFit="cover"
          objectPosition="center"
        />
        <div className="flex flex-col absolute inset-0 justify-center p-5 xl:px-[30rem]">
          <h1 className="text-4xl text-white font-semibold lg:text-7xl">
            Contact
          </h1>
          <div className="flex items-center space-x-1 ">
            <Link href="/" className="text-white text-lg ">
              Home /
            </Link>
            <Link href="/contact" className="text-seconday text-lg">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* form section  */}
      <div className="grid grid-rows-1 lg:grid-cols-2 mt-20 h-[90rem] md:h-[45rem] max-w-6xl mx-auto gap-10 p-4 ">
        <div className=" md:col-span-1  relative">
            <Image src="/contactform.jpg" alt="form" fill objectFit="cover" className="rounded-lg shadow-md" />
        </div>
        <div className=" md:col-span-1 shadow-xl border rounded-lg border-gray-100 flex flex-col">
            <ContactForm />
        </div>
      </div>

      <div className="h-56 w-full  mt-20 relative p-10  max-w-6xl mx-auto   ">
        <div className="grid lg:grid-cols-3 gap-10 w-full h-full rounded-full">
          {contact.map((data, i) => {
            return (
              <div
              key={i}
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
      <div className="h-[30rem] mt-80 lg:mt-20 w-full">
      <iframe
        className="h-full w-full rounded-lg"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=900&amp;hl=en&amp;q=%20Building%20No%20-%2040,%20Rudraksh%20Tower,%20First%20Floor%20(101),%20Vijay%20Block%20Near%20Metro%20Pillar%20No%20-51%20Laxmi%20Nagar,%20Delhi,%20New%20Delhi,%20Delhi%20110092+(sikariatech)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        
      </iframe>
    </div>

    </div>
  );
};

export default Contact;
