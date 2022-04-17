// import React, { useState, useEffect } from 'react'
// import MailchimpSubscribe from 'react-mailchimp-subscribe'

import { Formik, Form, Field, ErrorMessage } from 'formik'
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

const CustomForm = () => {
  const submitForm = (values) => {
    alert(JSON.stringify(values, null, 2))
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
              <div>
                <Label htmlFor='firstName' text='First Name' required={true} />
                <Field
                  id='firstName'
                  name='firstName'
                  type='text'
                  className='submitForm'
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                <ErrorMessage
                  component='div'
                  className='errorMsg'
                  name='firstName'
                />
              </div>

              <div>
                <Label htmlFor='lastName' text='Last Name' />
                <Field
                  id='lastName'
                  name='lastName'
                  type='text'
                  className='submitForm'
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
                <ErrorMessage
                  component='div'
                  className='errorMsg'
                  name='lastName'
                />
              </div>

              <div>
                <Label htmlFor='email' text='Email' required={true} />
                <Field
                  id='email'
                  name='email'
                  type='email'
                  className='submitForm'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <ErrorMessage
                  component='div'
                  className='errorMsg'
                  name='email'
                />
              </div>

              <button disabled={!formik.isValid || !formik.dirty} type='submit'>
                Subscribe
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </>
  )
}
// const CustomForm = ({ status, message, onValidated }) => {
// const [email, setEmail] = useState('')
// const [firstName, setFirstName] = useState('')
// const [lastName, setLastName] = useState('')

// const setFieldValues = (value) = {
//   switch (falue) {
//     case 'firstName':
//       setFirstName(value);
//       break;
//     case 'lastName':
//       setLastName(value);
//       break;
//     case 'email':
//       setEmail(value);
//       break;
//     default:
//       break;
//   }
// }
//   const [values, setValues] = useState({})

//   const submitForm = async (values) => {
//     const { email, firstName, lastName } = values

//     console.log('email is: ', email)
//     console.log('first name is: ', firstName)
//     console.log('last name is: ', lastName)

//     email &&
//       firstName &&
//       lastName &&
//       // email.indexOf('@') > -1 &&
//       onValidated({
//         EMAIL: email,
//         MERGE1: firstName,
//         MERGE2: lastName,
//       })
//   }

//   const handleChange = (e) => {
//     setValues((prevValues) => ({
//       ...prevValues,
//       // we use the name to tell Formik which key of `values` to update
//       [e.target.name]: e.target.value,
//     }))
//   }

//   useEffect(() => {
//     if (status === 'success') clearFields()
//   }, [status])

//   const clearFields = () => {
//     setValues('')
//     // setFirstName('')
//     // setLastName('')
//     // setEmail('')
//   }

//   return (
//     <>
//       <Banner />
//       <Navbar />

//       <div className='signUpForm'>
//         <Formik
//           initialValues={{ firstName: '', lastName: '', email: '' }}
//           validationSchema={SignUpSchema}
//           onSubmit={submitForm}
//         >
//           {(formik) => (
//             <Form>
//               {/* <h1>Sign up for the newsletter & get 20% off!</h1> */}
//               <h1>
//                 {status === 'success'
//                   ? 'Success!'
//                   : 'Sign up for the newsletter & get 20% off!'}
//               </h1>

//               {status === 'sending' && (
//                 <div className='alertSending'>sending...</div>
//               )}
//               {status === 'error' && (
//                 <div
//                   className='alertError'
//                   dangerouslySetInnerHTML={{ __html: message }}
//                 />
//               )}
//               {status === 'success' && (
//                 <div
//                   className='alertSuccess'
//                   dangerouslySetInnerHTML={{ __html: message }}
//                 />
//               )}

//               {status !== 'success' ? (
//                 <div className='submitFormContainer'>
//                   <div>
//                     <Label
//                       htmlFor='firstName'
//                       text='First Name'
//                       required={true}
//                     />
//                     <Field
//                       id='firstName'
//                       name='firstName'
//                       className='submitForm'
//                       onChange={formik.handleChange}
//                       value={formik.values.firstName}
//                     />
//                     <ErrorMessage
//                       component='div'
//                       className='errorMsg'
//                       name='firstName'
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor='lastName' text='Last Name' />
//                     <Field
//                       id='lastName'
//                       name='lastName'
//                       className='submitForm'
//                       onChange={formik.handleChange}
//                       value={formik.values.lastName}
//                     />
//                     <ErrorMessage
//                       component='div'
//                       className='errorMsg'
//                       name='lastName'
//                     />
//                   </div>

//                   <div>
//                     <Label htmlFor='email' text='Email' required={true} />
//                     <Field
//                       id='email'
//                       name='email'
//                       className='submitForm'
//                       onChange={formik.handleChange}
//                       value={formik.values.email}
//                     />
//                     <ErrorMessage
//                       component='div'
//                       className='errorMsg'
//                       name='email'
//                     />
//                   </div>
//                 </div>
//               ) : null}

//               <button disabled={!formik.isValid || !formik.dirty} type='submit'>
//                 Subscribe
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>

//       <Footer />
//     </>
//   )
// }

export default CustomForm
