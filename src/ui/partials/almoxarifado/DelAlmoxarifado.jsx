/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { Button } from "../../components/Button";
import deleteAlmoxarifado from "../../../services/almoxarifado/deleteAlmoxarifado";
import useSession from "../../../hooks/useSession";
import { AlmoxarifadoContext } from "../../../context/almoxarifadoContext";
import { tipos } from "../../../data/almoxarifado";


export const DelAlmoxarifado = ({delOpen, closeDelete, navigate}) => {


  const { getToken } = useSession();

  const { item, updateListAlmoxarifados } = useContext(AlmoxarifadoContext);

  const tipo = tipos.find(t => t.tipo == item.tipo);


  function deleteItem() {
    deleteAlmoxarifado(getToken(), item.id, updateListAlmoxarifados, navigate); // api
    closeThis();
  }


  function closeThis() {
    closeDelete();
  }


  return (
    <Dialog open={delOpen} onClose={closeThis} className="relative z-10">

      <DialogBackdrop transition className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden flex justify-center items-center">


          <div className="fixed flex max-w-full">
            <DialogPanel transition className="bg-slate-500 pointer-events-auto relative h-[200px] w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:opacity-0 sm:duration-700">
              



              {/* Conteúdo */} {/* Caso componentizar, props: ({itemDel, closeThis, del}) */}
              <div className="h-full w-full bg-white rounded flex flex-col justify-between p-4">

                <div>
                  Excluir <span className="bg-gray-300 p-2 rounded">Id: {item.id}</span>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    Descrição: <span className="border p-2 rounded">{item.descricao}</span>
                  </div>
                  <div>
                    Tipo: <span className="border p-2 rounded">{tipo?.tipo}. {tipo?.nome}</span>
                  </div>
                </div>

                <div className="flex flex-row justify-end gap-2">
                  <Button type="cancel" func={closeThis} name="Cancelar" />
                  <Button type="excluir" func={deleteItem} name="Excluir" />
                </div>

              </div>
              



            </DialogPanel>
          </div>


        </div>
      </div>

    </Dialog>
  )
}