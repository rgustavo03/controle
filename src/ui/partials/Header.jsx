import React, { useState } from "react";
import SideBar from "./SideBar";
import { Bars } from "../components/Bars";
import { User } from "../components/User";

export default function Header({name}) {

  const [sideBarActive, setSideBarActive] = useState(false);

  function handleActive(boolean) {
    setSideBarActive(boolean); // valor contrário
    //setSideBarActive(!sideBarActive); // valor contrário
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


      <SideBar active={sideBarActive} handleActive={handleActive} />


      <div
        className="w-[70px] flex justify-center items-center cursor-pointer"
        onClick={() => handleActive(true)}
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