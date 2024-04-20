import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";

function Header() {
  return (
    <div className="flex my-auto mx-auto border-solid border-2 border-black">
      <div className="w-40 h-30">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlUK6Mw5XDHtWm04KSlaiA2DZSp7cqGhVd3LetcUdNBA&s" width={400} height={350}/>
      </div>
        
      
        <div id="nav"> 
          <ul className="flex mx-40 px-5 py-5   text-xl gap-16" >
            <li  className=" hover:text-blue-500">Home</li>
            <li className=" hover:text-blue-500">About us</li>
            <li className=" hover:text-blue-500">Contact info</li>
            <li className=" hover:text-blue-500"> cart</li>
          </ul>
        </div>
    
    </div>
  );
}

export default Header;
