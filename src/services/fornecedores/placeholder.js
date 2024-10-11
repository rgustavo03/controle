
export const initialHolder = {
  nomeRazaoSocial: "Razão Social",
  cpfCnpj: "CPF / CNPJ",
  numeroTelefone: "Numero Telefone",
  email: "Email",
  ativo: "Ativo"
}



export function setHolderValues(item) {
  return {
    nomeRazaoSocial: item.nomeRazaoSocial,
    cpfCnpj: `${item.cpfCnpj}`,
    numeroTelefone: item.numeroTelefone,
    email: item.email,
    ativo: item.ativo
  }
}
