import React from "react";
import { useState } from "react";

function Button({x,y}){

  const [count,setCount] = useState(0)
  function Counter(){
    setCount(count+1)
    console.log('clicked')
  }
    
  function Reset(){
        setCount(0)

  };

  return (
    <>
      <button onClick={x} className="border bg-amber-400 ">
        Clicked {y} times
      </button>
      
    </>
  );
}


export default Button