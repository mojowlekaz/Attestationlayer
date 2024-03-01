'use client'
import { Button } from '@/components/Common/Button/Button'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  interface Homedisplay {
    Image: string
    ethlogo: string
    alt: string
  }

  interface herotext {
    H1: string
    p: string
    smallP: string
    bText: string
  }
  const text: herotext = {
    H1: 'Attestation Layer',
    p: 'Cross-Platform MultiChain Soulbound Reputation Layer',
    smallP:
      'A-Layer helps you collect “badges” as SBT and Layer Scores that prove your humanity,reputation and quality interactions across layers of blockchains using onchain records and Third-Party Attestation Data.',
    bText:
      'A-Layer score your reputation with Layer Score, we do not collect any sensitive data or record users ip',
  }

  const imageUrl: Homedisplay = {
    Image: '/Logos/homelogo.svg',
    ethlogo: '/Logos/ethlogo.svg',
    alt: 'Home',
  }

  function addnumber(): number {
    return 2 + 2
  }
  return (
    <div className="w-full h-screen flex justify-center items-center gap-10 bg-000000E5 ">
      <div className="flex h-screen ">
        <Image
          src={imageUrl.Image}
          // style={{ width: '100%', height: '100%' }}
          width={560}
          height={500}
          alt={imageUrl.alt}
        />
      </div>
      <div>
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="font-bold text-[55px] text-FFFEFE leading-[65px]">
              {text.H1}
            </h1>
            <p className="text-12F1E4 text-[20px] font-normal leading-[24.2px]">
              {text.p}
            </p>
          </div>
          <div className="w-[500px] flex flex-col gap-4">
            <p className=" font-normal text-[15px] text-FFFEFE   leading-[18.15px]">
              {text.smallP}
            </p>

            <p className=" font-normal text-[15px] text-FFFEFE   leading-[18.15px]">
              {text.bText}
            </p>
          </div>
        </div>
        <br />
        <Button variant="base" onClick={addnumber}>
          <div className="flex gap-1 justify-center items-center text-center">
            <Image
              src={imageUrl.ethlogo}
              width={30}
              height={30}
              alt={imageUrl.alt}
            />
            <p className="text-white font-normal text-[15px] leading-[18.15px]">
              Sign In
            </p>
          </div>
        </Button>
      </div>
    </div>
  )
}
