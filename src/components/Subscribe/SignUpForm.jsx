// import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import Banner from '../Banner'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Label from './Label'

// Define input fields rescrictions
const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Too short!')
    .max(20, 'Too long!')
    .required('Required!'),
  lastName: Yup.string().min(3, 'Too short!').max(20, 'Too long!'),
  email: Yup.string().email('Invalid email!').required('Required!'),
})

function SignUpForm() {
  const submitForm = (values) => {
    console.log(values)
  }

  return (
    <>
      <Banner />
      <Navbar />
      <div className='signUpForm'>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '' }}
          validationSchema={SignUpSchema}
          onSubmit={submitForm}
        >
          {(formik) => (
            <Form>
              <h1>Sign up for the newsletter & get 20% off!</h1>

              <div>
                <Label htmlFor='firstName' text='First Name' required={true} />
                <Field id='firstName' name='firstName' className='submitForm' />
                <ErrorMessage
                  component='div'
                  className='errorMsg'
                  name='firstName'
                />
              </div>

              <div>
                <Label htmlFor='lastName' text='Last Name' />
                <Field id='lastName' name='lastName' className='submitForm' />
                <ErrorMessage
                  component='div'
                  className='errorMsg'
                  name='lastName'
                />
              </div>

              <div>
                <Label htmlFor='email' text='Email' required={true} />
                <Field id='email' name='email' className='submitForm' />
                <ErrorMessage
                  component='div'
                  className='errorMsg'
                  name='email'
                />
              </div>

              <button disabled={!formik.isValid || !formik.dirty} type='submit'>Subscribe</button>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </>
  )
}

export default SignUpForm
