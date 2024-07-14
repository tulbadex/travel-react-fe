import { useState } from 'react'
import '../App.css'
import PackageContent from '../component/Package/packageContent'
import PackageHeroSection from '../component/Package/packageHeroSection'

function Package() {

  return (
    <>
      <PackageContent />
      <PackageHeroSection />
    </>
  )
}

export default Package