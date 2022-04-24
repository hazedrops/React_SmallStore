import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import CustomForm from './CustomForm'

const uValue = process.env.REACT_APP_MAILCHIMP_U
const listId = process.env.REACT_APP_MAILCHIMP_ID

const SignUpForm = () => {
  const url = `https://hotmail.us14.list-manage.com/subscribe/post?u=${uValue}&id=${listId}`

  return (
    <div>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  )
}

export default SignUpForm
