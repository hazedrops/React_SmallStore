import { Carousel } from 'react-responsive-carousel'
import img1 from '../../assets/img/newImages/HeroImage1.jpg'
import img2 from '../../assets/img/newImages/HeroImage2.jpg'
import img3 from '../../assets/img/newImages/HeroImage3.jpg'

function DemoCarousel() {
  return (
    <Carousel
      autoPlay
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      infiniteLoop={true}
      swipeable={true}
      className='carouselContainer'
    >
      <div>
        <img src={img1} alt='hero 1' />
      </div>
      <div>
        <img src={img2} alt='hero 2' />
      </div>
      <div>
        <img src={img3} alt='hero 3' />
      </div>
    </Carousel>
  )
}

export default DemoCarousel
