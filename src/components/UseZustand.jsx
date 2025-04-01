import React from 'react'
import ZustandState from './ZustandState'

function UseZustand() {

    const {count, increase, decrease} = ZustandState();

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default UseZustand