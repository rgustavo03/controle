import React from "react";

export default function InputLogin({type, placeholder, register}) {

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
        className="border-solid border border-slate-800 rounded p-2 w-72" 
      />

    </div>
  )
}