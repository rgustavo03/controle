import axiosInterceptor from "./axiosInterceptor";

export default async function getAlmoxarifados(token, handleSetList, navigate) {

  // @ts-ignore
  const apiURL = import.meta.env.VITE_API_ALMOXARIFADO;

  const axios = axiosInterceptor(navigate);

  try {
    await axios.get(

      `${apiURL}/listar`,
      {headers: { Authorization: `Bearer ${token}` }}

    )
    .then(res => {

      if(res.data.status == 200) {
        handleSetList(res.data.data); // sucesso conexão
      }

      else {
        console.log(res.data.message); // erro conexão
      }

    })
    .catch(error => {

      console.log(error);

    });
  }
  catch(error) {

    console.log(error);

  }

}