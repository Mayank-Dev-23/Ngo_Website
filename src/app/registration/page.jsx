"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from "@/slices/formDataSlice";
import { useRouter } from "next/navigation";


// import html2pdf from 'html2pdf.js'

const Registration = () => {
  const [FormData, SetFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    aadhar: "",
    gender: "",
  });
  const dispatch = useDispatch();
  const router=useRouter();
  

  const handleChange = (e) => {
    SetFormData({ ...FormData, [e.target.name]: e.target.value });
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  // submitting form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(FormData);

    try {
      await axios.post('http://localhost:4000/register', FormData);
       SetFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      aadhar: "",
      gender: "",
    });
    

    router.push("/certificate");
    
    
    } catch (error) {
      console.error('Error submitting form data:', error);
    }

   
   
  };

  return (
    <div className="min-h-screen">
      {/* top section  */}
      <div className="h-[15rem] md:h-[40rem] relative w-full ">
        <Image
          src="/certificate.jpg"
          fill
          alt="cirtificatebanner"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="bg-black opacity-25 absolute inset-0"></div>
        <div className="flex flex-col absolute inset-0 justify-center p-5 xl:px-[30rem]">
          <h1 className="text-4xl text-white font-semibold lg:text-7xl">
            Registration
          </h1>
          <div className="flex items-center space-x-1 ">
            <Link href="/" className="text-white text-lg ">
              Home /
            </Link>
            <Link href="/team" className="text-seconday text-lg">
              Registration
            </Link>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 shadow-lg  max-w-5xl mt-20 mx-auto p-3 ">
        <div className="bg-black grid  h-[30rem]  md:h-auto place-content-center relative">
          <Image
            src="/registration.jpg"
            alt="certificateillustration"
            fill
            objectFit="cover"
            className="opacity-50"
          />
          <div className="absolute inset-0 grid place-content-center">
            <h1 className="text-5xl font-semibold md:max-w-[400px] text-center text-white  ">
              Become a Member to get the certificate
            </h1>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="bg-white flex flex-col justify-center border border-gray-100  p-5">
            <div className="flex flex-col space-y-3">
              <label htmlFor="name">Name</label>
              <input
                onChange={handleChange}
                required
                value={FormData.name}
                id="name"
                name="name"
                type="text"
                placeholder="Your Name*"
                className="p-2 focus:border-[#138999] outline-none border-dashed border-2 rounded-md border-gray-400"
              />
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChange}
                required
                value={FormData.email}
                id="email"
                name="email"
                type="text"
                placeholder="Your Email*"
                className="p-2 focus:border-[#138999] outline-none border-dashed border-2  rounded-md border-gray-400"
              />
              <label htmlFor="phone">Phone Number</label>
              <input
                onChange={handleChange}
                required
                value={FormData.phone}
                id="phone"
                name="phone"
                type="number"
                placeholder="Your Phone Number*"
                className="p-2 focus:border-[#138999] outline-none border-dashed border-2 rounded-md border-gray-400"
              />
              <label htmlFor="address">Address</label>
              <input
                onChange={handleChange}
                required
                value={FormData.address}
                name="address"
                type="text"
                id="address"
                placeholder="Your Address*"
                className="p-2 focus:border-[#138999] outline-none border-dashed border-2 rounded-md border-gray-400"
              />
              <label htmlFor="aadhaar">Aadhaar Number</label>
              <input
              value={FormData.aadhar}
                onChange={handleChange}
                required
                name="aadhar"
                type="text"
                id="aadhaar"
                placeholder="Your Aadhaar Number*"
                className="p-2 focus:border-[#138999] outline-none border-dashed border-2 rounded-md border-gray-400"
              />
              <label htmlFor="gender">Gender</label>
              <input
              value={FormData.gender}
                onChange={handleChange}
                required
                name="gender"
                id="gender"
                type="text"
                placeholder="Gender*"
                className="p-2 focus:border-[#138999] outline-none border-dashed border-2 rounded-md border-gray-400"
              />
            </div>
            <div className="flex items-center justify-center mt-8 w-full">
              <button
                type="submit"
                className="p-4 bg-[#138999] text-white w-full font-semibold tracking-wide rounded-md"
              >
                Register
              </button>
            </div>
          </div>
        </form>
        {/* <div className="mt-8">
        {name && <CertificateTemplate id="certificateTemplate" recipientName={name} />}
      </div> */}
      </div>
    </div>
  );
};

export default Registration;
