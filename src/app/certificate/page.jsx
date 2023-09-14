"use client";

import React, { useRef } from "react";
import Image from "next/image";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { useSelector } from "react-redux";
import RightArrow from "../assests/icons/RightArrow";




// import dayjs from "dayjs";







const Page = () => {
  const formData = useSelector((state) => state.formData);

  const certificateref = useRef();

  const handleGenerateCertificate = async() => {
    html2canvas(certificateref.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      // create a new jspdf instance and add the screenshot as an image
      const pdf = new jsPDF("l", "mm", "a4", [297, 210]);
      pdf.addImage(imgData, "PNG", 0, 0, 297, 210);

      // download pdf
      pdf.save(`${formData.name.split(" ").join("_")}_certificate`);
    });
  };

  
  // const currentDate = dayjs().format("YYYY-MM-DD");
  // const currentTime = dayjs().format("HH:mm:ss");

  

 
  


  return (
    <>
   
    <div
      id="certificate"
      ref={certificateref}
      className="min-h-[600px]  mt-10 relative bg-gray-400 flex flex-col min-w-[200px] max-w-4xl mx-auto"
    >
      <Image
        src="/certi.png"
        fill
        alt="certificate"
        className="absolute inset-0"
        objectFit="cover"
      />

      <div className="absolute inset-0 grid place-content-center">
        <h1 className="text-5xl pt-1"> {formData.name}</h1>
      </div>
    </div>

    <div className="w-full grid place-content-center mt-10 ">
      <button
        onClick={handleGenerateCertificate}
        className="uppercase  rounded-md relative  bg-primary overflow-hidden group p-3 px-4 font-bold flex items-center gap-4 text-white tracking-wide"
      >
        <p className="z-50">Download Certificate</p>
        <div className="h-6 w-full bg-[#12636e] absolute rounded-t-md z-20  -translate-x-[100%] group-hover:-translate-x-0 transition-all duration-300 ease-in inset-0"></div>
        <div className="h-6 w-full bg-[#12636e] absolute rounded-b-md z-20 translate-x-[100%] group-hover:translate-x-0 transition-all duration-300 ease-in left-0 bottom-0"></div>
        <div className="z-50">
          <RightArrow height={17} width={17} color="#FFFFFF" />
        </div>
      </button>
    </div>
    </>
    
      
    
  );
};

export default Page;
