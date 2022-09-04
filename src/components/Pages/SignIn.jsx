import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import Banner from '../Banner'
import Navbar from '../Navbar/Navbar'
import Label from '../Label'
import Footer from '../Footer/Footer'
import visibilityIcon from '../../assets/img/newImages/visibilityIcon.svg'
import { ReactComponent as RightArrowIcon } from '../../assets/img/newImages/RightArrowIcon.svg'

// a basic form
const SignIn = ({ status, message, onValidated }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value // Change the value of id (either 'id' or 'password') by the provided id of elem
    }))
  }  

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()
  
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
  
      if(userCredential.user) {
        console.log(auth.currentUser.displayName);
        navigate('/')
      }      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Banner />
      <Navbar />

      {/* Sign in page */}
      <div className='infoForm signInForm'>
        <header>
          <h1>Welcome Back!</h1>
        </header>

        <form onSubmit={onSubmit}>
          <div className='emailInputDiv'>
            <Label htmlFor='email' text='Email Address' required={true} />
            <input
              type='email'
              id='email'
              className='submitForm'
              // placeholder='Email'
              value={email}
              onChange={onChange}
            />
          </div>

          <div className='passwordInputDiv'>
            <Label htmlFor='password' text='Password' required={true} />
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

          <Link to='/forgot-password' className='forgotPasswordLink'>
            Forgot Password
            <RightArrowIcon
              fill='#D89F7C'
              width='1.5em'
              height='1.5em'
              className='rightArrow'
            />
          </Link>

          <div className='signInBar'>
            <button className='signInButton'>
              Sign In
            </button>
          </div>
        </form>

        {/* Google OAuth */}

        <Link to='/sign-up' className='signUpLink'>
          Sign Up Instead
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

export default SignIn
