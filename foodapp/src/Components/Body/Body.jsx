import React from 'react'
import Card from '../Card/Card'

function Body() {
  return (
    
<>
        
<div className="w-full md:w-1/3">
  <input
    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="email"
    placeholder="enter food here"></input>
    </div>


    <div className='flex m-2 gap-2'>
      <br />

     
    <Card name="poon khaja ghar"location="lamchour" food="momo" rating="4.5"/>
    <Card name="nanglo kitchen"location="lamchour" food="momo" rating="3"/>
    <Card name="aandada khaja ghar"location="lamchour" food="momo" rating="2"/>
    
    <br />
    
        
    </div>
    
  
</>




  )
}

export default Body
