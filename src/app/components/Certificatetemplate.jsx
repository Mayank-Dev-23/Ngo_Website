import React,{useRef} from 'react'
import Image from "next/image";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import RightArrow from '../assests/icons/RightArrow';

const Certificatetemplate = () => {
    const name="mayank"
    const certificateref=useRef();

    const handleGenerateCertificate = async () => {
        alert('downloading')
      
        html2canvas(certificateref.current,{scale:2}).then(canvas=>{
          const imgData=canvas.toDataURL('image/png');
          // create a new jspdf instance and add the screenshot as an image
          const pdf=new jsPDF('l','mm','a4',[297,250])
          pdf.addImage(imgData,'PNG',0,0,297,250)
      
      
          // download pdf 
          pdf.save(`${name.split(' ').join('_')}_certificate`)
      
        })
        };
  return (
    <div>
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
       
     
    </div>
    
    <div className="w-full grid place-content-center mt-10 ">
      <button
      
        className="p-4 bg-[#138999] text-white items-center rounded-md"
      >
        Click here to download the certificate
      </button>
      <button
      onClick={handleGenerateCertificate}
      className="uppercase  rounded-md relative  bg-primary overflow-hidden group p-3 px-4 font-bold flex items-center gap-4 text-white tracking-wide">
                  <p className="z-50">Download Certificate</p>
                  <div className="h-6 w-full bg-[#12636e] absolute rounded-t-md z-20  -translate-x-[100%] group-hover:-translate-x-0 transition-all duration-300 ease-in inset-0"></div>
                  <div className="h-6 w-full bg-[#12636e] absolute rounded-b-md z-20 translate-x-[100%] group-hover:translate-x-0 transition-all duration-300 ease-in left-0 bottom-0"></div>
                  <div className="z-50">
                    <RightArrow height={17} width={17} color="#FFFFFF" />
                  </div>
                </button>
    </div>
    </div>
  )
}

export default Certificatetemplate