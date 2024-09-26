import React from "react";

export default function SubmitButton({nome}) {

  //

  return (
    <button 
      type="submit" 
      className="bg-slate-900 text-white rounded p-2"
    >
      {nome}
    </button>
  )
}