import { useEffect, useState } from 'react'
import './App.css'

function App()
{
  let [counter, setCounter] = useState(10)
  const addValue = () =>
  {
    counter += 1
    setCounter(counter)
    console.log("Counter: ", counter)
  }
  const removeValue = () =>
  {
    counter -= 1
    setCounter(counter)
    console.log("Counter: ", counter)
  }
  return (
    <>
    <h1>Chai aur React <br />Counter : {counter}</h1>
    <button onClick={addValue}>Add value Counter: {counter}</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove value Counter: {counter}</button>
    </>
  )
}

export default App

//In React, hooks are special functions that let you use state and other React features in functional components (without using class components).