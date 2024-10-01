import React from "react"

export const Ellipsis = ({size, color}) => {

  //

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" color={`${color}`} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-${size}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
    </svg>
  )
}