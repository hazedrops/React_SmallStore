import React from 'react'
// import img1 from '../../assets/img/proImg1.png'

function MultiCarouselItem({ img, name, price}) {

  return (
    <div className='carouselItemDiv'>
      <img src={img} alt='product' />
      <div className='carouselItemTitle'>
        <p className='carouselItemName'>{name}</p>
        <p className='carouselItemPrice'>{price}</p>
      </div>
    </div>
  )
}

export default MultiCarouselItem  