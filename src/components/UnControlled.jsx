import React, { useRef } from 'react'

function UnControlled() {

    const inputRef = useRef()
    const showValue = () => {
        alert(inputRef.current.value)
    }

  return (
    <>
        <h1>UnControlled Component</h1>
        <input type="text" ref={inputRef} />
        <button onClick={showValue}>Show value</button>
    </>
  )
}

export default UnControlled