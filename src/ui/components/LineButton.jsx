import React from "react";

export const LineButton = ({type, func}) => {
  
  let name = '';
  let bgColor = '';

  if(type == 'alt') {
    name = 'Alterar';
    bgColor = 'bg-slate-300';
  }
  if(type == 'delete') {
    name = 'Excluir';
    bgColor = 'bg-red-500';
  }

  return (
    <button className={`${bgColor} p-1 rounded-sm`} onClick={() => func()} >{name}</button>
  )
}