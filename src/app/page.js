import Image from 'next/image'
import HomePage from './components/HomePage'
import Service from './components/sections/Service'
import About from './components/sections/About'
import BestService from './components/sections/BestService'
import Donation from './components/sections/Donation'


export default function Home() {
  return (
    <main className='h-screen w-full '>

      <HomePage /> 
      <Service/>
      <About />
      <BestService />
      <Donation />
     
    </main>
  )
}
