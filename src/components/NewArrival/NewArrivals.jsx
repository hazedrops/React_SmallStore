import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import MultiCarouselItem from './MultiCarouselItem'

import img1 from '../../assets/img/newImages/newArrival11.png'
import img2 from '../../assets/img/newImages/newArrival12.png'
import img3 from '../../assets/img/newImages/newArrival13.png'
import img4 from '../../assets/img/newImages/newArrival14.png'

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

  const productData = {
    newArrival1: {
      id: 'new1',
      img: img1,
      name: 'Yellow Bag',
      price: '$129.99',
    },
    newArrival2: {
      id: 'new2',
      img: img2,
      name: 'Colorful Sneakers',
      price: '$69.99',
    },
    newArrival3: {
      id: 'new3',
      img: img3,
      name: 'Brown Bag',
      price: '$89.99',
    },
    newArrival4: {
      id: 'new4',
      img: img4,
      name: 'Black Watch',
      price: '$59.99',
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
        <MultiCarouselItem
          img={productData.newArrival1.img}
          name={productData.newArrival1.name}
          price={productData.newArrival1.price}
        />
        <MultiCarouselItem
          img={productData.newArrival2.img}
          name={productData.newArrival2.name}
          price={productData.newArrival2.price}
        />
        <MultiCarouselItem
          img={productData.newArrival3.img}
          name={productData.newArrival3.name}
          price={productData.newArrival3.price}
        />
        <MultiCarouselItem
          img={productData.newArrival4.img}
          name={productData.newArrival4.name}
          price={productData.newArrival4.price}
        />
      </Carousel>
    </div>
  )
}

export default NewArrivals
