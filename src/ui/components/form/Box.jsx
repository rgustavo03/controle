import React from "react"

export const Box = ({children, title}) => {


  //


  return (
    <div id="middle" className="flex flex-col border rounded-md md:rounded-lg bg-white pb-5">
      <div id="middle-top" className="h-[60px] flex flex-row justify-between items-center p-4 md:p-6 border-b border-gray-200">
        <h3 className="text-base text-gray-700 font-semibold">{title}</h3>
      </div>

      <div id="middle-down" className="flex p-4">
        {children}
      </div>
    </div>
  )
}