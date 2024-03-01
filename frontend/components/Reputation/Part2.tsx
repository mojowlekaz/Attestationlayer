'use client'
import React from 'react'
import Card from '../Common/Card/Card'
import Image from 'next/image'

export default function Part2() {
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

  function click() {
    console.log('i am here')
  }

  return (
    <div className="flex flex-col h-full gap-5 w-full items-center">
      <div className="w-[938px] Uboder h-[49px] items-center flex rounded-[20px] pl-10">
        <p className="text-white font-bold text-[14px] uppercase leading-[16.94px] ">
          Part 2: Active Seasonal
        </p>
      </div>

      <div className="flex flex-wrap w-[938px]  justify-between mt-4">
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
    </div>
  )
}
