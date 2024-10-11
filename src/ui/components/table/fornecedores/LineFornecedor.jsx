import React from "react";
import { CellOptions } from "./CellOptions";
import { tipos } from "../../../../data/almoxarifado";

export const LineFornecedor = ({ item }) => {


  const tipo = tipos.find(t => t.tipo == item.tipo);


  return (
    <tr className="border-b border-neutral-200 text-[15px] sm:text-[16px]">

      <td className="cell-table-almoxarifado">
        {item.id}
      </td>

      <td className="cell-table-almoxarifado">
        {item.nomeRazaoSocial}
      </td>

      <td className="cell-table-almoxarifado">
        {item.cpfCnpj}
      </td>

      <td className="cell-table-almoxarifado">
        {item.email}
      </td>

      <td className="cell-table-almoxarifado">
        {item.numeroTelefone}
      </td>

      <td className="cell-table-almoxarifado">
        {item.ativo? "Sim" : "Não"}
      </td>

      <td className="cell-table-almoxarifado relative w-[50px] sm:w-[70px]">
        <CellOptions item={ item } />
      </td>

    </tr>
  )
}
