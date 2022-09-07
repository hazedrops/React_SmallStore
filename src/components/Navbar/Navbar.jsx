import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoStorefrontOutline } from 'react-icons/io5'
// import logo from '../../assets/img/newImages/logo_main.png'
import { FaUser, FaShoppingCart } from 'react-icons/fa'
import { GoSearch } from 'react-icons/go'
import Hamburger from './Hamburger'
import Submenu from './Submenu'

// Navigation bar
function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev)
  }

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  // const handleMouseOut = () => {
  //   setIsHovering(false);
  // };

  return (
    <>
      <nav className='navBar'>
        <div className='logoMenuGroup'>
          <div className='hamburgerDiv' onClick={handleToggle}>
            <Hamburger isOpen={navbarOpen} />
          </div>

          <div className='logoDiv'>
            {/* <img src={logo} className='logoImg' alt='logo' /> */}
            <Link to='/'>
              <IoStorefrontOutline className='logoIcon' alt='logo' />
            </Link>
          </div>
        </div>

        <div className='menuInBar'>
          <ul>
            <li>Bags</li>
            <li>Shoes</li>
            <li>accessories</li>
            <li>sale!</li>
          </ul>
        </div>

        {/* Shown by hamburger button click */}
        <div className={`navMenu ${navbarOpen ? 'show' : 'hide'}`}>
          <div className='hamburgerDiv popupClose' onClick={handleToggle}>
            <Hamburger isOpen={navbarOpen} />
          </div>

          <ul>
            <li>Bags</li>
            <li>Shoes</li>
            <li>accessories</li>
            <li>sale!</li>
          </ul>
        </div>

        <div className='iconDiv'>
          <GoSearch />

          {/* <Link to='/sign-in'> */}
          <FaUser
            onMouseOver={handleMouseOver}
            onClick={handleMouseOver}
            // onMouseOut={handleMouseOut}
          />
          {/* </Link> */}

          <FaShoppingCart />
        </div>
      </nav>
      {isHovering && <Submenu />}
    </>
  )
}

export default Navbar
