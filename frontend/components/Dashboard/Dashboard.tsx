import Image from 'next/image'
import React from 'react'
import Userportfolio from './Userportfolio'
import Footer from '../Footer/Footer'

export default function Dashboard() {
  interface Homedisplay {
    ethlogo: string
  }

  const imageUrl: Homedisplay = {
    ethlogo: '/Logos/ethlogo.svg',
  }
  return (
    <div className="w-full h-full bg-000000E5   flex flex-col gap-10 justify-center items-center items">
      <div className="flex gap-2 w-[900px] rounded-[10px] layer">
        <Image
          src={imageUrl.ethlogo}
          // style={{ width: '100%', height: '100%' }}
          width={100}
          height={500}
          alt={imageUrl.ethlogo}
        />
        <div className="flex flex-col gap-2 justify-center">
          <p className="text-white font-bold text-[20px] leading-[24.2px] ">
            Layer Score
          </p>
          <p className="text-white font-normal text-[13px] leading-[15.73px] ">
            Earn points daily based on your onchain badges
          </p>
        </div>
      </div>
      <Userportfolio />
    </div>
  )
}
