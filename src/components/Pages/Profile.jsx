import { useState, useEffect, useContext } from 'react'
import UserContext from '../../context/UserContext'

import { getAuth } from 'firebase/auth'

const Profile = () => {
  // const [user, setUser] = useState(null)
  const { isLoggedIn, currentUser, setCurrentUser } = useContext(UserContext)

  const auth = getAuth()

  // console.log("Auth is ...", auth)

  // setCurrentUser(auth.currentUser)

  useEffect(() => {
    // console.log("is user logged in? ", isLoggedIn)

    setCurrentUser(auth.currentUser)
  })

  return currentUser ? <h1>{currentUser.displayName}</h1> : 'Not Logged In'
}

export default Profile;