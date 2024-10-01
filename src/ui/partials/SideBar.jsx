import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { LinkSideBar } from "../components/LinkSideBar";


export const SideBar = ({open, close}) => {


  function closeSideBar() {
    close();
  }


  return (
    <Dialog open={open} onClose={closeSideBar} className="relative z-10">

      <DialogBackdrop transition className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">


          <div className="h-full fixed left-0 flex max-w-full">
            <DialogPanel transition className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:-translate-x-full sm:duration-700">
              
              {/* Conteudo SideBar */}
              <div className="h-full flex flex-col bg-gray-800">
                <div className="h-[70px] bg-slate-900 px-4 flex items-center">
                  <DialogTitle className="text-base font-semibold leading-6 text-white">Panel title</DialogTitle>
                </div>

                <div className="relative mt-4 flex-1 flex flex-col px-2">
                  <LinkSideBar link="/comandas" text="Comandas" />
                  <LinkSideBar link="/zona-atendimento" text="Zona Atendimento" />
                  <LinkSideBar link="/local-atendimento" text="Local Atentidmento" />
                  <LinkSideBar link="/forma-pagamento" text="Forma Pagamento" />
                  <LinkSideBar link="/usuarios" text="Usuarios" />
                  <LinkSideBar link="/perfil-acesso" text="Perfil Acesso" />
                </div>
              </div>

              {/* Btn fechar */}
              <TransitionChild>
                <div className="absolute right-[-55px] top-0 flex h-[70px] duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                  <button type="button" onClick={() => closeSideBar()} className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
              </TransitionChild>
            </DialogPanel>

          </div>


        </div>
      </div>

    </Dialog>
  )
}