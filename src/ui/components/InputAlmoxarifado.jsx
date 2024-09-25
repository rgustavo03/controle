import React from "react";

export default function InputAlmoxarifado({type, placeholder, register}) {

  //

  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      {...register} 
      className={``} 
    />
  )
}