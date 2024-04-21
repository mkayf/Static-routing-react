import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <h3><Link to='/'>React router</Link></h3>
        </div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/services'>Services</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar