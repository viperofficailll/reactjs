import { useState } from 'react'


function App() {
  const [color, setcolor] = useState('purple')


  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>


      <div className='fixed flex  bottom-12 justify-center inset-x-0 '> 
      <div className='flex flex-wrap justify-center gap-2  px-2 py-2 rounded-xl bg-white text-white' >
        <button onClick={()=>{setcolor("red")}}
        className='px-4 py-1 rounded-full'style={{backgroundColor:"red"}}>red</button>
        <button onClick={()=>{setcolor("green")}}className='px-4 py-1 rounded-full'style={{backgroundColor:"green"}}>green</button>
        <button onClick={()=>{setcolor("blue")}} className='px-4 py-1 rounded-full'style={{backgroundColor:"blue"}}>blue</button>
        <button onClick={()=>{setcolor("yellow")}}className='px-4 py-1 rounded-full'style={{backgroundColor:"yellow"}}>yellow</button>
        <button onClick={()=>{setcolor("black")}}className='px-4 py-1 rounded-full'style={{backgroundColor:"black"}}>black</button>
      </div>
      
      
      </div>
    </div>
  )
}
  
export default App
