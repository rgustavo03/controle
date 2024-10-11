import axiosInterceptor from "../axiosInterceptor";

export default async function createFornecedor(data, token, navigate) {

  // @ts-ignore
  const apiUrl = import.meta.env.VITE_API_FORNECEDORES;

  const axios = axiosInterceptor(navigate);

  try {

    await axios.post(
      `${apiUrl}/criar`,
      data,
      {headers: { Authorization: `Bearer ${token}` }}
    )
    .then(res => {

      console.log(res.data);
      
      if(res.data.status == 200) {
        navigate('/fornecedores');
      }

    })
    .catch(error => {

      console.log(error);
      alert('Falha ao cadastrar fornecedor.');

    });

  }
  catch (error) {

    console.log(error);

  }
}



/*
{
  "empresaId": 0,
  "nomeRazaoSocial": "string",
  "cpfCnpj": "string",
  "telefone": "string",
  "email": "string",
  "rgInscricaoEstadual": "string",
  "tipo": 1,
  "optanteSimples": true,
  "limiteCredito": 0,
  "numeroPisPasepNit": "string",
  "cep": "string",
  "cidade": "string",
  "uf": 11,
  "logradouro": "string",
  "numero": "string",
  "bairro": "string",
  "complemento": "string",
  "codigoIbge": 0,
  "nomeFantasia": "string",
  "atividade": 1,
  "crt": 1,
  "liberado": true,
  "desconto": 0,
  "formaPagamentoId": 0,
  "condicaoPagamentoId": 0,
  "inscricaoMunicipal": "string"
}
*/