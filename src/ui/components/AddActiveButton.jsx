import React from "react";

export default function AddActiveButton({toggleAddActive}) {
  //
  return (
    <button 
      onClick={() => toggleAddActive(true)} 
      className="bg-slate-900 text-white rounded p-2 transition hover:bg-slate-700"
    >
      Novo +
    </button>
  )
}