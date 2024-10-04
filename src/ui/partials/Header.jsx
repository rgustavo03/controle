import React, { useContext, useState } from "react";
import { Bars } from "../svg/Bars";
import { SideBar } from "./SideBar";
import { UserMenu } from "../components/header/UserMenu";
import { UserContext } from "../../context/userContext";

export default function Header() {


  const { user } = useContext(UserContext);


  const [openSideBar, setOpenSideBar] = useState(false);


  function closeSideBar() {
    setOpenSideBar(false);
  }


  function nameUpdt() {
    if(!user.nome) return ""
    //
    const lowered = user.nome.toLowerCase();
    const capital = lowered.charAt(0).toLocaleUpperCase();
    const rest = lowered.slice(1);
    
    return capital + rest
  }



  return (
    <header className="relative bg-white flex h-[70px] justify-between">


      <SideBar open={openSideBar} close={closeSideBar} />


      <div
        className="w-[70px] flex justify-center items-center cursor-pointer"
        onClick={() => setOpenSideBar(true)}
      >
        <Bars />
      </div>


      <div id="user" className="flex justify-center items-center">

        <h2 className="text-lg text-black">
          {nameUpdt()}
        </h2>

        <div className="w-[70px] flex justify-center items-center cursor-pointer">
          <UserMenu />
        </div>

      </div>


    </header>
  )
}