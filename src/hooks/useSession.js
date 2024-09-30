import { useState } from "react";

export default function useSession() {

  const key = 'session';

  const [user, setUser] = useState(JSON.parse(localStorage.getItem(key) || '{}'));



  const startSession = (data) => {
    const session = {
      token: data.token,
      name: data.usuario.nome
    };

    setStorage(session);
  }



  const endSession = () => {
    setStorage({}); // usuario no Storage vazio
    setUser({}); // usuario vazio
  }


  
  const getName = () => {
    return user.name
  }



  const getToken = () => {
    return user.token
  }



  const setStorage = (data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
  }



  return { startSession, endSession, getName, getToken }
}
