import React from 'react'

function Header() {
  return (
    <>
    <div id="full">
        <ul className='flex m-2 p-2 gap-3 border-solid border-2 border-black'>
            <li>
                <img  className="h-9 w-12 "src="https://myrepublica.nagariknetwork.com/uploads/media/1650177250_foodmandu-1200x560_20220417125349.jpg"/>
            </li>
            <li className='hover:text-blue-500'>Home</li>
            <li className='hover:text-blue-500'>About us</li>
            <li className='hover:text-blue-500'>Contact info</li>
            <li className='hover:text-blue-500'>CHill</li>
        </ul>
    </div>
    </>
    
  )
}

export default Header
