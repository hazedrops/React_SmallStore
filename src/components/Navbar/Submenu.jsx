import React from 'react'
import { Link } from 'react-router-dom'

function Submenu() {
  return (
    <div className='subMenu'>
      <ul>
        <li>
          <Link to='/sign-in'>Sign In/Sign Up</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
      </ul>
    </div>
  )
}

export default Submenu
