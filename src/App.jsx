import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/header'
import Banner from './component/Banner/banner'
import Flight from './component/Flight/flight'
import UniquePlaces from './component/UniquePlaces/uniquePlaces'
import Reviews from './component/Reviews/reviews'
import Footer from './component/Footer/footer'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Flight />
      <UniquePlaces />
      <Reviews />
      <Footer />
    </>
  )
}

export default App
