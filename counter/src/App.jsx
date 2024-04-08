import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setcounter] = useState(15)
  const addvalue = () => {
    if (counter < 20) { setcounter(counter + 1) }
    else { setcounter(counter) }
  }




const subvalue = () => {
  if (counter > 0) { setcounter(counter - 1) }
  else {

    counter = counter
  }

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
