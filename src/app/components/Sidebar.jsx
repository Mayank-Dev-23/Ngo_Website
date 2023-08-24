import React from 'react';
import Link from 'next/link';
import Close from '../assests/icons/Close';
import Image from 'next/image';
import Facebook from '../assests/icons/Facebook';
import Twitter from '../assests/icons/Twitter';
import Instagram from '../assests/icons/Instagram';

const social=[
    {id:1,name:'Facebook',icon:<Facebook height={20} width={20} color="#138999" />},
    {id:2,name:'Twitter',icon:<Twitter  height={20} width={20} color="#138999"/>},
    {id:3,name:"Instagram",icon:<Instagram height={20} width={20}  color="#138999"/>},
    {id:3,name:"Instagram",icon:<Instagram height={20} width={20} color="#138999" />},
]

const Sidebar = ({ isOpen, onClose }) => {
    return (
        // <div className={` relative  h-full  z-50 ${isOpen ? 'translate-x-[100%]' : 'translate-x[0%]'} `}>
            //  <div class="fixed inset-0 bg-black h-full bg-opacity-50 z-50 transform transition-transform ease-in-out  "></div>
            <div className={`fixed top-0 right-0 h-full w-[30rem] p-10 z-50 bg-[#12636e] text-white transform transition-transform duration-500 ease-in-out ${!isOpen ? 'translate-x-[100%]' : '-translate-x-[0%]'}`}>
           <div className='flex justify-end  w-full'>
           <div onClick={onClose} className='bg-white inline-block p-4 rounded-full cursor-pointer'>
            <Close height={20} width={20} />
           </div>
            </div>

            <div className='flex flex-col items-center '>
                <div className='h-36 w-64 relative'>
                    <Image src="/desktoplogo.png" fill objectFit='contain' />
                </div>
                <h1 className='text-lg text-center text-white mt-4'>Nonta is a website that builds and organizes nonprofit programs for private and government organizations.</h1>
                <h1 className='mt-14 text-4xl font-semibold'>Contact Info</h1>
                <div className='flex flex-col mt-4 space-y-3'>
                <p className='text-lg text-center text-white'>+123 456 789 33 3</p>
                <h1 className='text-lg text-center text-white'>Madison Street, NY United States of America</h1>
                <h1 className='text-lg text-center text-white'>nonta@gmail.com</h1>
                    </div>

                    <h1 className='mt-14 text-4xl font-semibold'>Office Address</h1>
                    <p className='mt-6'>+Time Square, New York USA, 3454</p>
                    <div className='flex items-center space-x-3 mt-8'>

                        {social.map((social,i)=>{
                            return(
                                <div key={i} className='bg-white rounded-full p-3'>
                                    {social.icon}
                                </div>
                            )
                        })}


                        </div>
            </div>
        </div>
        // </div>
    );
};

export default Sidebar;
