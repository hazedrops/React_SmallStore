import { useState } from "react"

function SubscribeForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Subscribe button clicked!!");
    console.log(email);
  }

  const handleEmailChange = (e) => {
    const { value } = e.target
    setEmail(value)
  }  

  return (
    <form onSubmit={handleSubmit}>      
      <input
        aria-label='Your email address'
        name='email_address'
        placeholder='Your email address'
        required
        type='email'
        onChange={handleEmailChange}
        value={email}
      />
      <button>Subscribe</button>
    </form>
  )
}

export default SubscribeForm