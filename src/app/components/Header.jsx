"use client"



import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Facebook from '../assests/icons/Facebook';
import Twitter from '../assests/icons/Twitter';
import Vimeo from '../assests/icons/Vimeo';
import Pinterest from '../assests/icons/Pinterest';
import CustomDropdown from './utils/CustomDropdown';
import Search from '../assests/icons/Search';
import RightArrow from '../assests/icons/RightArrow';
import Dots from '../assests/icons/Dots';

import Sidebar from './Sidebar';
import Hamburger from '../assests/icons/Hamburger';
import Link from 'next/link';

const categories = [
    {
      name: 'Home',Link:'/',
      sublinks: [
        {name:'Home',Link:'/'}
      ],
    },
    {
      name: 'Pages',
      sublinks: [
        { name: 'About', Link:'/about'  },
        { name: 'Contact', Link: '/contact' },
        {name:'Team',Link:'/team'},
      ],
    },
    {
      name: 'Causes',
      sublinks: [
        { name: 'Causes Grid', Link: '/causes' },
        
      ],
    },
    {
        name: 'Services',
        sublinks: [
            { name: 'Sublink 21', Link: '/sublink21' },
            { name: 'Sublink 22', Link: '/sublink22' },
          ],
      },
      {
        name: 'Projects',
        sublinks: [
            { name: 'Sublink 21', Link: '/sublink21' },
            { name: 'Sublink 22', Link: '/sublink22' },
          ],
      },
      {
        name: 'Blog',
        sublinks: [
            { name: 'Sublink 21', Link: '/sublink21' },
            { name: 'Sublink 22', Link: '/sublink22' },
          ],
      },
      
  ];

const Header = () => {
    const texts = ['Get your work done fast', 'Give Ready to help us']; // List of texts to cycle through
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState(texts[currentTextIndex]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);



    

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        document.body.classList.toggle('overflow-hidden'); // Disable body scroll
    };


    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentTextIndex + 1) % texts.length;
            setCurrentTextIndex(nextIndex);
            setCurrentText(texts[nextIndex]);
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval);
    }, [currentTextIndex]);



  return (
    
    <header className='bg-white  flex w-full shadow-lg sticky top-0  z-50 space-x-10 h-20 lg:h-full   '>
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

            {/* logo  */}
            <div className='z-40 hide relative'>
            <div className='absolute -top-[11%] left-[1.75rem]  z-30'>
        <div className='relative h-40 w-40'>
            <Link href="/" > <Image src="/sikarialogo.png" fill alt="Sikaria Foundation" objectFit='contain' /></Link>
        </div>
        </div>
      <div className="relative w-44 h-[9rem] pl-[6.4rem]">
                <div className="absolute w-full h-full clip-polygon">
                    
                </div>
            </div>
            </div>
       
            <div className='bg-white w-full z-30 flex flex-col hide'>
                <div className=' bg-[#f1f6f7] px-28 py-3 flex justify-between items-center'>
                   <h1 className='flex items-center text-seconday '>NEWS:  <p className='pl-1 text-gray-500'> {currentText}</p> </h1>
                   <div className='flex items-center space-x-1 '>
                    <h1 className='text-[#636363]'>Visit our social pages:</h1>
                   <div className='flex items-center space-x-4 pr-20'>
                   <Facebook  height={20} width={20} color="#DF5311"/>
                    <Twitter height={20}  width={20} color="#138999"/>
                    <Vimeo height={20} width={20} color="#8139e7" />
                    <Pinterest height={20} width={20} color="#7ac48d"/>
                   </div>
                </div>
                </div>

                <div className='flex items-center justify-between h-full'>
                <div className='flex items-center justify-between px-28 h-full w-[55%] '>
                {categories.map((category,i)=>{
        return (
            <CustomDropdown key={i} triggerId={`category-${i}`} category={category} />
        )
      })}
                </div>

                <div className='flex items-center space-x-24 h-full'>
                    <div className='flex items-center space-x-7'>
                    <Link  href="/registration" className='text-md font-semibold text-[#144047] hover:text-[#138999] hover:underline'>Become A Member</Link>
                    <div className='h-8 w-[1px] bg-gray-400'></div>
                    <Link href="/donate">
                    <button className='uppercase  rounded-md relative  bg-primary overflow-hidden group p-3 px-4 font-bold flex items-center gap-4 text-white tracking-wide'><p className='z-50'>donate now</p>
                    <div className='h-6 w-full bg-[#12636e] absolute rounded-t-md z-20  -translate-x-[100%] group-hover:-translate-x-0 transition-all duration-300 ease-in inset-0'></div>
                    <div className='h-6 w-full bg-[#12636e] absolute rounded-b-md z-20 translate-x-[100%] group-hover:translate-x-0 transition-all duration-300 ease-in left-0 bottom-0'></div>
                    <div className='z-50'>
                    <RightArrow height={17} width={17} color="#FFFFFF" />
                    </div>
                 
                    </button>
                    </Link>
                    </div>
                   
                    <div onClick={toggleSidebar} className='h-full w-24 bg-[#FAE5DC]  cursor-pointer grid place-content-center '>
                   <div className='border border-[#636363] p-1 hover:rotate-45 transition-transform ease-in'>
                   <Dots  height={27} width={27} color="#636363"/>

                   

                   </div>
                </div>

                </div>

               
                </div>
                
              
            </div>

            {/* mob  */}
            <div className='flex items-center justify-between show w-full px-4'>
              <div className="h-16 w-32 relative -ml-10">
                <Image src="/sikarialogo.png" fill objectFit='contain' alt="sikaria foundation" />
              </div>
              <div className='cursor-pointer'>
              <Hamburger  height={40} width={40}  />
              </div>
            </div>

    </header>
    
  )
}

export default Header