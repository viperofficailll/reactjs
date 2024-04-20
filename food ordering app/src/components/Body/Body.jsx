import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";

function Body() {
  return (
    <div id="body" className="border-solid border-2 border-blue-500 ">
      <div id="searchbar" className="flex h-14 w-1/2 my-4 ">
      <div class="w-full md:w-1/3">
  <label
    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    for="name"
  >
    
  </label>
  <input
    class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type="text"
    placeholder="Enter the food"
    id="name"
  />
</div>

       
        <Button />
      </div>
      <div id="restaurantcontainer" className="flex">
        <Card />
        <Card />

      </div>
    </div>
  );
}

export default Body;
