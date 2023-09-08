import People from "@/app/assests/icons/People";
import Image from "next/image";
import React from "react";
import Card from "../Card";

const color =[
    {id:1,color:'#df5311'},
    {id:2,color:'#138999'},
    {id:3,color:'#df5311'},
    {id:4,color:'#df5311'},
    {id:5,color:'#df5311'},
    {id:6,color:'#df5311'},

]

const BestService = () => {
    
  return (
    <div className="mt-20 p-10 bg-[#f1f7f7] h-auto w-full relative">
      <div className="absolute top-10 ">
        <div className="h-20 w-20 md:h-56 md:w-56 relative">
          <Image src="/abh1.png" fill alt="banner" />
        </div>
      </div>
      <div className="absolute top-20 right-10">
       <div className="h-44 w-44 animate-pulse relative">
       <Image src= "/light.png" fill alt="light" />
       </div>
      </div>

      <div className="absolute bottom-0 right-0 z-20">
        <div className="h-48 w-48 relative">
            <Image src="/rightarrow.png" fill alt="arrow" />
        </div>
      </div>

      <div className="flex items-center space-y-4  flex-col justify-center">
      <div className="flex items-center space-x-3">
            <div className="flex flex-col space-y-2">
              <div className="h-2 w-2 bg-red-400"></div>
              <div className="h-2 w-2 bg-purple-400"></div>
            </div>
            <h1 className="uppercase text-2xl font-semibold text-[#138999]">our best service</h1>
          </div>
        <h2 className="text-3xl font-bold ">What Best Service talking</h2>
      </div>

      {/* cards  */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      <div className={`bg-white transition-all duration-500 ease-in-out hover:bg-[#df5311] group  flex flex-col p-3 m-3 rounded-[90px]`}>
    <div className="h-56 w-full relative ">
    <Image src="/child.jpg" fill objectFit="cover" alt="child" className="rounded-bl-[90px]  rounded-tl-[90px] rounded-tr-[90px] bg-white p-1"  />
    </div>
    <div className="flex flex-col space-y-4 px-5">
    <h1 className=" text-lg md:text-2xl font-semibold text-[#138999] group-hover:text-white ">Quick fundraising</h1>
    <div className="flex items-center space-x-3">
    
     <div className="bg-transparent rounded-full flex items-center justify-center p-1 relative group-hover:bg-white ">
     <div className=" bg-transparent  h-16 w-16 group-hover:animate-spin  rounded-full border-2 border-[#df5311]  border-dashed flex items-center justify-center">
         
    
     </div>
     <div className="h-14 w-14  absolute top-2  bg-[#df5311] rounded-full flex items-center justify-center">
             <People height={40} width={40} color="#FFFFFF" />
         </div>

     </div>
     <p className="group-hover:text-white font-[900px] text-sm md:text-md line-clamp-2 ">We poor standard chunk of Denounce righteous</p>
    </div>
    </div>

 </div>

 <div className={`bg-white group hover:bg-[#138999]  transition-all duration-500 ease-in-out flex flex-col p-3 m-3 rounded-[90px]`}>
    <div className="h-56 w-full relative ">
    <Image src="/child.jpg" alt="child" fill objectFit="cover" className="rounded-bl-[90px] rounded-tl-[90px] rounded-tr-[90px] bg-white p-1"  />
    </div>
    <div className="flex flex-col space-y-4 px-5">
    <h1 className="font-semibold text-[#138999] group-hover:text-white text-lg md:text-2xl ">Quick fundraising</h1>
    <div className="flex items-center space-x-3">
    
     <div className="bg-transparent rounded-full flex items-center justify-center p-1 relative group-hover:bg-white ">
     <div className=" bg-transparent  h-16 w-16 group-hover:animate-spin  rounded-full border-2 border-[#138999]  border-dashed flex items-center justify-center">
         
    
     </div>
     
     <div className="h-14 w-14  absolute top-2   bg-[#138999] rounded-full flex items-center justify-center">
             <People height={40} width={40} color="#FFFFFF" />
         </div>

     </div>
     <p className="group-hover:text-white font-[900px]  text-sm md:text-md line-clamp-2">We poor standard chunk of Denounce righteous</p>
    </div>
    </div>

 </div>

 <div className={`bg-white group hover:bg-[#853fe8] transition-all duration-500 ease-in-out  flex flex-col p-3 m-3 rounded-[90px]`}>
    <div className="h-56 w-full relative ">
    <Image src="/child.jpg" alt="child" fill objectFit="cover" className="rounded-bl-[90px] rounded-tl-[90px] rounded-tr-[90px] bg-white p-1"  />
    </div>
   <div className="flex flex-col space-y-4 px-5">
   <h1 className="text-lg md:text-2xl font-semibold text-[#138999] group-hover:text-white">Quick fundraising</h1>
    <div className="flex items-center space-x-3">
    
     <div className="bg-transparent rounded-full flex items-center justify-center p-1 relative group-hover:bg-white ">
     <div className=" bg-transparent  h-16 w-16 group-hover:animate-spin  rounded-full border-2 border-[#853fe8] border-dashed flex items-center justify-center">
         
    
     </div>
     <div className="h-14 w-14  absolute top-2  bg-[#853fe8] rounded-full flex items-center justify-center">
             <People height={40} width={40} color="#FFFFFF"/>
         </div>

     </div>
     <p className="group-hover:text-white font-[900px]  text-sm md:text-md line-clamp-2">We poor standard chunk of Denounce righteous</p>
    </div>
   </div>

 </div>

 <div className={`bg-white group  transition-all duration-500 ease-in-out hover:bg-[#ffad0e] flex flex-col p-3 m-3 rounded-[90px]`}>
    <div className="h-56 w-full relative ">
    <Image src="/child.jpg" alt="child" fill objectFit="cover" className="rounded-bl-[90px] rounded-tl-[90px] rounded-tr-[90px] bg-white p-1"  />
    </div>
    <div className="flex flex-col space-y-4 px-5">
    <h1 className="text-lg md:text-2xl font-semibold text-[#138999] group-hover:text-white">Quick fundraising</h1>
    <div className="flex items-center space-x-3">
    
     <div className="bg-transparent rounded-full flex items-center justify-center p-1 relative group-hover:bg-white ">
     <div className=" bg-transparent  h-16 w-16 group-hover:animate-spin  rounded-full border-2 border-[#ffad0e]  border-dashed flex items-center justify-center">
         
    
     </div>
     <div className="h-14 w-14  absolute top-2   bg-[#ffad0e] rounded-full flex items-center justify-center">
             <People height={40} width={40} color="#FFFFFF" />
         </div>

     </div>
     <p className="group-hover:text-white font-[900px] text-sm md:text-md line-clamp-2 ">We poor standard chunk of Denounce righteous</p>
    </div>
    </div>

 </div>

 <div className={`bg-white group  hover:bg-[#36c691]  transition-all duration-500 ease-in-out flex flex-col p-3 m-3 rounded-[90px]`}>
    <div className="h-56 w-full relative ">
    <Image src="/child.jpg" alt="child" fill objectFit="cover" className="rounded-bl-[90px] rounded-tl-[90px] rounded-tr-[90px] bg-white p-1"  />
    </div>
    <div className="flex flex-col space-y-4 px-5">
    <h1 className="text-lg md:text-2xl font-semibold text-[#138999] group-hover:text-white">Quick fundraising</h1>
    <div className="flex items-center space-x-3">
    
     <div className="bg-transparent rounded-full flex items-center justify-center p-1 relative group-hover:bg-white ">
     <div className=" bg-transparent  h-16 w-16 group-hover:animate-spin  rounded-full border-2 border-[#36c691]  border-dashed flex items-center justify-center">
         
    
     </div>
     <div className="h-14 w-14  absolute top-2   bg-[#36c691] rounded-full flex items-center justify-center">
             <People height={40} width={40}  color="#FFFFFF"/>
         </div>

     </div>
     <p className="group-hover:text-white font-[900px]  text-sm md:text-md line-clamp-2">We poor standard chunk of Denounce righteous</p>
    </div>
    </div>

 </div>

 <div className={`bg-white group transition-all z-30 duration-500 ease-in-out  hover:bg-[#2e9ecd] flex flex-col p-3 m-3 rounded-[90px]`}>
    <div className="h-56 w-full relative ">
    <Image src="/child.jpg" alt="child" fill objectFit="cover" className="rounded-bl-[90px] rounded-tl-[90px] rounded-tr-[90px] bg-white p-1"  />
    </div>
    <div className="flex flex-col px-8 space-y-5">
    <h1 className="text-lg md:text-2xl font-semibold text-[#138999] group-hover:text-white ">Quick fundraising</h1>
    <div className="flex items-center space-x-3">
    
     <div className="bg-transparent rounded-full flex items-center justify-center p-1 relative group-hover:bg-white ">
     <div className=" bg-transparent  h-16 w-16 group-hover:animate-spin  rounded-full border-2 border-[#2e9ecd]  border-dashed flex items-center justify-center">
         
    
     </div>
     <div className="h-14 w-14  absolute top-2   bg-[#2e9ecd] rounded-full flex items-center justify-center">
             <People height={40} width={40} color="#FFFFFF" />
         </div>

     </div>

     <p className="group-hover:text-white font-[900px]  text-sm md:text-md line-clamp-2">We poor standard chunk of Denounce righteous</p>
    </div>

    </div>

 </div>

      </div>
    </div>
  );
};

export default BestService;
