import React from "react"

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IconButton } from "../IconButton"
import { User } from "../../svg/User"
import useSession from "../../../hooks/useSession"
import { useNavigate } from "react-router-dom"


export const UserMenu = () => {

  const navigate = useNavigate();

  const { endToken } = useSession();


  function logout() {
    endToken();
    navigate('/');
  }


  return (
    <Menu>

      <MenuButton className="inline-flex items-center p-3 rounded data-[open]:bg-gray-100">
        <User />
      </MenuButton>


      <MenuItems transition anchor="bottom end" className="w-28 origin-top-right rounded bg-white p-1 text-sm/6 text-black drop-shadow-2xl transition duration-100 ease-out">
        
        <MenuItem>
          <IconButton type="logout" func={logout} />
        </MenuItem>

      </MenuItems>

    </Menu>
  )
}