import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import SubscribeForm from './components/Subscribe/SubscribeForm'
import Home from './components/Home'

import Profile from './components/Pages/Profile'
import ForgotPassword from './components/Pages/ForgotPassword'
import SignUp from './components/Pages/SignUp'
import SignIn from './components/Pages/SignIn'

function App() {
  return (
    <>
      <Router basename='/yoonjeongchoi/projects/SmallStoreReact'>
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route path='/profile' element={<Profile />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />

          <Route path='/subscribe-form' element={<SubscribeForm />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
