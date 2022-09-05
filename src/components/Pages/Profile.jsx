import { useState, useEffect, useContext } from 'react'
import UserContext from '../../context/UserContext'

import { getAuth } from 'firebase/auth'

const Profile = () => {
  const [user, setUser] = useState(null)
  const { isLoggedIn, currentUser } = useContext(UserContext)

  const auth = getAuth()

  useEffect(() => {
    console.log("is user logged in? ", isLoggedIn)

    setUser(auth.currentUser)
  }, [])

  return user ? <h1>{currentUser.displayName}</h1> : 'Not Logged In'
}

export default Profile;