import React, { useState } from 'react'
import logo from '../../assets/img/logo.png'
import { FaUser, FaShoppingCart } from 'react-icons/fa'
import { GoSearch } from 'react-icons/go'
import Hamburger from './Hamburger'

// Navigation bar
function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev)    
  }

  return (
    <nav className='navBar'>
      <div className='logoMenuGroup'>
        <div className='hamburgerDiv' onClick={handleToggle}>
          <Hamburger isOpen={navbarOpen} />
        </div>

        <div className='logoDiv'>
          <img src={logo} className='logoImg' alt='logo image' />
        </div>
      </div>

      <div className='menuInBar'>
        <ul>
          <li>Men's</li>
          <li>Women's</li>
          <li>accessories</li>
          <li>sale!</li>
        </ul>
      </div>

      {/* Shown by hamburger button click */}
      <div className={`navMenu ${navbarOpen ? 'show' : 'hide'}`}>
        <ul>
          <li>Men's</li>
          <li>Women's</li>
          <li>accessories</li>
          <li>sale!</li>
        </ul>
      </div>

      <div className='iconDiv'>
        <GoSearch />
        <FaUser />
        <FaShoppingCart />
      </div>
    </nav>
  )
}

export default Navbar
