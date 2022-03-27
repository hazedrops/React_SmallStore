import React from 'react'
import img1 from '../../assets/img/catImg1.png'
import img2 from '../../assets/img/catImg2.png'
import img3 from '../../assets/img/catImg3.png'

function CategoryItem() {
  return (
    <div className='categoryDiv'>
      <div className='categoryItem'>
        <img src={img1} alt='womens' />
        <h2 className='categoryName'>Women's</h2>
      </div>
      <div className='categoryItem'>
        <img src={img2} alt='womens' />
        <h2 className='categoryName'>Men's</h2>
      </div>
      <div className='categoryItem lastItem'>
        <img src={img3} alt='womens' />
        <h2 className='categoryName'>Accessories</h2>
      </div>
    </div>
  )
}

export default CategoryItem
