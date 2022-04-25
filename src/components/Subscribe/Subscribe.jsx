import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'

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
        <p>Be The First To Know With Our Emails</p>
        <Link to='/subscribe-form'>
          <span>Sign Me Up</span>
        </Link>
      </div>
    </div>
  )
}

export default Subscribe
