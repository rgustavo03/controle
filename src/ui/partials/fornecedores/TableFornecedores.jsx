/* eslint-disable react/prop-types */
import React from "react";
import { LineItem } from "../../components/table/fornecedores/LineItem";



export const TableFornecedores = ({ list }) => {


  const headers = ["Id", "Razão Social", "CPF / CNPJ", "Email", "Telefone", "Ativo", ""];


  return (
    <table>
      <thead>
        <tr className="">
          {headers.map(header => {
            //
            return (
              <th key={header} className="text-[15px] font-semibold text-gray-800 p-3 px-4" >{header}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {list.map(item => {
          return (
            <LineItem key={item.id} item={item} />
          )
        })}
      </tbody>
    </table>
  )
}
