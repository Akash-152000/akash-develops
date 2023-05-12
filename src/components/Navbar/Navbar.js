import React, { useContext } from 'react'
import './navbar.css'
import logo from '../../images/fotor_2023-5-9_17_3_58.png'
import Button from '../Button/Button'
import handleScroll from '../../context/handleScroll'

const Navbar = (props) => {

  return (
    <div className='nav'>
      <div className="logo">
        <img className='logoimg' src={logo} alt="" />
      </div>
      <div className="links">
        <ul>
          <li>Home</li>
          <li onClick={props.handleRef1}>About</li>
          <li>Resume</li>
          <li onClick={props.handleRef4}>Portfolio</li>
          <li onClick={props.handleRef5}>Contact</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="download-cv"><Button content="Download CV" color="#585d65" borderColor="#f5f5f5" name="download" /></div>
    </div>
  )
}

export default Navbar