import React, { useState } from 'react'

const Pixel = () => {

  const [pixel, setPixel] = useState(false)

  const handleColorChange = () =>{
    setPixel(!pixel)
  }

  return (
    <div className={pixel ? 'pixel darkMode' : 'pixel'} onClick={handleColorChange}>
      
    </div>
  )
}

export default Pixel