import React from 'react'

const FloatingDiv = ({image}) => {
  return (
    <div className='FloatingDiv'>
      <img src={image} alt=""/>
      <span>
        web
        <br/>
        Developer
      </span>
    </div>
  )
}

export default FloatingDiv