import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import FormCreateAlmoxarifado from "../../components/sidebar/FormCreateAlmoxarifado";
import createAlmoxarifado from "../../../services/createAlmoxarifado";

export default function AddAlmoxarifado({addOpen, toggleAddOpen, updateListAlmoxarifados, token, navigate}) {


  function create(data) {
    createAlmoxarifado(data, token, updateListAlmoxarifados, navigate);
    
    closeThis();
  }


  function closeThis() {
    toggleAddOpen(false);
  }


  return (
    <Dialog open={addOpen} onClose={closeThis} className="relative z-10">

      <DialogBackdrop transition className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">


          <div className="h-full fixed right-0 flex max-w-full">
            <DialogPanel transition className="bg-slate-500 pointer-events-auto relative h-full w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700">
              
              {/* Conteúdo */}
              <FormCreateAlmoxarifado create={create} toggleAddOpen={toggleAddOpen} />
              
            </DialogPanel>
          </div>


        </div>
      </div>

    </Dialog>
  )
}

