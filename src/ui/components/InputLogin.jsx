import React from "react";

export default function InputLogin({type, placeholder, register}) {

  //

  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      {...register} 
      className="border-solid border border-slate-800 rounded p-2 w-72" 
    />
  )
}