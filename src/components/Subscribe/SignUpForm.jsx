// import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import Banner from '../Banner';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email!').required('Required!'),
})

function SignUpForm() {
  const submitForm = (values) => {
    console.log(values);
  }

  return (
    <>
      <Banner />
      <Navbar />
      <div className='signUpForm'>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={SignUpSchema}
          onSubmit={submitForm}
        >
          <Form>
            <h1>Sign up for the newsletter & get 20% off!</h1>
            <Field id='firstName' name='firstName' className='submitForm' />
            <Field id='lastName' name='lastName' className='submitForm' />
            <Field id='email' name='email' className='submitForm' />
            <ErrorMessage name='email' />
            <button type='submit'>Subscribe</button>
          </Form>
        </Formik>
      </div>
      <Footer />
    </>
  )
}

export default SignUpForm
