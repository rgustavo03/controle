import { createContext } from "react";


const emptyItem = {
  id: 0,
  empresaId: 0,
  descricao: "",
  tipo: "",
  usuarioId: 0,
  dataInclusao: "",
  dataAlteracao: null,
  dataExclusao: null
}


// fazer tipagem de uma forma não typescript ;---;
const initialState = {
  item: emptyItem,
  setItemData: (emptyItem) => {},
};


export const AlmoxarifadoContext = createContext(initialState);