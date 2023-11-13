import React from 'react'
import './style.css'
import TemporaryDrawer from './drawer.js'
import Button from '../Button'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='navbar'>
    <h1 className='logo'>Crypro Tracket <span style={{color:"var(--blue)"}}>.</span></h1>

    <div className='links'>
      <Link to='/'><p className='link'>Home</p></Link>
      <Link to='/dashboard'><p className='link'>Compare</p></Link>
      <Link to='/'><p className='link'>Watchlist</p></Link>
      <Link to='/'>
        <Button 
        outline = {true}
        text={"Dashboard"}
        onclick={()=>{console.log("jfgdkf")}}

        />
      </Link>
    </div>
    <div className='mobile_menu'>
      <TemporaryDrawer/>
    </div>
    </div>
  )
}

export default Header