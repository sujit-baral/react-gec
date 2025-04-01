import { configureStore } from '@reduxjs/toolkit'
import React from 'react'

function UseRedux() {

    const store = configureStore({reducer: counterSlice.reducer});

  return (
    <>
        
    </>
  )
}

export default UseRedux