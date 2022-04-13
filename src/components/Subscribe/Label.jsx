import React from 'react'

function Label({ text, htmlFor, required }) {
  return (
    <>
      <label htmlFor={htmlFor}>
        <span className='labelText'>{text}</span>
        {required && <span className='required'>*</span>}
      </label>
    </>
  )
}

export default Label