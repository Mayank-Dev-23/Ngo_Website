import React from 'react'
import Causesgoals from '../components/sections/Causesgoals'
import Image from 'next/image'
import Link from 'next/link'

const CausesGrid = () => {
  return (
    <div>

        {/* top section  */}
      <div className="h-[15rem] md:h-[40rem] relative w-full">
        <Image
          src="/aboutbanner.jpg"
          fill
          objectFit="cover"
          objectPosition="center"
          alt="banner"
        />
        <div className="flex flex-col absolute inset-0 justify-center p-5 xl:px-[30rem]">
          <h1 className="text-4xl text-white font-semibold lg:text-7xl">
           Causes
          </h1>
          <div className="flex items-center space-x-1 ">
            <Link href="/" className="text-white text-lg ">
              Home /
            </Link>
            <Link href="/team" className="text-seconday text-lg">
              Causes
            </Link>
          </div>
        </div>
      </div>
        <Causesgoals />
    </div>
  )
}

export default CausesGrid