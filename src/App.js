import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import Banner from './components/Banner'
import Navbar from './components/Navbar/Navbar'
import Category from './components/Category/Category'
import Favorites from './components/Favorites'
import Footer from './components/Footer/Footer'
import NewArrivals from './components/NewArrival/NewArrivals'
import Subscribe from './components/Subscribe'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <div className='App'>
      <Banner />
      <Navbar />
      <Hero />
      <Category />
      <NewArrivals />
      <Favorites />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
