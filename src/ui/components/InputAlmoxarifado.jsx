import React from "react";

export default function InputAlmoxarifado({type, placeholder, register}) {

  //

  return (
    <div className="flex flex-col">

      <label 
        htmlFor={register.name}
        className="text-base text-gray-600 font-semibold"
      >
        {placeholder}
      </label>

      <input 
        type={type} 
        placeholder={placeholder} 
        {...register} 
        className={`border border-gray-400 rounded p-2`} 
      />

    </div>
  )
}
