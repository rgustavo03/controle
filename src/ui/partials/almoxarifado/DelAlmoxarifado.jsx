/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Button } from "../../components/Button";
import deleteAlmoxarifado from "../../../services/almoxarifado/deleteAlmoxarifado";
import useSession from "../../../hooks/useSession";
import { AlmoxarifadoContext } from "../../../context/almoxarifadoContext";
import { tipos } from "../../../data/almoxarifado";
import { ExclamationCircleIcon } from "@heroicons/react/16/solid";


export const DelAlmoxarifado = ({ navigate }) => {


  const { getToken } = useSession();

  const { item, updateListAlmoxarifados, closeDelete } = useContext(AlmoxarifadoContext);

  // const tipo = tipos.find(t => t.tipo == item.tipo);


  function deleteItem() {
    deleteAlmoxarifado(getToken(), item.id, updateListAlmoxarifados, navigate); // api
    closeThis();
  }


  function closeThis() {
    closeDelete();
  }


  return (
    <div id="delete-screen" className="h-min w-min bg-white rounded-lg flex flex-col sm:flex-row p-5">

      <div id="delete-icone-div" className="w-10 flex justify-center pt-2">
        <ExclamationCircleIcon className="h-min rounded-full size-10 text-red-100 bg-red-500" />
      </div>

      <div id="delete-info" className="min-w-[300px] md:w-[420px] flex flex-col gap-3">

        <div id="delete-top" className="py-2 px-1 sm:px-3 flex flex-col gap-2">
          <h3 className="text-lg font-bold text-gray-600">Remover Almoxarifado</h3>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
            <h6 className="text-md text-gray-700">Deseja remover o almoxarifado?</h6>
            <span className="bg-gray-200 text-gray-800 p-[6px] rounded">Id: {item.id}</span>
          </div>
        </div>

        <div id="delete-bottom" className="flex flex-row gap-2 justify-end">
          <Button type="cancel" func={closeThis} name="Cancelar" />
          <Button type="excluir" func={deleteItem} name="Deletar" />
        </div>

      </div>

    </div>
  )
}