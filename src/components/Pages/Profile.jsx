import { useState, useRef, useEffect, useContext } from 'react'
import UserContext from '../../context/UserContext'

import { getAuth, updateProfile } from 'firebase/auth'
import { updateDoc, doc } from 'firebase/firestore'
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

  const { isLoggedIn, currentUser, setCurrentUser } = useContext(UserContext)

  const { name, email } = formData

  const navigate = useNavigate()

  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [changeDetails])

  // const onLogout = () => {
  //   // Logging out from Firebase
  //   auth.signOut()

  //   navigate('/')
  // }

  const onSubmit = async () => {
    try {
      if(auth.currentUser.displayName !== name) {
        // Update display name in Firebase
        await updateProfile(auth.currentUser, {
          displayName: name
        })

        // Update in Firestore
        const userRef = doc(db, 'users', auth.currentUser.uid)

        await updateDoc(userRef, {
          // same as (name: name)
          name
        })
      }
    } catch (error) {
      toast.error('Could not update Profile details')
    }
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <div className='pageBody'>
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
            <p className='profileDetailsText'>Profile Info</p>
            <p
              className='changePersonalDetails'
              onClick={() => {
                changeDetails && onSubmit()
                setChangeDetails((prevState) => !prevState)
              }}
            >
              {changeDetails ? 'Done' : 'Edit profile info'}
            </p>
          </div>

          <div className='profileCard'>
            <form>
              <div className='personalDetailDiv'>
                <label>Name</label>
                <input
                  type='text'
                  id='name'
                  className={
                    !changeDetails ? 'profileName' : 'profileNameActive'
                  }
                  disabled={!changeDetails}
                  value={name}
                  onChange={onChange}
                  ref={inputRef}
                />
              </div>
              <div className='personalDetailDiv'>
                <label>Email</label>
                <input
                  type='email'
                  id='email'
                  className={
                    !changeDetails ? 'profileEmail' : 'profileEmailActive'
                  }
                  disabled={!changeDetails}
                  value={email}
                  onChange={onChange}                  
                  readOnly={true}
                />
              </div>
            </form>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default Profile
