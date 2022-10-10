import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Submenu() {
  return (
    <div className='subMenu'>
      <ul>
        <li>
          <Link to='/sign-in'>
            <FontAwesomeIcon icon={solid('user')} />
            Sign In/Sign Up
          </Link>
        </li>
        <li>
          <Link to='/profile'>
            <FontAwesomeIcon
              icon={solid('id-card')}
            />
            Profile
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Submenu

{/* <FontAwesomeIcon icon={solid('user-secret')} />
<FontAwesomeIcon icon={regular('coffee')} />
<FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />
<FontAwesomeIcon icon={brands('twitter')} /> */}
