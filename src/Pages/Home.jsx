import React from 'react'
import Hero from '../Components/Hero.jsx'
import Categories from '../Components/Categories.jsx'
import Packages from '../Components/Packages.jsx'
import HowItWorks from '../Components/HowItWorks.jsx'
import LatestWork from '../Components/LatestWork.jsx'
import InstagramStrip from '../Components/InstagramStrip.jsx'
import BookingCTA from '../Components/BookingCTA.jsx'
import Reveal from '../Components/Reveal.jsx'

function Home() {
  return (
    <>
      <Hero />
      <Reveal><Categories /></Reveal>
      <Reveal><Packages /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><LatestWork /></Reveal>
      <Reveal><InstagramStrip /></Reveal>
      <Reveal><BookingCTA /></Reveal>
    </>
  )
} 

export default Home