import React, { useEffect } from "react";
import useSession from "../hooks/useSession";

export default function Controller() {

  const { startSession, checkSession } = useSession();


  useEffect(() => {
    const session = checkSession();

    if(!session) {
      console.log('deslogado')
    }

    // redirecionar para pagina almoxarifado
    if(session) {
      console.log('logado')
    }
  }, []);



  return (
    <div id="content"></div>
  )
}