/* eslint-disable react/prop-types */
import React from "react";
import { LineItem } from "../components/LineItem";

export const TableItems = ({list, altItem, deleteItem}) => {
  //
  return (
    <div className="border p-7">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Id da empresa</th>
            <th>Descrição</th>
            <th>Tipo</th>
            <th>Id do usuário</th>
            <th>Data da Inclusão</th>
            <th>Data de Alteração</th>
            <th>Data de Exclusão</th>
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