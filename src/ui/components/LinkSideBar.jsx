import React from "react"
import { Link } from "react-router-dom"

export const LinkSideBar = ({link, text}) => {

  //

  return (
    <Link 
      to={link} 
      className="p-2 rounded hover:bg-slate-900 text-gray-200 hover:text-white transition-all" 
    >
      {text}
    </Link>
  )
}