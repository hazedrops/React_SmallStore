import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { db } from '../../firebase.config'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import Banner from '../Banner'
import Navbar from '../Navbar/Navbar'
import Label from '../Label'
import Footer from '../Footer/Footer'
import visibilityIcon from '../../assets/img/newImages/visibilityIcon.svg'
import { ReactComponent as RightArrowIcon } from '../../assets/img/newImages/RightArrowIcon.svg'

// Define input fields rescrictions
const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Your name is too short!')
    .max(20, 'Your name is too long!')
    .required('Please enter your name.'),
  email: Yup.string().email('Invalid email!').required('Required!'),
  password: Yup.string()
    .min(8, 'Your password is too short!')
    .max(20, 'Your password is too long!')
    .required('Please enter your password.'),
})

// a basic form
const SignUp = ({ status, message, onValidated }) => {
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: ''
  // })
  // const { email, password } = formData

  const checkAuth = async(name, email, password) => {

    try {
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name,
      })

      console.log('Here in checkAuth!!!', name, email, password)

      navigate('/')
    } catch (error) {
      console.log(error)
    }


  }

  const submitForm = async (values, formik) => {
    // e.preventDefault()

    const { name, email, password } = values

    // console.log('Values Here!!!', values)
    // console.log('Up Here!!!', name, email, password)

    name &&
      email &&
      password &&
      email.indexOf('@') > -1 &&
      onValidated({
        NAME: name,
        EMAIL: email,
        PASSWORD: password,
      })

    // console.log('Down Here!!!', name, email, password)
     const result = await checkAuth(name, email, password)

    formik.resetForm()
  }

  return (
    <div>
      <Banner />
      <Navbar />

      <div className='signInForm'>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={SignUpSchema}
          onSubmit={submitForm}
        >
          {(formik) => (
            <Form>
              <h1>Welcome Back!</h1>

              <div>
                <Label htmlFor='name' text='Name' required={true} />
                <Field
                  id='name'
                  name='name'
                  className='submitForm'
                  // placeholder='name'
                  required={true}
                />
                <ErrorMessage
                  component='div'
                  className='errorMsg'
                  name='name'
                />
              </div>

              <div>
                <Label htmlFor='email' text='Email Address' required={true} />
                <Field
                  id='email'
                  name='email'
                  className='submitForm'
                  // placeholder='Email'
                  required={true}
                />
                <ErrorMessage
                  component='div'
                  className='errorMsg'
                  name='email'
                />
              </div>

              <div>
                <Label htmlFor='password' text='Password' required={true} />
                <div className='passwordInputGroup'>
                  <Field
                    id='password'
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    className='submitForm'
                    // placeholder='Password'
                    required={true}
                  />
                  <img
                    src={visibilityIcon}
                    alt='show password'
                    className='showPassword'
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  />
                </div>
                <ErrorMessage
                  component='div'
                  className='errorMsg'
                  name='password'
                />
              </div>

              {/* <Link to='/forgot-password' className='forgotPasswordLink'>
                Forgot Password
                {/* <img
                  src={rightArrowIcon}
                  alt='right arrow'
                  className='rightArrow'
                /> */}
              {/* <RightArrowIcon
                  fill='#D89F7C'
                  width='1.5em'
                  height='1.5em'
                  className='rightArrow'
                />
              </Link> */}

              <button
                disabled={!formik.isValid || !formik.dirty}
                type='submit'
                onClick={submitForm}
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>

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
