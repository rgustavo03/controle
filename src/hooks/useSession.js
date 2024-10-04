import { useState } from "react";

export default function useSession() {

  const key = 'session';

  const [user, setUser] = useState(JSON.parse(localStorage.getItem(key) || '{}'));



  const startToken = (token) => {
    const session = {
      token: token
    };

    setStorage(session);
  }



  const endToken = () => {
    setStorage({}); // usuario no Storage vazio
    setUser({}); // usuario vazio
  }


  
  const getToken = () => {
    return user.token
  }



  const setStorage = (data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
  }



  return { startToken, endToken, getToken }
}
