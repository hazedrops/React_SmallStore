import React from 'react'
import img1 from '../../assets/img/proImg1.png'

function MultiCarouselItem() {
  return (
    <div className='carouselItemDiv'>
      <img src={img1} />
      <div className='carouselItemTitle'>
        <p className='carouselItemName'>Product Title</p>
        <p className='carouselItemCat'>WOMEN'S T-SHIRT</p>
        <p className='carouselItemPrice'>$19.99</p>
      </div>
    </div>
  )
}

export default MultiCarouselItem  