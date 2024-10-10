export const tiposPessoa = [
  {key: 'tipoCpf', label: 'CPF', value: "1"},
  {key: 'tipoCnpj', label: 'CNPJ', value: "2"}
];


export const optanteSimples = [
  {key: 'os0', label: 'Não', value: "0"},
  {key: 'os1', label: 'Sim', value: "1"}
];


export const ufs = [
  { key: 11, label: "Rondônia - RO", value: 11 },
  { key: 12, label: "Acre - AC", value: 12 },
  { key: 13, label: "Amazonas - AM", value: 13 },
  { key: 14, label: "Roraima - RR", value: 14 },
  { key: 15, label: "Pará - PA", value: 15 },
  { key: 16, label: "Amapá - AP", value: 16 },
  { key: 17, label: "Tocantins - TO", value: 17 },
  { key: 21, label: "Maranhão - MA", value: 21 },
  { key: 22, label: "Piauí - PI", value: 22 },
  { key: 23, label: "Ceará - CE", value: 23 },
  { key: 24, label: "Rio Grande do Norte - RN", value: 24 },
  { key: 25, label: "Paraíba - PB", value: 25 },
  { key: 26, label: "Pernambuco - PE", value: 26 },
  { key: 27, label: "Alagoas - AL", value: 27 },
  { key: 28, label: "Sergipe - SE", value: 28 },
  { key: 29, label: "Bahia - BA", value: 29 },
  { key: 31, label: "Minas Gerais - MG", value: 31 },
  { key: 32, label: "Espírito Santo - ES", value: 32 },
  { key: 33, label: "Rio de Janeiro - RJ", value: 33 },
  { key: 35, label: "São Paulo - SP", value: 35 },
  { key: 41, label: "Paraná - PR", value: 41 },
  { key: 42, label: "Santa Catarina - SC", value: 42 },
  { key: 43, label: "Rio Grande do Sul - RS", value: 43 },
  { key: 50, label: "Mato Grosso do Sul - MS", value: 50 },
  { key: 51, label: "Mato Grosso - MT", value: 51 },
  { key: 52, label: "Goiás - GO", value: 52 },
  { key: 53, label: "Distrito Federal - DF", value: 53 },
];


export const atividades = [
  {key: 'atvd1', label: 'Atividade 1', value: "1"},
  {key: 'atvd2', label: 'Atividade 2', value: "2"},
  {key: 'atvd3', label: 'Atividade 3', value: "3"}
];


export const liberado = [
  {key: 'liberadoFalse', label: 'Não', value: "0"},
  {key: 'liberadoTrue', label: 'Sim', value: "1"}
];


export const ativo = [
  {key: '', label: '', value: ""},
  {tipo: true, nome: 'Sim'},
  {tipo: false, nome: 'Não'}
];


// ===========


const regiao = {
  id: 0,
  sigla: "",
  nome: ""
}
const uf = {
  id: 0,
  sigla: "",
  nome: "",
  regiao: regiao
}
const mesorregiao = {
  id: 0,
  nome: "",
  uf: uf
}
export const municipioEmpty = {
  id: 0,
  nome: "",
  mesorregiao: mesorregiao
}

/*
export const municipioEmpty = {
  id: 0,
  nome: "",
  mesorregiao: {}
}
*/