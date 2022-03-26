import React from 'react'
import img1 from '../assets/img/favoriteImg.png'
import CommonFeature from './CommonFeature'

// 'Our Favorite Tees' under product carousel
function Favorites() {
  const favorite = {
    h1: 'Our Favorite Tees',
    p: 'Every tees you need!',
    tag: 'favorite',
  }

  return (
    <div className='favoriteDiv'>
      <img src={img1} className='favoriteImg' />
      <CommonFeature h1={favorite.h1} p={favorite.p} />
    </div>
  )
}

export default Favorites