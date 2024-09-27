import { useState } from "react";

export default function useSession() {

  const key = 'session';

  const [user, setUser] = useState(JSON.parse(localStorage.getItem(key) || '{}'));



  const startSession = (token) => {
    const session = {
      token: token
    };

    window.localStorage.setItem(key, JSON.stringify(session));
  }



  const endSession = () => {
    setStorage({}); // usuario no Storage vazio
    setUser({}); // usuario vazio
  }


  /* REFAZER MÉTODO???
  // Pode ser usado para verificar autenticação com a api, mas acho que não é necessário, pois no
  // método de listar almoxarifados já faz essa verificação de autenticação, daí retorna para login.
  //
  const checkSession = () => {
    const expDate = new Date(user.expiration);

    const actualDate = new Date();

    if(expDate > actualDate) return true // dentro do tempo limite de login

    // tempo de login excedido
    setStorage({}); // usuario no Storage vazio
    setUser({}); // usuario vazio
    return false
  }
  */



  const getToken = () => {
    return user.token
  }



  const setStorage = (data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
  }



  return { startSession, endSession, getToken }
}
