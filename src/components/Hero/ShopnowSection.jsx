import React from 'react'
import CommonFeature from '../CommonFeature'

// 'Shop New Arrivals' under Hero carousel
function ShopnowSection() {
  const newArrival = {
    h1: 'Shop New Arrivals',
    p: 'Our coolest items are waiting for you!',
    tag: 'newArrival',
  }

  return (
    <CommonFeature h1={newArrival.h1} p={newArrival.p} tag={newArrival.tag} />
  )
}

export default ShopnowSection