


import Image from 'next/image'
import HomePage from './components/HomePage'
import Service from './components/sections/Service'
import About from './components/sections/About'
import BestService from './components/sections/BestService'
import Donation from './components/sections/Donation'
import Causesgoals from './components/sections/Causesgoals'
import Reviews from './components/sections/Reviews'
import Projects from './components/sections/Projects'
import ContactUs from './components/sections/ContactUs'





export default function Home() {
  
  return (
    <main className='h-auto w-full relative  '>
  
      

      <HomePage /> 
      <Service/>
      <About />
      <BestService />
      <Donation />
      <Causesgoals />
      <Reviews />
      <Projects />
      <ContactUs />
      
     
    </main>
  )
}
