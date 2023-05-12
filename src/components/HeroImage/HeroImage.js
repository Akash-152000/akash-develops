import React from 'react'
import './heroimage.css'
import image from '../../images/1678358896972.JPG'

const HeroImage = () => {
  return (
    <div className='heroImage'>
      <img className='image' src={image} alt="" />
      <div className='img-Overlay'></div>
      
    </div>
  )
}

export default HeroImage