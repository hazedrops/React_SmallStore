import { Carousel } from 'react-responsive-carousel'
import img1 from '../../assets/img/HeroImage1.png'
import img2 from '../../assets/img/HeroImage2.png'
import img3 from '../../assets/img/HeroImage3.png'

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
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
    </Carousel>
  )
}

export default DemoCarousel
