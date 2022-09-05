import { createContext, useState } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  
  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        currentUser,
        setIsLoggedIn,
        setCurrentUser,        
      }}
    >
      {children}
    </UserContext.Provider>    
  )
}

export default UserContext
