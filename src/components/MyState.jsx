import React, { useState } from 'react'

const MyState = () => {

    const [num, setNum] = useState(0);

  return (
    <>
        <h3>num: {num}</h3>
        <button onClick={()=>setNum(num+1)}>Click me</button>
    </>
  )
}

export default MyState