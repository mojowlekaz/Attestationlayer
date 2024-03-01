import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Part1 from '@/components/Reputation/Part1'
import React from 'react'

export default function page() {
  return (
    <div className="h-full w-full ">
      <Navbar />
      <Part1 />
      <Footer badges={true} />
    </div>
  )
}
