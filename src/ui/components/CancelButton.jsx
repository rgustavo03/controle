import React from "react";

export default function CancelButton({toggleActive}) {
  //
  return (
    <button 
      onClick={() => toggleActive(false)}
      className="bg-red-600 rounded text-white p-2"
    >
      Cancelar
    </button>
  )
}