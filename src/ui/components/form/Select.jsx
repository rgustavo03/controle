import React from "react"
import { Option } from "./Option"


export const Select = ({label, list, register}) => {


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
        className="border border-gray-400 rounded p-2 text-base"
      >
        <option disabled>{label}</option>
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