import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";

function Body() {
  return (
    <div id="body" className="border-solid border-2 border-blue-500 w-auto h-auto my-3">
      <div id="searchbar" className="flex h-14 w-1/2 my-4 ">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search"
          className="text-left text-black border-solid border-2 border-red-500
        "
        />
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
