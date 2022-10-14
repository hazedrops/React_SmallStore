import { useState, useContext } from 'react'
import UserContext from '../../context/UserContext'

import { Link, useNavigate } from 'react-router-dom'

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { setDoc, doc, serverTimestamp} from 'firebase/firestore'
import { db } from '../../firebase.config'

import Banner from '../Banner'
import Navbar from '../Navbar/Navbar'
import Label from '../Label'
import Footer from '../Footer/Footer'
import visibilityIcon from '../../assets/img/newImages/visibilityIcon.svg'
import { ReactComponent as RightArrowIcon } from '../../assets/img/newImages/RightArrowIcon.svg'

import { toast } from 'react-toastify'

// a basic form
const SignUp = ({ status, message, onValidated }) => {
  const { isLoggedIn, currentUser, setIsLoggedIn, setCurrentUser } = useContext(UserContext)

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const { name, email, password } = formData

  const navigate = useNavigate()

  // toast('Custom style', {
  //   className: 'toastStyle'
  // })

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value, // Change the value of id (either 'id' or 'password') based on the provided id of elem
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      // Registering user with the createUserWithEmailAndPassword() function that returns promise
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      // Get the user info to save into DB
      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name,
      })

      // Make a copy of formData
      const formDataCopy = {...formData}
      delete formDataCopy.password // Remove password, so not to pass the password into the DB
      formDataCopy.timestamp = serverTimestamp() // Add timestamp into the formData obj

      // Actually update db using setDoc
      await setDoc(doc(db, 'users', user.uid), formDataCopy)

      setCurrentUser(auth.currentUser)
      setIsLoggedIn((prevState) => !prevState)

      // Redirect to the homepage
      navigate('/')
    } catch (error) {
      // console.log("Error is: ", error.message)
      // console.log('Error type is: ', typeof error.message)
      const msg = error.message.split('auth/')[1].slice(0, -2)

      // console.log(msg)

      toast(`Error: ${msg}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
        hideProgressBar: false,
        pauseOnHover: true,
      })
    }
  }

  return (
    <div>
      <Banner />
      <Navbar />

      {/* Sign up page */}
      <div className='infoForm signInForm'>
        <header>
          <h1>Welcome Back!</h1>
        </header>

        <form onSubmit={onSubmit}>
          <div className='nameInputDiv'>
            <Label htmlFor='name' text='Name' required={true} />
            <input
              type='text'
              id='name'
              className='submitForm'
              value={name}
              onChange={onChange}
            />
          </div>

          <div className='emailInputDiv'>
            <Label htmlFor='email' text='Email Address' required={true} />
            <input
              type='email'
              id='email'
              className='submitForm'
              value={email}
              onChange={onChange}
            />
          </div>

          <div className='passwordInputDiv'>
            <Label htmlFor='password' text='Password' required={true} />
            <div className='passwordInput'>
              <input
                // if showPassword is true, then type should be 'text' to show the password text
                type={showPassword ? 'text' : 'password'}
                id='password'
                className='submitForm'
                // placeholder='Password'
                value={password}
                onChange={onChange}
              />
              <img
                src={visibilityIcon}
                alt='show password'
                className='showPassword'
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            </div>
          </div>
          
          <div className='signUpBar'>
            <button className='signUpButton'>Sign Up</button>
          </div>
        </form>

        {/* Google OAuth */}

        <Link to='/sign-in' className='signInLink'>
          Sign In Instead
          <RightArrowIcon
            fill='#D89F7C'
            width='1.5em'
            height='1.5em'
            className='rightArrow'
          />
        </Link>
      </div>

      <Footer />
    </div>
  )
}

export default SignUp
