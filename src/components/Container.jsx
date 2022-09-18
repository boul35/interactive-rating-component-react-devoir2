import React, { Children } from 'react'

const Container = ( {src,_children}) => {
  return (
    <div className='Container'>{Children}
    <img src={src} alt="star" />
    </div>
  )
}

export default Container;