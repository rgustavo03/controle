import React from "react";

export default function AddActiveButton({toggleAddOpen}) {
  //
  return (
    <button 
      onClick={() => toggleAddOpen(true)} 
      className="bg-slate-900 text-white rounded p-2 transition hover:bg-slate-700"
    >
      Novo +
    </button>
  )
}