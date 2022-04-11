import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

// import Banner from './components/Banner'
// import Navbar from './components/Navbar/Navbar'
// import Category from './components/Category/Category'
// import Favorites from './components/Favorites'
// import Footer from './components/Footer/Footer'
// import NewArrivals from './components/NewArrival/NewArrivals'
// import Subscribe from './components/Subscribe/Subscribe'
import SignUpForm from './components/Subscribe/SignUpForm'
import Home from './components/Home'
// import Hero from './components/Hero/Hero'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup-form' element={<SignUpForm />} />
      </Routes>
    </Router>
  )
}

export default App
