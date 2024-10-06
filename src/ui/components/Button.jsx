import React from "react";

export const Button = ({type, func, name}) => {

  let style = "";

  if(type == 'cancel') {
    style = "border rounded text-black p-2 px-4";
  }
  if(type == 'add') {
    style = "bg-slate-900 text-white rounded p-2 transition hover:bg-slate-700";
  }
  if(type == 'excluir') {
    style = "bg-red-700 text-white rounded p-2 px-4 transition hover:bg-red-800";
  }


  return (
    <button onClick={() => func()} className={`${style}`}>
      {name}
    </button>
  )
}