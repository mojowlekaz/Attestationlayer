import React from 'react'
import { Button } from '../Button/Button'

interface CardProps {
  title: string
  purpose: string
  variant: string
  fnc: () => void
}

export default function Card({
  title,
  purpose,
  variant,
  fnc,
}: CardProps): JSX.Element {
  return (
    <div className="flex flex-col w-[287px] h-[191px] Uboder py-5 rounded-[20px] justify-around pl-5 px-5">
      <p className="text-white font-bold text-[24px] ">{title}</p>
      <p className="text-white font-bold text-[14px] ">{purpose}</p>
      <Button variant={variant} onClick={fnc}>
        <p>Claim</p>
      </Button>
    </div>
  )
}
