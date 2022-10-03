import React, { useState, useEffect, useRef } from 'react'
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
  const [isClicked, setIsClicked] = useState(false);

  const point = useRef(null)

  function useOutClickDetector(ref) {
    useEffect(() => {
      // Function for click event
      function handleOutsideClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsClicked(false)      
        }              
      }

      // Adding click event listener
      document.addEventListener('click', handleOutsideClick)
      return () => document.removeEventListener('click', handleOutsideClick)
    }, [ref])
  }

  useOutClickDetector(point)


  const handleToggle = () => {
    setNavbarOpen((prev) => !prev)
  }

  const handleMouseClick = () => {
    setIsClicked((prev) => !prev)
  };

  return (
    <div>
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

        <div className='iconDiv' ref={point}>
          <GoSearch />

          {/* <Link to='/sign-in'> */}
          <FaUser className='faUser' onClick={handleMouseClick} />
          {/* </Link> */}

          <FaShoppingCart />
        </div>
      </nav>

      {isClicked && <Submenu />}
    </div>
  )
}

export default Navbar
