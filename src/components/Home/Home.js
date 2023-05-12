import React from 'react'
import './home.css'
import HeroImage from '../HeroImage/HeroImage'
import HomeContent from '../HomeContent/HomeContent'
import HomeSocials from '../HomeSocials/HomeSocials'

const Home = () => {
  return (
    <div className='home'>
      <HomeSocials/>
      <HomeContent/>
      <HeroImage/>
    </div>
  )
}

export default Home