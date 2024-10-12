/* eslint-disable react/prop-types */
import React from "react";
import { LineFornecedor } from "../../components/table/fornecedores/LineFornecedor";



export const TableFornecedores = ({ list }) => {


  const headers = ["Id", "Razão Social", "CPF / CNPJ", "", ""];


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
            <LineFornecedor key={item.id} item={item} />
          )
        })}
      </tbody>
    </table>
  )
}
