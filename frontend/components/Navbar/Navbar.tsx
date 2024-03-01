'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from '../Common/Button/Button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  interface NavLink {
    label: string
    url: string
  }

  const NavContent = {
    Image: '/Logos/logo.svg',
    title: 'Attestation Layer',
    alt: 'AttestationLogo',
  }
  const pathname = usePathname()
  const [active, setActive] = useState('')
  const [network, setNetwork] = useState('Ethereum')
  const [walletAddress, setWalletAddress] = useState('0xhtrhehe')

  useEffect(() => {
    console.log(pathname)
  })
  function handleClick(label: string) {
    setActive(label)
  }

  const navLinks: NavLink[] = [
    { label: 'Dashboard', url: '/' },
    { label: 'Badges', url: '/' },
    { label: 'Roadmap', url: '/' },
    { label: 'Docs', url: '/' },
  ]

  return (
    <div className="w-full h-full bg-000000E5 flex p-10 text-center pl-10">
      <div className="borderR bg-black justify-between px-5 w-full flex rounded-[13px]">
        <div className="flex items-center">
          <Image
            src={NavContent.Image}
            width={100}
            height={100}
            alt={NavContent.alt}
          />
          <p className="text-white font-bold Navtitle text-[18px] ">
            {NavContent.title}
          </p>
        </div>
        <div className="justify-center items-center gap-2 flex">
          {navLinks.map((link, key) => (
            <Link key={key} href={{ pathname: link.label.toLocaleLowerCase() }}>
              <Button
                variant={`${pathname == `/${link.label.toLocaleLowerCase()}` ? 'clicked' : 'nav'}`}
                onClick={() => handleClick(link.label)}
              >
                <p className="text-white font-normal text-[16px] text-center">
                  {link.label}
                </p>
              </Button>
            </Link>
          ))}
        </div>
        <div className="justify-center items-center text-center gap-2 flex">
          <div className="bg-5D5E5E80 w-[106px] h-[29px] justify-center flex items-center rounded-[13px]">
            <p className="text-white font-normal text-[13px] text-center ">
              {network}
            </p>
          </div>
          <p className="text-white font-normal text-[13px] text-center ">
            {walletAddress}
          </p>
        </div>
      </div>
      <div></div>
    </div>
  )
}
