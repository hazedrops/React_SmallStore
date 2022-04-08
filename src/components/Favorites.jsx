import React from 'react'
import img1 from '../assets/img/newImages/glasses.jpg'
import CommonFeature from './CommonFeature'

// 'Our Favorite Tees' under product carousel
function Favorites() {
  const favorite = {
    h1: 'Our Favorite Glasses',
    p: 'Every glasses you need!',
    tag: 'favorite',
  }

  return (
    <div className='favoriteDiv'>
      <img src={img1} className='favoriteImg' alt='favorite tees' />
      <CommonFeature h1={favorite.h1} p={favorite.p} />
    </div>
  )
}

export default Favorites