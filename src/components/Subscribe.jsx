import React from 'react'
import envelope from '../assets/img/envelope.png'

// Sign Up & Stay Connected section
function Subscribe() {
  return (
    <div className='signUpDiv'>
      <div className='signUpText'>
        <div className='signUpHeadline'>
          <img src={envelope} />
          <h2>Sign Up & Stay Connected</h2>
        </div>
      </div>

      <div className='signUpLowerDiv'>
        <p>
          Sign up for the newsletter and get 20% off! Gain access to exclusive
          offers and be the first to know when new stuff drops!
        </p>
        <input type="email" placeholder="Enter Your Email Address" />
        <span>subscribe</span>
      </div>
    </div>
  )
}

export default Subscribe