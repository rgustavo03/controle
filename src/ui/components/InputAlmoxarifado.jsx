import React from "react";

export default function InputAlmoxarifado({type, placeholder, register}) {

  //

  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      {...register} 
      className={`border border-slate-900 rounded p-2`} 
    />
  )
}