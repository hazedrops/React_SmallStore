import { useState, useEffect, useContext } from 'react'
// import UserContext from '../../context/UserContext'

import { getAuth, updateProfile } from 'firebase/auth'
import { updateDoc } from 'firebase/firestore'
import { db } from '../../firebase.config'

import { useNavigate, Link } from 'react-router-dom'

import Banner from '../Banner'
import Navbar from '../Navbar/Navbar'
import Label from '../Label'
import Footer from '../Footer/Footer'
import visibilityIcon from '../../assets/img/newImages/visibilityIcon.svg'
import { ReactComponent as RightArrowIcon } from '../../assets/img/newImages/RightArrowIcon.svg'

import { toast } from 'react-toastify'

const Profile = () => {
  const auth = getAuth()
  const [changeDetails, setChangeDetails] = useState(false)

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  })

  // console.log("Hello!!!")

  // console.log("auth is: ", auth)

  // const { isLoggedIn, currentUser, setCurrentUser } = useContext(UserContext)

  const { name, email } = formData

  const navigate = useNavigate()

  const onLogout = () => {
    // Logging out from Firebase
    auth.signOut()

    navigate('/')
  }

  const onSubmit = () => {
    console.log(123)
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <div>
      <Banner />
      <Navbar />

      {/* Profile page */}
      <div className='profile infoForm'>
        <header className='profileHeader'>
          <h1 className='pageHeader'>My Profile</h1>
          {/* <button type='button' className='logOut' onClick={onLogout}>
            Log Out
          </button> */}
        </header>

        <main>
          <div className='profileDetailsHeader'>
            <p className='profileDetailsText'>Personal Details</p>
            <p
              className='changePersonalDetails'
              onClick={() => {
                changeDetails && onSubmit()
                setChangeDetails((prevState) => !prevState)
              }}
            >
              {changeDetails ? 'done' : 'change'}
            </p>
          </div>

          <div className='profileCard'>
            <form>
              <input
                type='text'
                id='name'
                className={!changeDetails ? 'profileName' : 'profileNameActive'}
                disabled={!changeDetails}
                value={name}
                onChange={onChange}
              />
              <input
                type='text'
                id='email'
                className={
                  !changeDetails ? 'profileEmail' : 'profileEmailActive'
                }
                disabled={!changeDetails}
                value={email}
                onChange={onChange}
              />
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Profile
