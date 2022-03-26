import React from 'react'

// Implements same features for 'Shop new Arrivals' & 'Our Favorite Tees'
function CommonFeature({h1, p, tag}) {  
  return (
    <div className={`shopNow ${tag === "newArrival" ? 'heroNewArrival' : 'favorite'}`}>
      <h1>{h1}</h1>
      <p>{p}</p>
      <span>shop now</span>
    </div>
  )
}

export default CommonFeature