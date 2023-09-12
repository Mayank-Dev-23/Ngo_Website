'use client';
import React from "react";

import Badge from "../assests/icons/Badge";
import dayjs from "dayjs";
import Certificatetemplate from "../components/CertificateTemplate";






const page = () => {

  
  const currentDate = dayjs().format("YYYY-MM-DD");
  const currentTime = dayjs().format("HH:mm:ss");

  

 
  


  return (
   
      <Certificatetemplate />
      
    
  );
};

export default page;
