import React from "react"

export const ShowMoreButton = ({func, state}) => {


  //


  return (
    <button
      onClick={() => func()}
      className=""
    >
      {state? 'X' : 'O'}
    </button>
  )
}