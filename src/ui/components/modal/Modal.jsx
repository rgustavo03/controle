import React, { useContext, useState, useEffect } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { AlmoxarifadoContext } from "../../../context/almoxarifadoContext";
import useSession from "../../../hooks/useSession";
import createAlmoxarifado from "../../../services/createAlmoxarifado";
import altAlmoxarifado from "../../../services/altAlmoxarifado";


export const Modal = ({modalOpen, modalExec, navigate}) => {

  const { item, updateListAlmoxarifados, closeModal } = useContext(AlmoxarifadoContext);
  const { getToken } = useSession();

  // -------------

  
  useEffect(() => {
    if(!modalOpen) return
  
    console.log(modalExec);
    console.log(item);

  }, [modalOpen]);


  // -------------


  function create(data) {
    createAlmoxarifado(data, getToken(), updateListAlmoxarifados, navigate); 
    closeThis();
  }


  // -------------


  function alt(data) {
    const id = item.id;

    const descricao = data.descricao == '' ? item.descricao : data.descricao;
    const tipo = data.tipo == 0 ? item.tipo : data.tipo;

    // ALTERAR ALMOXARIFADO
    if(descricao != item.descricao || tipo != item.tipo) {
      altAlmoxarifado(id, descricao, tipo, getToken(), updateListAlmoxarifados, navigate);
    }

    closeThis();
  }


  // -------------


  function closeThis() {
    closeModal();
  }



  return (
    <Dialog open={modalOpen} onClose={closeThis} className="relative z-10">

      <DialogBackdrop transition className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">


          <div className="h-full fixed right-0 flex max-w-full">
            <DialogPanel transition className="bg-slate-500 pointer-events-auto relative h-full w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700">
              
              {/* Conteúdo */}
              
              
            </DialogPanel>
          </div>


        </div>
      </div>

    </Dialog>
  )
}
