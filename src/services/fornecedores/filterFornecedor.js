
export default function filterFornecedor(exec, data, id) {

  let dataFiltered = {};


  if(exec == "new") {
    dataFiltered = {
      empresaId: id,
      nomeRazaoSocial: data.nomeRazaoSocial,
      nomeFantasia: data.nomeFantasia,
      tipo: data.tipo, // number
      cpfCnpj: data.cpfCnpj,
      numeroPisPasepNit: data.numeroPisPasepNit,
      email: data.email,
      telefone: data.telefone,
      rgInscricaoEstadual: data.rgInscricaoEstadual,
      inscricaoMunicipal: data.inscricaoMunicipal,
      crt: data.crt, // number
      optanteSimples: (data.optanteSimples == 1) ? true : (data.optanteSimples == 0 && false),
      cep: data.cep,
      uf: data.uf, // number select
      cidade: data.cidade, // select
      bairro: data.bairro,
      logradouro: data.logradouro,
      numero: data.numero,
      complemento: data.complemento,
      codigoIbge: data.codigoIbge, // number
      atividade: data.atividade, // number select
      limiteCredito: data.limiteCredito, // number
      liberado: (data.liberado == 1) ? true : (data.liberado == 0 && false), // select
      desconto: data.desconto, // number
      formaPagamentoId: null, // data.formaPagamentoId (posteriormente)
      condicaoPagamentoId: null // data.condicaoPagamentoId (posteriormente)
    };
  }


  if(exec == "alt") {
    dataFiltered = {
      id: id,
      nomeRazaoSocial: data.nomeRazaoSocial,
      nomeFantasia: data.nomeFantasia,
      tipo: data.tipo, // number
      cpfCnpj: data.cpfCnpj,
      numeroPisPasepNit: data.numeroPisPasepNit,
      email: data.email,
      telefone: data.telefone,
      rgInscricaoEstadual: data.rgInscricaoEstadual,
      inscricaoMunicipal: data.inscricaoMunicipal,
      crt: data.crt, // number
      optanteSimples: (data.optanteSimples == 1) ? true : (data.optanteSimples == 0 && false),
      cep: data.cep,
      uf: data.uf, // number select
      cidade: data.cidade, // select
      bairro: data.bairro,
      logradouro: data.logradouro,
      numero: data.numero,
      complemento: data.complemento,
      codigoIbge: data.codigoIbge, // number
      atividade: data.atividade, // number select
      limiteCredito: data.limiteCredito, // number
      liberado: (data.liberado == 1) ? true : (data.liberado == 0 && false), // select
      desconto: data.desconto, // number
      formaPagamentoId: null, // data.formaPagamentoId (posteriormente)
      condicaoPagamentoId: null // data.condicaoPagamentoId (posteriormente)
    };
  }


  return dataFiltered

}