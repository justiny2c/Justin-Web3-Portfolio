import React, {useState} from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"


function Navbar() {
  return (
    <div>
        <nav className='navbar'>
            <div className='nav-bar-container'>
                <Link to="/" className="navbar-logo">
                   <h1>JUSTIN</h1>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar