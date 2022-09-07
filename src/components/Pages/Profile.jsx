import { useState, useEffect, useContext } from 'react'
// import UserContext from '../../context/UserContext'

import { getAuth } from 'firebase/auth'
import { useNavigate, Link } from "react-router-dom"

const Profile = () => {
  console.log("Hello!!!")

  const auth = getAuth()
  console.log("auth is: ", auth)

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })
  // const { isLoggedIn, currentUser, setCurrentUser } = useContext(UserContext)

  const navigate = useNavigate()

  const onLogout = () => {
    auth.signOut()

    navigate('/')
  } 

  return (
    <div className='profile'>
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button type='button' className="logOut" onClick={onLogout}>
          Log Out
        </button>
      </header>
    </div> 
  )
}

export default Profile;