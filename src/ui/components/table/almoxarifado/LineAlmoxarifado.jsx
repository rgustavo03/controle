import React from "react";
import { CellOptions } from "./CellOptions";
import { tipos } from "../../../../data/almoxarifado";

export const LineAlmoxarifado = ({ item }) => {


  const tipo = tipos.find(t => t.tipo == item.tipo);


  return (
    <tr className="border-b border-neutral-200 text-[15px] sm:text-[16px]">

      <td className="cell-table-almoxarifado">
        {item.id}
      </td>

      <td className="cell-table-almoxarifado">
        {item.descricao}
      </td>

      <td className="cell-table-almoxarifado">
        {tipo?.nome}
      </td>

      <td className="cell-table-almoxarifado relative w-[50px] sm:w-[70px]">
        <CellOptions item={ item } />
      </td>

    </tr>
  )
}
