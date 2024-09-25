import { useState } from "react";

export default function useSession() {

  const key = 'session';

  const [user, setUser] = useState(JSON.parse(localStorage.getItem(key) || '{}'));



  const startSession = (token, expiration) => {
    const session = {
      token: token, 
      expiration: expiration
    };

    window.localStorage.setItem(key, JSON.stringify(session));
  }



  const checkSession = () => {
    const expDate = new Date(user.expiration);

    const actualDate = new Date();

    if(expDate > actualDate) return true // dentro do tempo limite de login

    // tempo de login excedido
    setStorage({}); // usuario no Storage vazio
    setUser({}); // usuario vazio
    return false
  }



  const getToken = () => {
    return user.token
  }



  const setStorage = (data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
  }



  return { startSession, checkSession, getToken }
}
