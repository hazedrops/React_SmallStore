// import { useSpring, animated } from 'react-spring'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import Banner from '../Banner'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
// import Label from '../Label'

// Define input fields rescrictions
const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(20, 'Too long!')
    .required('Required!'),
  email: Yup.string().email('Invalid email!').required('Required!'),
})

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  const submitForm = async (values, formik) => {
    const { name, email } = values

    email &&
      name &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
        NAME: name,
      })

    formik.resetForm()
  }

  // const props = useSpring({
  //   // position: 'relative',

  //   to: {
  //     height: '0px',
  //     opacity: 0,
  //     padding: '0px',
  //   },
  //   from: {
  //     height: '100%',
  //     opacity: 1,
  //     padding: '.5em 0 ',
  //   },

  //   reset: true,
  //   config: { duration: 2000 },
  // })

  return (
    <>
      <Banner />
      <Navbar />

      <div className='signUpForm'>
        {/* {status === 'sending' && (
          <animated.div className='message sending' style={props}>
            sending...
          </animated.div>
        )}
        {status === 'error' && (
          <animated.div
            className='message error'
            dangerouslySetInnerHTML={{ __html: message }}
            style={props}
          />
        )}
        {status === 'success' && (
          <animated.div
            className='message success'
            dangerouslySetInnerHTML={{ __html: message }}
            style={props}
          />
        )} */}

        <Formik
          initialValues={{ name: '', email: '' }}
          validationSchema={SignUpSchema}
          onSubmit={submitForm}
        >
          {(formik) => (
            <Form>
              <h1>Sign in</h1>

              <div>
                {/* <Label htmlFor='name' text='Name' required={true} /> */}
                <Field
                  id='userInfo'
                  name='userInfo'
                  className='signInUserInfo'
                  placeholder='Email or Mobile number'
                  required={true}
                />
                <ErrorMessage
                  component='div'
                  className='errorMsg'
                  name='userInfo'
                />
              </div>

              <div>
                {/* <Label htmlFor='email' text='Email' required={true} /> */}
                <Field
                  id='password'
                  name='password'
                  className='signInPassword'
                  placeholder='Password'
                  required={true}
                />
                <ErrorMessage
                  component='div'
                  className='errorMsg'
                  name='password'
                />
              </div>

              <button
                disabled={!formik.isValid || !formik.dirty}
                type='submit'
                onClick={submitForm}
              >
                Sign In
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <Footer />
    </>
  )
}

export default CustomForm
