// import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import * as Yup from 'yup'

const SubscribeSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email!").required("Required!")
})

function SubscribeForm() {
  // const [email, setEmail] = useState('')

  // const FORM_URL = `your form URL, we will describe it in a sec`

  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   const data = new FormData(e.target)

  //   try {
  //     const response = await fetch(FORM_URL, {
  //       method: 'post',
  //       body: data,
  //       headers: {
  //         accept: 'application/json',
  //       },
  //     })

  //     const json = await response.json()

  //     if (json.status === 'success') {
  //       return
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // const handleClick = (e) => {}

  // const handleEmailChange = (e) => {
  //   const { value } = e.target
  //   setEmail(value)
  // }

  const submitForm = (values) => {
    console.log(values);
  }

  return (
    <div>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={SubscribeSchema}
        onSubmit={submitForm}
      >
        <Form>
          <Field id='email' name='email' className='submitForm' />
          <ErrorMessage name="email" />
          <button type='submit'>Subscribe</button>
        </Form>
      </Formik>
    </div>
    // <form onSubmit={handleSubmit}>
    //   <input
    //     aria-label='Your email address'
    //     name='email_address'
    //     placeholder='Your email address'
    //     required
    //     type='email'
    //     onChange={handleEmailChange}
    //     value={email}
    //   />
    //   <button>Subscribe</button>
    // </form>
  )
}

export default SubscribeForm
