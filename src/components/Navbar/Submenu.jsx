import React, {useContext} from 'react'
import UserContext from '../../context/UserContext'

import { getAuth, updateProfile } from 'firebase/auth'

import { useNavigate, Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Submenu = () => {
  const auth = getAuth()

  const { isLoggedIn, setIsLoggedIn, currentUser } = useContext(UserContext)

  const navigate = useNavigate()

  const onLogout = () => {
    // Logging out from Firebase
    auth.signOut()

    setIsLoggedIn((prevState) => !prevState)

    navigate('/')
  }

  return (
    <div className='subMenu'>
      <ul>
        {isLoggedIn && (
          <li>
            <p className='userName'>Hello {currentUser.displayName}</p>
          </li>
        )}
        <li>
          {!isLoggedIn ? (
            <Link to='/sign-in'>
              <FontAwesomeIcon icon={solid('user')} />
              Sign In/Sign Up
            </Link>
          ) : (
            <p className='logOut' onClick={onLogout}>
              <FontAwesomeIcon icon={solid('right-from-bracket')} />
              Log Out
            </p>
          )}
        </li>
        {isLoggedIn && (
          <li>
            <Link to='/profile'>
              <FontAwesomeIcon icon={solid('id-card')} />
              Profile
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Submenu

{/* <FontAwesomeIcon icon={solid('user-secret')} />
<FontAwesomeIcon icon={regular('coffee')} />
<FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />
<FontAwesomeIcon icon={brands('twitter')} /> */}
