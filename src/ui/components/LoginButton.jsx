import React from "react";

export default function LoginButton({nome}) {

  //

  return (
    <button type="submit" className="bg-slate-900 rounded text-base text-white border-solid border border-slate-800 p-2 w-72 my-3">
      {nome}
    </button>
  )
}