import Image from 'next/image'
import React from 'react'

interface FooterProps {
  badges: boolean
}

export default function Footer({ badges }: FooterProps) {
  const Imageicon = [
    {
      url: '/FooterIcons/d.svg',
    },
    {
      url: '/FooterIcons/x.svg',
    },
    {
      url: '/FooterIcons/m.svg',
    },
  ]
  return (
    <div className="flex gap-2 w-full h-full py-10 bg-000000E5 justify-center  items-center">
      <div
        className={`w-[${badges === true ? '938px' : '900px'}]  justify-end  items-center flex gap-2`}
      >
        <p className="text-white font-normal text-[20px] leading-[24.2px] ">
          Privacy Policy / Terms of Service
        </p>
        <div className="flex gap-2 items-center">
          {Imageicon.map((image, key) => (
            <div key={key}>
              <Image src={image.url} width={50} height={50} alt="icons" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
