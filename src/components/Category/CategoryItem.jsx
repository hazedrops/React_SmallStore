import React from 'react'
import img1 from '../../assets/img/newImages/bag.jpg'
import img2 from '../../assets/img/newImages/shoes.jpg'
import img3 from '../../assets/img/newImages/accessories.jpg'

function CategoryItem() {
  return (
    <div className='categoryDiv'>
      <div className='categoryItem'>
        <img src={img1} alt='womens' />
        <h2 className='categoryName'>Bags</h2>
      </div>
      <div className='categoryItem'>
        <img src={img2} alt='womens' />
        <h2 className='categoryName'>Shoes</h2>
      </div>
      <div className='categoryItem'>
        <img src={img3} alt='womens' />
        <h2 className='categoryName'>Accessories</h2>
      </div>
    </div>
  )
}

export default CategoryItem
