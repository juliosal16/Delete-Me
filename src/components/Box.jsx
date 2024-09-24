import React from 'react'

const Box = ({color, name, inverted}) => {
  return (
    <div>
      <h2 className={inverted ? "invertedBox" : 'box'}>hello my name is {name}!</h2>
    </div>
  )
}

export default Box