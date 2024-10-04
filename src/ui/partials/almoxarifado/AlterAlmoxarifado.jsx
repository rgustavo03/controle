/* eslint-disable react/prop-types */
import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import FormAltAlmoxarifado from "../../components/modal/FormAltAlmoxarifado";
import altAlmoxarifado from "../../../services/altAlmoxarifado";

export default function AlterAlmoxarifado({itemAlt, altOpen, toggleAltOpen, token, updateListAlmoxarifados, navigate}) {

  function alt(item) {
    const id = itemAlt.id;

    const descricao = item.descricao == '' ? itemAlt.descricao : item.descricao;
    const tipo = item.tipo == 0 ? itemAlt.tipo : item.tipo;

    // ALTERAR ALMOXARIFADO
    if(descricao != itemAlt.descricao || tipo != itemAlt.tipo) {
      altAlmoxarifado(id, descricao, tipo, token, updateListAlmoxarifados, navigate);
    }

    closeThis();
  }

  function closeThis() {
    toggleAltOpen(false);
  }


  return (
    <Dialog open={altOpen} onClose={closeThis} className="relative z-10">

      <DialogBackdrop transition className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">


          <div className="h-full fixed right-0 flex max-w-full">
            <DialogPanel transition className="bg-slate-500 pointer-events-auto relative h-full w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700">
              
              {/* Conteúdo */}
              <FormAltAlmoxarifado itemAlt={itemAlt} alt={alt} closeThis={closeThis} />
              
            </DialogPanel>
          </div>


        </div>
      </div>

    </Dialog>
  )
}


