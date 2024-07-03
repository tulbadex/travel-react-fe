import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/header'
import Banner from './component/Banner/banner'
import AdventureSection from './component/AdventureSection/adventureSection'
import UniquePlacesSection from './component/UniquePlacesSection/uniquePlaces'
import Reviews from './component/Reviews/reviews'
import Footer from './component/Footer/footer'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <AdventureSection />
      <UniquePlacesSection />
      <Reviews />
      <Footer />
    </>
  )
}

export default App
