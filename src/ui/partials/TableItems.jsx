/* eslint-disable react/prop-types */
import React from "react";
import { LineItem } from "../components/LineItem";

export const TableItems = ({list, altItem, deleteItem}) => {


  const headers = ["Id", "Id da empresa", "Descrição", "Tipo", "Id do usuário", "Inclusão", "Alteração", "Exclusão", ""];


  return (
    <table>
      <thead>
        <tr className="">
          {headers.map(header => {
            //
            return (
              <th key={header} className="text-base font-semibold text-gray-900 p-3 px-4" >{header}</th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {list.map(item => {
          return (
            <LineItem key={item.id} item={item} altItem={altItem} deleteItem={deleteItem} />
          )
        })}
      </tbody>
    </table>
  )
}

// <LineItem key item   excluir   alterar   />