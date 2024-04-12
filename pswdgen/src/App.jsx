import { useState,useCallback } from 'react'

import './App.css'

function App() {
     const [ length,setlength] = useState(8)
     const [numberallowed ,setnumberallowed]=useState(false)
     const [characterallowed ,setcharacterallowed]=useState(false)
     const [password,setpassword] = useState("")
     
     const passwordgenerator =useCallback(fn,[length,numberallowed,characterallowed,setpassword])
  return (
   <>
   <h1 className='text-4xl underline text-center'>Password generator</h1>
   </>
  )
}

export default App
