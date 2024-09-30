import React from "react";
import { Close } from "../components/Close";
import { LinkSideBar } from "../components/LinkSideBar";
import { Logo } from "../components/Logo";

// SideBar é posicionada a partir de Header

export default function SideBar({active, handleActive}) {

  function closeSideBar() {
    handleActive(false);
  }

  if(active) return (
    <div className="bg-[rgba(0,0,0,0.4)] absolute z-10 h-screen w-screen left-0 top-0 transition-all flex justify-start items-start">

      <div className="bg-gray-800 h-full w-96 flex flex-col px-2">
        <div className="h-[70px] flex justify-start items-center p-2">
          <Logo size="8" />
        </div>

        <LinkSideBar link="/comandas" text="Comandas" />
        <LinkSideBar link="/zona-atendimento" text="Zona Atendimento" />
        <LinkSideBar link="/local-atendimento" text="Local Atentidmento" />
        <LinkSideBar link="/forma-pagamento" text="Forma Pagamento" />
        <LinkSideBar link="/usuarios" text="Usuarios" />
        <LinkSideBar link="/perfil-acesso" text="Perfil Acesso" />
      </div>

      <div className="bg=[rgba(25,25,25,0.7)] flex-1 h-full" onClick={() => closeSideBar()}>
        <div className="h-[70px] w-[70px] flex justify-center items-center cursor-pointer">
          <Close size="8" color="white" />
        </div>
      </div>

    </div>
  )
}
