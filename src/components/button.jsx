import React from "react";
import { useState } from "react";

function Button(props){

  
  return (
    <>
      <button onClick={Counter} className="border bg-amber-400 ">
        Clicked {count} times
      </button>
       <button onClick={Reset} className="border bg-amber-400 ">
       Reset
      </button>
    </>
  );
}


export default Button