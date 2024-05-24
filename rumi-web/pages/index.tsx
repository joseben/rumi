import React, { useState } from 'react'
import Nav from "@/components/Nav"
import MobileNav from '@/components/MobileNav'
import Hero from '@/components/Hero'
import About from '@/components/About'

const HomePage = () => {
  const [nav,setnav]=useState(false)
  const openNav =()=> setnav(true)
  const closeNav =()=> setnav(false)

  return (
    <div className='overflow-x-hidden'>
      <div>
        {/* Navbar */}
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav}/>
        {/* Hero section */}
        <Hero/>
        <div className='relative z-[30]'>
          <About/>
        </div>
      </div>
    </div>
  )
}

export default HomePage