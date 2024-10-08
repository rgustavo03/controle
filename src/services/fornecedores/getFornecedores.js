import axiosInterceptor from "../axiosInterceptor";

export default async function getFornecedores(token, idUsuario, handleSetList, navigate) {

  // @ts-ignore
  const apiURL = import.meta.env.VITE_API_FORNECEDORES;

  const axios = axiosInterceptor(navigate);

  try {
    await axios.get(
      `${apiURL}/listar/${idUsuario}`,
      {headers: { Authorization: `Bearer ${token}` }}
    )
    .then(res => {

      console.log(res.data);

      if(res.data.status == 200) {
        handleSetList(res.data.data); // sucesso conexão
      }

    })
    .catch(error => {

      console.log(error);

    });
  }
  catch (error) {

    console.log(error);

  }
}