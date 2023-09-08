'use client'

import Image from 'next/image';
import React from 'react';
import Badge from '../assests/icons/Badge';
import dayjs from 'dayjs';

const CertificateTemplate = () => {
    const currentDate = dayjs().format('YYYY-MM-DD');
    const currentTime = dayjs().format('HH:mm:ss');

    const handleDownloadPdf = () => {
        const element = document.getElementById('content-to-pdf'); // Replace with the ID of your HTML content element
        const pdfOptions = {
          margin: 10,
          filename: 'document.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        };
    
        window.html2pdf()
          .from(element)
          .set(pdfOptions)
          .outputPdf((pdf) => {
            // Trigger the download of the PDF
            pdf.output('dataurlnewwindow');
          });
      };
  return (
    <div>
    <div  id="content-to-pdf" className='min-h-[600px] mt-10 relative bg-gray-400 flex flex-col min-w-[400px] max-w-4xl mx-auto'>
        
<Image src="/template.jpg" fill className='absolute inset-0' objectFit='cover' />
<div className='flex flex-col  absolute inset-0 items-center w-full h-full justify-center'>
    <Badge height={100} width={100}  color="#139089"/>
    <h1 className='text-5xl mt-4 italic '>Certiticate of </h1>
    <h1 className='text-3xl italic'>Appericiation</h1>
    <p className='mt-6'>Presented To</p>
    <h1 className='text-4xl font-semibold  mt-8'>Pankaj Ji</h1>
   <div className='h-[2px] w-full bg-gray-400 max-w-2xl mx-auto'></div>
   <p className='max-w-[500px] text-center mt-2 mx-auto'>For the extraordinary participation as a material speaker in the seminar "Building a Harmonious Family" on 2 May 2022</p>
   <div className='flex items-center  max-w-[700px] mt-5 justify-between w-full'>
    <p> Date: {currentDate}</p>
    <p>Time: {currentTime}</p>
   </div>
</div>

    </div>
    <div className='w-full grid place-content-center mt-10 '>
        <button 
        onClick={handleDownloadPdf}
        className='p-4 bg-gray-500 text-white items-center rounded-md'>Download</button>
    </div>
    </div>
  );
};

export default CertificateTemplate;
