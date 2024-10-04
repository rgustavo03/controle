import React from "react";
import { CellOptions } from "./CellOptions";
import { tipos } from "../../../data/almoxarifado";

export const LineItem = ({ item }) => {


  const tipo = tipos.find(t => t.tipo == item.tipo);


  return (
    <tr className="border-b border-neutral-200">

      <td className="cell-table-almoxarifado">
        {item.id}
      </td>

      <td className="cell-table-almoxarifado">
        {item.descricao}
      </td>

      <td className="cell-table-almoxarifado">
        {tipo?.nome}
      </td>

      <td className="cell-table-almoxarifado relative w-[70px]">
        <CellOptions item={ item } />
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