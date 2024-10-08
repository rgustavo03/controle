import axiosInterceptor from "../axiosInterceptor";

export default async function createFornecedor(token, id, updateListFornecedores, navigate) {

  // @ts-ignore
  const apiURL = import.meta.env.VITE_API_FORNECEDORES;

  const axios = axiosInterceptor(navigate);

  try {
    await axios.delete(

      `${apiURL}/excluir/${id}`,
      {headers: { Authorization: `Bearer ${token}` }}

    )
    .then(res => {

      if(res.data.status == 200) updateListFornecedores();

      else console.log("Erro ", res.data.message);

    })
    .catch(error => {

      console.log(error);

    });
  }
  catch(error) {

    console.log(error);

  }
}