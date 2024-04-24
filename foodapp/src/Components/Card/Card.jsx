import React from 'react'

function Card(props) {
  console.log(props)

  return (
    <>
    <div>
    <div className="relative h-[400px] w-[300px] rounded-md hover:border-black">
  <img
    src="https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left inline">
    <h1 className="text-lg font-semibold text-white">{props.name}</h1>


    
      
    
    <br />
    <div className='text-white'>
     {props.location}
    </div>
    
    <p className=" text-sm text-gray-300">
      {props.foods}

    </p>
    <br />
    <p className=" text-sm text-gray-300">
      RATING:{props.rating}
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white hover:bg-red-500">
    
    
      order now →
    </button>
  </div>
</div>

    </div>
    </>
  )
}

export default Card
