import React, { useState } from "react";
import { Bars } from "../svg/Bars";
import { User } from "../svg/User";
import { SideBar } from "./SideBar";

export default function Header({name}) {


  const [openSideBar, setOpenSideBar] = useState(false);


  function closeSideBar() {
    setOpenSideBar(false);
  }


  function nameUpdt() {
    const lowered = name.toLowerCase();
    const capital = lowered.charAt(0).toLocaleUpperCase();
    const rest = lowered.slice(1);
    //
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
          <User />
        </div>

      </div>


    </header>
  )
}