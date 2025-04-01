import React, { useCallback, useState } from 'react'
import Button from './Button';

function CallBack() {

    console.log('Callback Called');
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);
    const increment = useCallback(() => {
        setCount(count+1);
    },[count])

  return (
    <>
        <p>Count: {count}</p>
        <p>Number: {number}</p>
        <Button handleClick={increment} text={"Button Component"}/>
        <button onClick={() => setNumber(number+1)}>Button tag</button>
    </>
  )
}

export default CallBack