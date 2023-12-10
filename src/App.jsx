import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

function App() {
  function reducer(state, action) {
    if (action.type == 'increase') {
      return state = state + 1
    }
    if (action.type == 'decrease') {
      if (state == 0) { return state = 0 }
      return state = state - 1
    }
    return console.error('alert, error occur');
  }
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <>
      <div className='maindiv'>
        <div className='div'>
          <p>current number : {state}</p>
          <div className='button'>
            <button onClick={() => dispatch({ type: 'increase' })}>increase</button>
            <button onClick={() => dispatch({ type: 'decrease' })}>decrease</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
