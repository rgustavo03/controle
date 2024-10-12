import React, { useEffect, useState } from "react";
import { CellOptions } from "./CellOptions";
import { ShowMoreButton } from "../../ShowMoreButton";

export const LineFornecedor = ({ item }) => {


  const [more, setMore] = useState(false);

  function toggleButton() {
    setMore(!more);
  }

  const transition = "transition-all duration-500 ease-in-out";



  return (
    <>
      <tr className={`relative h-[50px] text-[15px] sm:text-[16px]   ${(!more) && 'border-b border-neutral-200'}   `}>
        <td className="cell-table-almoxarifado">
          {item.id}
        </td>

        <td className="cell-table-almoxarifado">
          {item.nomeRazaoSocial}
        </td>

        <td className="cell-table-almoxarifado">
          {item.cpfCnpj}
        </td>

        <td className="cell-table-almoxarifado relative w-[50px] sm:w-[70px]">
          <CellOptions item={ item } />
        </td>

        <td className="cell-table-almoxarifado">
          <ShowMoreButton func={toggleButton} state={more} />
        </td>


        <div className={`absolute top-full left-0 h-[70px] w-full ${(!more) && 'opacity-0'} ${transition} flex flex-row gap-7`}>
          <div className="flex-1 flex flex-col">
            <h6 className="text-[15px] font-semibold text-gray-800">Ativo</h6>
            <span>{item.ativo? "Sim" : "Não"}</span>
          </div>

          <div className="flex-1 flex flex-col">
            <h6 className="font-semibold text-gray-800">Email</h6>
            <span>{item.email}</span>
          </div>

          <div className="flex-1 flex flex-col">
            <h6 className="text-[15px] font-semibold text-gray-800">Telefone</h6>
            <span>{item.numeroTelefone}</span>
          </div>
        </div>

      </tr>

      <tr className={`${(more) ? 'h-[70px] border-b border-neutral-200' : 'h-0'} ${transition}`}></tr>
    </>
  )
}
