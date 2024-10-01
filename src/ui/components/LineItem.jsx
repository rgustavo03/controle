import React from "react";
import { CellDate } from "./CellDate";
import { CellOptions } from "./CellOptions";

export const LineItem = ({item, altItem, deleteItem}) => {


  function alt() {
    altItem(item.id);
  }


  function del() {
    deleteItem(item.id);
  }


  return (
    <tr className="border-b border-neutral-200">

      <td className="cell-table-almoxarifado">
        {item.id}
      </td>

      <td className="cell-table-almoxarifado">
        {item.empresaId}
      </td>

      <td className="cell-table-almoxarifado">
        {item.descricao}
      </td>

      <td className="cell-table-almoxarifado">
        {item.tipo}
      </td>

      <td className="cell-table-almoxarifado">
        {item.usuarioId}
      </td>

      <CellDate date={item.dataInclusao} />

      <CellDate date={item.dataAlteracao} />

      <CellDate date={item.dataExclusao} />

      <td className="cell-table-almoxarifado relative">
        <CellOptions alt={alt} del={del} />
      </td>

    </tr>
  )
}


/*
"data": [
  {
    "id": 1,
    "empresaId": 1,
    "descricao": "PRINCIPAL",
    "tipo": 1,
    "usuarioId": 0,
    "dataInclusao": "2024-08-20T01:25:16.643044",
    "dataAlteracao": null,
    "dataExclusao": null
  }
]
*/