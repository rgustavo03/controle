import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { Close } from '../components/sidebar/Close';
import { Links } from '../components/sidebar/Links';


export const SideBar = ({open, close}) => {


  function closeThis() {
    close();
  }


  return (
    <Dialog open={open} onClose={closeThis} className="relative z-10">

      <DialogBackdrop transition className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">


          <div className="h-full fixed left-0 flex max-w-full">
            <DialogPanel transition className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:-translate-x-full sm:duration-700">
              
              {/* Conteúdo */}
              <Links />

              {/* Botão fechar */}
              <Close closeThis={closeThis} />
              
            </DialogPanel>
          </div>


        </div>
      </div>

    </Dialog>
  )
}