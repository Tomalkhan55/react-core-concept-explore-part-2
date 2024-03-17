import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('clicked button 2');
  }


  return (
    <>
      <h2>React Core Concept 2</h2>

      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>click me 2</button>
      <button onClick={() =>{alert('third clicked')}}>Third</button>
    </>
  )
}




export default App
