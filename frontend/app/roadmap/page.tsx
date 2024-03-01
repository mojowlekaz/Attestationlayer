import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import React from 'react'

export default function page() {
  interface Homedisplay {
    ethlogo: string
    roadmap: string
  }

  const imageUrl: Homedisplay = {
    roadmap: '/Roadmap/r.svg',
    ethlogo: '/Logos/ethlogo.svg',
  }
  return (
    <div>
      <Navbar />
      <div className="h-screen w-full bg-000000E5 flex flex-col gap-5 items-center">
        <div className="flex flex-col gap-5 w-[900px] pl-10 px-10 h-[129px] pt-5 py-5  rounded-[10px] layer1">
          <div className="flex gap-2">
            <Image
              src={imageUrl.ethlogo}
              // style={{ width: '100%', height: '100%' }}
              width={100}
              height={100}
              alt={imageUrl.ethlogo}
            />
            <div className="flex flex-col gap-2 justify-center">
              <p className="text-white font-bold text-[20px] leading-[24.2px] ">
                Roadmap
              </p>
              <p className="text-white font-normal text-[13px] leading-[15.73px] ">
                Please note that no roadmaps are final, expect layers of chaos
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-[900px] pl-10 px-10 h-[384px] pt-5 py-5  rounded-[10px] layer1">
          <Image
            src={imageUrl.roadmap}
            // style={{ width: '100%', height: '100%' }}
            width={500}
            height={500}
            layout="responsive"
            objectFit="contain"
            objectPosition="center"
            alt={imageUrl.roadmap}
          />
        </div>
      </div>
    </div>
  )
}
