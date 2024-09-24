import React from "react";

export default function LoginButton({nome}) {

  //

  return (
    <button type="submit" className="border-solid border border-slate-800 rounded p-2 w-72">
      {nome}
    </button>
  )
}