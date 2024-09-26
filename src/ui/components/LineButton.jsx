import React from "react";

export const LineButton = ({type, func}) => {
  
  let name = '';
  let bg = '';
  let color = '';

  if(type == 'alt') {
    name = 'Alterar';
    bg = 'slate-300';
    color = 'black';
  }
  if(type == 'delete') {
    name = 'Excluir';
    bg = 'red-600';
    color = 'white';
  }

  return (
    <button className={`bg-${bg} p-2 rounded-sm text-${color}`} onClick={() => func()} >{name}</button>
  )
}