import React from "react";

export const Input = ({label, type, placeholder, register}) => {

  //

  return (
    <div className="flex flex-col gap-1">

      <label 
        htmlFor={register.name}
        className="text-sm font-bold text-gray-500"
      >
        {label}
      </label>

      <input 
        type={type} 
        placeholder={placeholder} 
        {...register} 
        className="border border-gray-400 rounded p-2 text-base" 
      />

    </div>
  )
}