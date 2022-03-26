import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import MultiCarouselItem from './MultiCarouselItem'

// 'Shop New Arrivals' section
function NewArrivals() {
  // Items to show by the screen size
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  }

  return (
    <div className='newArrival'>
      <h1 className='newArrivalTitle'>
        <span>Shop</span> New Arrivals
      </h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1500}
        className='newArrivalCarousel'
      >
        <MultiCarouselItem />
        <MultiCarouselItem />
        <MultiCarouselItem />
        <MultiCarouselItem />
      </Carousel>
    </div>
  )
}

export default NewArrivals;