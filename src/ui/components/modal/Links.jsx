import React from 'react';
import { DialogTitle } from '@headlessui/react'
import { LinkSideBar } from './LinkSideBar';

export const Links = () => {

  //

  return (
    <div className="h-full w-full flex flex-col bg-gray-800">
      <div className="h-[70px] bg-slate-900 px-4 flex items-center">
        <DialogTitle className="text-base font-semibold leading-6 text-white">Panel title</DialogTitle>
      </div>

      <div className="relative mt-4 flex-1 flex flex-col px-2">
        <LinkSideBar link="/almoxarifados" text="Almoxarifados" />
        <LinkSideBar link="/fornecedores" text="Fornecedores" />
      </div>
    </div>
  )
}