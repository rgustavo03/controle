import React from "react";
import { LineButton } from "./LineButton";
import { CellDate } from "./CellDate";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Ellipsis } from "./Ellipsis";

export const LineItem = ({item, altItem, deleteItem}) => {


  function del() {
    deleteItem(item.id);
  }


  function alt() {
    altItem(item.id);
  }


  return (
    <tr className="border-b border-neutral-200">

      <td className="cell-table-almoxarifado">
        {item.id}
      </td>

      <td className="cell-table-almoxarifado">
        {item.empresaId}
      </td>

      <td className="cell-table-almoxarifado">
        {item.descricao}
      </td>

      <td className="cell-table-almoxarifado">
        {item.tipo}
      </td>

      <td className="cell-table-almoxarifado">
        {item.usuarioId}
      </td>

      <CellDate date={item.dataInclusao} />

      <CellDate date={item.dataAlteracao} />

      <CellDate date={item.dataExclusao} />

      <td className="cell-table-almoxarifado">
        <Menu>
          <MenuButton className="flex justify-center items-center">
            <Ellipsis size="7" color="black" />
          </MenuButton>

          <MenuItems anchor="bottom" className="flex flex-col">
            <MenuItem>
              <LineButton type="alt" func={alt} />
            </MenuItem>
            <MenuItem>
              <LineButton type="delete" func={del} />
            </MenuItem>
          </MenuItems>
        </Menu>
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