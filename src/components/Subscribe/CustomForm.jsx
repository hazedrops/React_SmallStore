import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import * as Yup from 'yup'

import Banner from '../Banner'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import Label from './Label'

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
  const submitForm = async (values, formik) =>{
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

  return (
    <>
      <Banner />
      <Navbar />

      <div className='signUpForm'>
        {/* <div> */}
        {status === 'sending' && (
          <div style={{ color: 'blue', fontSize: '1.5em', marginTop: '1em' }}>
            sending...
          </div>
        )}
        {status === 'error' && (
          <div
            style={{ color: 'red', fontSize: '1.5em', marginTop: '1em' }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === 'success' && (
          <div
            style={{ color: 'green', fontSize: '1.5em', marginTop: '1em' }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}

        <Formik
          initialValues={{ name: '', email: '' }}
          validationSchema={SignUpSchema}
          onSubmit={submitForm}
        >
          {(formik) => (
            <Form>
              <h1>Sign up for the newsletter & get 20% off!</h1>

              <div>
                <Label htmlFor='name' text='Name' required={true} />
                <Field id='name' name='name' className='submitForm' />
                <ErrorMessage
                  component='div'
                  className='errorMsg'
                  name='name'
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

              <button
                disabled={!formik.isValid || !formik.dirty}
                type='submit'
                onClick={submitForm}
              >
                Subscribe
              </button>
            </Form>
          )}
        </Formik>
        {/* </div> */}
      </div>

      <Footer />
    </>
  )
}

export default CustomForm




