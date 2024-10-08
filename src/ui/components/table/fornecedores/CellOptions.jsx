import React, { useContext } from "react"

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Ellipsis } from "../../../svg/Ellipsis"
import { IconButton } from "../../IconButton"
import { FornecedoresContext } from "../../../../context/fornecedoresContext"


export const CellOptions = ({ item }) => {

  
  const { setItemData, altFornecedor, openDelete } = useContext(FornecedoresContext);


  function alt() {
    setItemData(item);
    altFornecedor();
  }


  function del() {
    setItemData(item);
    openDelete();
  }


  return (
    <Menu>


      <MenuButton className="inline-flex items-center py-4 rounded data-[hover]:bg-gray-100 data-[open]:bg-gray-100">
        <Ellipsis size="7" color="black" />
      </MenuButton>


      <MenuItems transition anchor="bottom end" className="w-48 origin-top-right rounded bg-white p-1 text-sm/6 text-black drop-shadow-2xl transition duration-100 ease-out">

        <MenuItem>
          <IconButton type="alt" func={alt} />
        </MenuItem>

        <MenuItem>
          <IconButton type="del" func={del} />
        </MenuItem>

      </MenuItems>


    </Menu>
  )
}


/*
<>
  <IconButton type="alt" func={alt} />
  <IconButton type="del" func={del} />
</>
*/


/*
<Menu>


  <MenuButton className="inline-flex items-center p-3 rounded data-[hover]:bg-gray-200 data-[open]:bg-gray-200">
    <Ellipsis size="7" color="black" />
  </MenuButton>


  <MenuItems transition anchor="bottom end" className="w-52 origin-top-right rounded bg-white p-1 text-sm/6 text-black drop-shadow-2xl transition duration-100 ease-out">

    <MenuItem>
      <IconButton type="alt" func={alt} />
    </MenuItem>

    <MenuItem>
      <IconButton type="del" func={del} />
    </MenuItem>

  </MenuItems>


</Menu>
*/