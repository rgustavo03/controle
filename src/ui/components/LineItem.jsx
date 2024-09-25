import React from "react";
import { LineButton } from "./LineButton";
import { CellDate } from "./CellDate";

export const LineItem = ({item, altItem, deleteItem}) => {


  function del() {
    deleteItem(item.id);
  }


  function alt() {
    altItem(item.id);
  }


  return (
    <tr>

      <td>
        {item.id}
      </td>

      <td>
        {item.empresaId}
      </td>

      <td>
        {item.descricao}
      </td>

      <td>
        {item.tipo}
      </td>

      <td>
        {item.usuarioId}
      </td>

      <CellDate date={item.dataInclusao} />

      <CellDate date={item.dataAlteracao} />

      <CellDate date={item.dataExclusao} />

      <td>
        <LineButton type="alt" func={alt} />
      </td>

      <td>
        <LineButton type="delete" func={del} />
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