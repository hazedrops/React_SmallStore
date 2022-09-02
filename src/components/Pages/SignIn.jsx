import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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

  const onChange = () => {}  

  return (
    <div>
      <Banner />
      <Navbar />

      {/* Sign in page */}
      <div className='signInForm'>
        <header>
          <h1>Welcome Back!</h1>
        </header>

        <form>
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
