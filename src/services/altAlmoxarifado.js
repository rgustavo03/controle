import axiosInterceptor from "./axiosInterceptor";

export default async function altAlmoxarifado(id, descricao, tipo, token, updateListAlmoxarifados, navigate) {

  // @ts-ignore
  const apiURL = import.meta.env.VITE_API_ALMOXARIFADO;

  const axios = axiosInterceptor(navigate);

  try {
    await axios.put(
      `${apiURL}/alterar`,
      {
        id: id,
        descricao: descricao,
        tipo: tipo
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(res => {

      console.log(res.data.message);

      updateListAlmoxarifados();

    })
    .catch(error => {

      console.log(error);

    })
  }
  catch(error) {
    console.log(error);
  }

}