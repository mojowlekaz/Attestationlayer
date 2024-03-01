import Dashboard from '@/components/Dashboard/Dashboard'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <Footer badges={false} />
    </div>
  )
}
