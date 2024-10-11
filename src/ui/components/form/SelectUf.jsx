import React from "react"
import { Option } from "./Option"


export const SelectUf = ({label, list, register, handleChange}) => {


  return (
    <div className="flex-1 flex flex-col gap-1">

      <label 
        htmlFor={register.name} 
        className="text-sm font-semibold text-gray-700"
      >
        {label}
      </label>

      <select 
        {...register}
        onChange={handleChange}
        className="border border-gray-400 rounded p-2 text-base"
      >
        <option disabled selected >{label}</option>
        {list.map(option => {
          //
          return (
            <Option key={option.key} labelOption={option.label} value={option.value} />
          )
        })}
      </select>

    </div>
  )
}