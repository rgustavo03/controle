import React from "react";

export default function CancelButton({toggleActive}) {
  //
  return (
    <button 
      onClick={() => toggleActive(false)}
      className="border rounded text-black p-2 px-4"
    >
      Cancelar
    </button>
  )
}