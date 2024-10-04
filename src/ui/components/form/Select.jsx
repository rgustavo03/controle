import React from "react"
import { Option } from "./Option"


export const Select = ({label, items, register}) => {


  //


  return (
    <div className="flex flex-col gap-1">

      <label 
        htmlFor={register.name} 
        className="text-sm font-bold text-gray-600"
      >
        {label}
      </label>

      <select 
        {...register}
        className="border border-gray-400 rounded p-2 text-base"
      >
        {items.map(t => {
          //
          return (
            <Option key={t.tipo} label={t.nome} value={t.tipo} />
          )
        })}
      </select>

    </div>
  )
}