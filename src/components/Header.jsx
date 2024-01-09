import React from 'react'
import { CgClose } from "react-icons/cg";
import './Header.css'
const Header = () => {
  return (
    <div className='header1'>
        <CgClose className='close' /><br></br>
        <span className='Span1'>Epic Games : An American Video Game And Software Developer</span><br></br>
        <span className='Span1'> And Publisher Based In Cary,North Carolina</span>
    </div>
  )
}

export default Header