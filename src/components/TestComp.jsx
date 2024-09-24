import React, { useState } from 'react'

const TestComp = ({name, lastName}) => {

  const [counter,setCounter] = useState(0)

  const handleCountUp = () =>{
    setCounter(counter + 1)
  }

  return (
    <div className='box'>
    <div >Hello, welcome back {name} {lastName}</div>
    <button onClick={handleCountUp}>Likes</button>
    <p>{counter}</p>
    </div>

  )
}

export default TestComp