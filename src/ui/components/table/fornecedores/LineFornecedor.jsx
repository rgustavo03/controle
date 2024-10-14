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


        <div className={`absolute top-full left-0 w-full ${(!more) && 'opacity-0'} ${transition} flex flex-row`}>
          <div className="flex flex-col gap-4 items-end px-6">
            <h6 className="text-[15px] font-semibold text-gray-800">Ativo</h6>
            <h6 className="font-semibold text-gray-800">Email</h6>
            <h6 className="text-[15px] font-semibold text-gray-800">Telefone</h6>
          </div>

          <div className="flex flex-col gap-4 items-start">
            <span>{item.ativo? "Sim" : "Não"}</span>
            <span>{item.email? (item.email) : "*"}</span>
            <span>{item.numeroTelefone?(item.numeroTelefone) : "*"}</span>
          </div>          
        </div>

      </tr>

      <tr className={`${(more) ? 'h-[120px] border-b border-neutral-200' : 'h-0'} ${transition}`}></tr>
    </>
  )
}
