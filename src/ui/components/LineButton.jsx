import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import React from "react";

export const LineButton = ({type, func}) => {
  
  let icon = <></>;
  let name = '';
  let hover = '';

  if(type == 'alt') {
    icon = <PencilIcon className="text-gray-600 size-5" />
    name = 'Alterar';
    hover = 'hover:bg-slate-200';
  }
  if(type == 'del') {
    icon = <TrashIcon  className="text-red-600 size-5" />;
    name = 'Excluir';
    hover = 'hover:bg-red-200';
  }

  return (
    <button onClick={() => func()} className={`w-full p-2 rounded-sm ${hover} flex flex-row justify-start items-center gap-2`}>

      {icon}
      
      <p className="text-base">
        {name}
      </p>

    </button>
  )
}