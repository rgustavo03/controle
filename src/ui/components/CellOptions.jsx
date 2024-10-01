import React from "react"

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Ellipsis } from "../svg/Ellipsis"
import { LineButton } from "./LineButton"


export const CellOptions = ({alt, del}) => {

  //

  return (
    <Menu>

      <MenuButton className="inline-flex items-center p-3 rounded data-[hover]:bg-gray-200 data-[open]:bg-gray-200">
        <Ellipsis size="7" color="black" />
      </MenuButton>




      <MenuItems transition anchor="bottom end"
        className="w-52 origin-top-right rounded bg-white p-1 text-sm/6 text-black drop-shadow-2xl transition duration-100 ease-out"
      >


        <MenuItem>
          <LineButton type="alt" func={alt} />
        </MenuItem>

        <MenuItem>
          <LineButton type="del" func={del} />
        </MenuItem>


      </MenuItems>


    </Menu>
  )
}