import { createContext } from "react";


const emptyUser = {
  id: 0,
  email: "",
  nome: ""
}


// fazer tipagem de uma forma não typescript ;---;
const initialState = {
  user: emptyUser,
  setUserData: (emptyUser) => {},
};


export const UserContext = createContext(initialState);
