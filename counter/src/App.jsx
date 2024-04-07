import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter,setcounter]= useState(15)
const addvalue = ()=>{
  setcounter(counter+1)
  

}
const subvalue =()=>{
  setcounter(counter-1)

 
}
  return (
    <>
      <h1> counter </h1>
      <h1> current value:{counter}</h1>
      <button onClick={addvalue}>INCREASE VALUE</button>
      <br></br>
      <button onClick={subvalue}>DECREASE VALUE</button>
    </>
  )
}

export default App
