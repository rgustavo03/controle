import { createContext } from "react";


const emptyItem = {
  id: 0,
  empresaId: 0,
  descricao: "",
  tipo: 0,
  usuarioId: 0,
  dataInclusao: "",
  dataAlteracao: null,
  dataExclusao: null
}

const exec = "";


// fazer tipagem de uma forma não typescript ;---;
const initialState = {
  item: emptyItem,
  setItemData: (emptyItem) => {},
  updateListAlmoxarifados: () => {},
  confirmDelete: () => {},
  altAlmoxarifado: () => {},
  modalType: exec,
  closeModal: () => {}
};


export const AlmoxarifadoContext = createContext(initialState);