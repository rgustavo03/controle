import React from "react"
import { ChevronUp } from "../svg/ChevronUp";
import { ChevronDown } from "../svg/ChevronDown";

export const ShowMoreButton = ({func, state}) => {


  //


  return (
    <div className="h-full flex justify-center items-center">
      <button
        onClick={() => func()}
        className=""
      >
        {state? (
          <ChevronUp />
        ) : (
          <ChevronDown />
        )}
      </button>
    </div>
  )
}