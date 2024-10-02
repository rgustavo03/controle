import React from "react";

export default function CancelButton({toggleOpen}) {
  //
  return (
    <button 
      onClick={() => toggleOpen(false)}
      className="border rounded text-black p-2 px-4"
    >
      Cancelar
    </button>
  )
}