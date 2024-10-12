import { createContext } from "react";


export const emptyItem = {
  empresaId: 0,
  nomeRazaoSocial: "",
  cpfCnpj: "",
  telefone: "",
  email: "",
  rgInscricaoEstadual: "",
  tipo: 0,
  optanteSimples: true,
  limiteCredito: 0,
  numeroPisPasepNit: "",
  cep: "",
  cidade: "",
  uf: 0,
  logradouro: "",
  numero: "",
  bairro: "",
  complemento: "",
  codigoIbge: 0,
  nomeFantasia: "",
  atividade: 0,
  crt: 0,
  liberado: true,
  desconto: 0,
  formaPagamentoId: null,
  condicaoPagamentoId: null,
  inscricaoMunicipal: ""
}


// fazer tipagem de uma forma não typescript ;---;
const initialState = {
  list: [{}],
  updateListFornecedores: (a) => {},
  item: emptyItem,
  setItemData: () => {},
  openDelete: () => {},
  closeDelete: () => {},
};


export const FornecedoresContext = createContext(initialState);