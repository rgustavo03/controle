/* eslint-disable react/prop-types */
import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'


export const Delete = ({delOpen, closeDelete, children}) => {


  //


  return (
    <Dialog open={delOpen} onClose={closeDelete} className="relative z-10">

      <DialogBackdrop transition className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden flex justify-center items-center">


          <div className="fixed flex max-w-full">
            <DialogPanel transition className="bg-none pointer-events-auto relative h-min w-min max-w-md transform transition duration-500 ease-in-out data-[closed]:opacity-0 sm:duration-700">


              {/* Conteúdo */}
              {children}


            </DialogPanel>
          </div>


        </div>
      </div>

    </Dialog>
  )
}