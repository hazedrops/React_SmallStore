import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import SubscribeForm from './SubscribeForm'

// Sign Up & Stay Connected section
function Subscribe() {
  return (
    <div className='signUpDiv'>
      <div className='signUpText'>
        <div className='signUpHeadline'>
          <FaEnvelope className='faIcon' />
          <h2>Join the Newsletter & Save</h2>
        </div>
      </div>

      <div className='signUpLowerDiv'>
        {/* <p>
          Sign up for the newsletter and get 20% off! Gain access to exclusive
          offers and be the first to know when new stuff drops!
        </p> */}
        {/* <SubscribeForm /> */}
        {/* <input type="email" placeholder="Enter Your Email Address" /> */}
        <p>Be The First To Know With Our Emails</p>
        <span>Sign Me Up</span>
      </div>
    </div>
  )
}

export default Subscribe
