
import React from 'react';

let Card = ({username,btntext}) => {

    // console.log(this.prousername);ername);

    return (
       <>
       
       
       <div class="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/327691161_557138066448525_4482243949599442424_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7aKQ7t7lXJIAb4_pGjd&_nc_ht=scontent.fktm21-1.fna&oh=00_AfCHQkh0NGsJ1jUB8wugd08oEGRhdRuW6tdDFfdzFpaVXA&oe=661C76CF"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username||"salman khan"}</h1>
    <p className="mt-2 text-sm text-gray-300">
      great guy
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btntext}→
    </button>
  </div>
</div>
       
       </>
    );
}

export default Card;



