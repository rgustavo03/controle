import React from "react";
import { PencilIcon, TrashIcon, LockClosedIcon } from "@heroicons/react/16/solid";


export const IconButton = ({type, func}) => {
  
  let icon = <></>;
  let name = '';
  let hover = '';

  if(type == 'alt') {
    icon = <PencilIcon className="text-gray-400 size-6" />
    name = 'Alterar';
    hover = 'hover:bg-slate-100';
  }
  if(type == 'del') {
    icon = <TrashIcon className="text-gray-400 size-6" />;
    name = 'Excluir';
    hover = 'hover:bg-red-100';
  }
  if(type == 'logout') {
    icon = <LockClosedIcon className="text-gray-400 size-6" />;
    name = 'Sair';
    hover = 'hover:bg-slate-100';
  }

  return (
    <button onClick={() => func()} className={`w-full py-[10px] px-2 rounded-sm ${hover} flex flex-row justify-start items-center gap-2`}>

      {icon}
      
      <p className="text-base text-gray-900">
        {name}
      </p>

    </button>
  )
}