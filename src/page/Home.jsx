import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import Banner from '../component/Home/banner'
import AdventureSection from '../component/Home/adventureSection'
import UniquePlacesSection from '../component/Home/uniquePlaces'
import Reviews from '../component/Home/reviews'

function Home() {

  return (
    <>
      <Banner />
      <AdventureSection />
      <UniquePlacesSection />
      <Reviews />
    </>
  )
}

export default Home
