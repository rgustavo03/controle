import React from "react"

export const Close = ({size, color}) => {

  //

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" color={`${color}`} strokeWidth={1.5} stroke="currentColor" className={`size-${size}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}