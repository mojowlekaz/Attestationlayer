'use client'
import React from 'react'
import Card from '../Common/Card/Card'
import Image from 'next/image'
import Part2 from './Part2'
import Part3 from './Part3'
import Footer from '../Footer/Footer'

export default function Part1() {
  interface CardItem {
    title: string
    purpose: string
    variant: string
    fnc: any
  }

  const cardItems: CardItem[] = [
    {
      title: 'Rookie Transactor',
      variant: 'active',
      purpose: 'Users with 10 or more Base transactions',
      fnc: click,
    },

    {
      title: 'Elite Transactor',
      variant: 'active',
      purpose: 'Users with 50 or more Base transactions',
      fnc: click,
    },
    {
      title: 'Epic Transactor',
      variant: 'active',
      purpose: 'Users with 120 or more Base transactions',
      fnc: () => {},
    },
    {
      title: 'Legendary Transactor',
      variant: 'active',
      purpose: 'Users with 120 or more Base transactions',
      fnc: () => {},
    },
    {
      title: 'Define Transactor',
      variant: 'active',
      purpose: 'Users with 120 or more Base transactions',
      fnc: () => {},
    },
    {
      title: 'Saint Transactor',
      variant: 'active',
      purpose: 'Users with 120 or more Base transactions',
      fnc: () => {},
    },
  ]

  const imageList = [
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 1' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 2' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 1' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 2' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 1' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 2' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 1' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 2' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 1' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 2' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 1' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 2' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 1' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 2' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 1' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 2' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 1' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 2' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 1' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 2' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 1' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 2' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 1' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 2' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 1' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 2' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 1' },
    { src: 'Logos/ethlogo.svg', width: 100, height: 500, alt: 'Image 2' },
  ]

  function click() {
    console.log('i am here')
  }
  interface Homedisplay {
    ethlogo: string
  }

  const imageUrl: Homedisplay = {
    ethlogo: '/Logos/ethlogo.svg',
  }
  return (
    <div className="flex flex-col h-full gap-5 w-full bg-000000E5 items-center">
      <div className="flex flex-col gap-5 w-[938px] pl-10 px-10 h-full pt-5 py-5  rounded-[10px] layer1">
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
              Reputation Badge
            </p>
            <p className="text-white font-normal text-[13px] leading-[15.73px] ">
              Complete given tasks and claim your NFT as reward!
            </p>
          </div>
        </div>

        <div className="Uboder flex rounded-[20px] flex-wrap w-full h-full">
          <div className="flex flex-wrap">
            {imageList.map((image, index) => (
              <div key={index} className="m-2">
                <Image
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-white text-[13px] text-center font-normal">
            * Only users who claim 7 or more Reputation Badge are eligible for
            A-Layer Loyalty Program.
          </p>
        </div>
      </div>
      <br />
      <div className="w-[938px] Uboder h-[49px] items-center flex rounded-[20px] pl-10">
        <p className="text-white font-bold text-[14px] uppercase leading-[16.94px] ">
          Part 1: Transactor
        </p>
      </div>

      <div className="flex flex-wrap w-[938px] h-full  justify-between mt-4">
        {cardItems.map((index, key) => (
          <div key={key} className="mb-4">
            <Card
              title={index.title}
              variant={index.variant}
              purpose={index.purpose}
              fnc={index.fnc}
            />
          </div>
        ))}
      </div>
      <Part2 />
      <Part3 />
    </div>
  )
}
