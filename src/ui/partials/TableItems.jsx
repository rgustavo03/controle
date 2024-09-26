/* eslint-disable react/prop-types */
import React from "react";
import { LineItem } from "../components/LineItem";

export const TableItems = ({list, altItem, deleteItem}) => {

  const headers = ["Id", "Id da empresa", "Descrição", "Tipo", "Id do usuário", "Inclusão", "Alteração", "Exclusão", "", ""];
  //
  return (
    <div className="flex justify-center border border-slate-900 rounded py-2 my-5">
      <table>
        <thead>
          <tr className="border-y border-y-neutral-400">
            {headers.map(header => {
              //
              return (
                <th className="p-3 px-4" >{header}</th>
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
    </div>
  )
}

// <LineItem key item   excluir   alterar   />