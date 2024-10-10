
export const initialHolder = {
  nomeRazaoSocial: "Razão Social",
  nomeFantasia: "Nome Fantasia",
  tipo: "Tipo Pessoa",
  cpfCnpj: "CPF / CNPJ",
  numeroPisPasepNit: "PIS Pasep NIT",
  email: "Email",
  telefone: "Telefone",
  rgInscricaoEstadual: "Rg Inscrição Estadual",
  inscricaoMunicipal: "Inscrição Municipal",
  crt: "CRT",
  optanteSimples: "Optante Simples",

  cep: "CEP",
  cidade: "Cidade",
  uf: "UF",
  logradouro: "Logradouro",
  numero: "n°", 
  bairro: "Bairro",
  complemento: "Complemento",
  codigoIbge: "Código Ibge",

  atividade: "Atividade",
  limiteCredito: "Limite Crédito",
  liberado: "Liberado",
  desconto: "Desconto"
}



export function setHolderValues(item) {
  return {
    nomeRazaoSocial: item.nomeRazaoSocial,
    nomeFantasia: item.nomeFantasia,
    tipo: "",
    cpfCnpj: `${item.cpfCnpj}`,
    numeroPisPasepNit: item.numeroPisPasepNit,
    email: item.email,
    telefone: item.telefone,
    rgInscricaoEstadual: item.rgInscricaoEstadual,
    inscricaoMunicipal: item.inscricaoMunicipal,
    crt: `${item.crt}`,
    optanteSimples: item.optanteSimples? `Sim` : `Não`,

    cep: item.cep,
    cidade: item.cidade,
    uf: `${item.uf}`,
    logradouro: item.logradouro,
    numero: item.numero,
    bairro: item.bairro,
    complemento: item.complemento,
    codigoIbge: `${item.codigoIbge}`,

    atividade: `${item.atividade}`,
    limiteCredito: `${item.limiteCredito}`,
    liberado: item.liberado? `Sim` : `Não`,
    desconto: `${item.desconto}`
  }
}
