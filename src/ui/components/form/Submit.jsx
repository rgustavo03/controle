import React from "react";


export const Submit = ({type, name}) => {


  let style = "";


  if(type == "session") {
    style = "bg-slate-900 rounded text-base text-white border-solid border border-slate-800 p-2 w-72 my-3";
  }
  if(type == "generic") {
    style = "bg-slate-900 text-white rounded p-2 px-4 transition hover:bg-slate-800";
  }


  return (
    <button type="submit" className={`${style}`}>
      {name}
    </button>
  )
}