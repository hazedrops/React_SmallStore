import Banner from './Banner'
import Navbar from './Navbar/Navbar'
import Category from './Category/Category'
import Favorites from './Favorites'
import Footer from './Footer/Footer'
import NewArrivals from './NewArrival/NewArrivals'
import Subscribe from './Subscribe/Subscribe'
import Hero from './Hero/Hero'

function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <Category />
      <NewArrivals />
      <Favorites />
      <Subscribe />
      <Footer />
    </>
  )
}

export default Home