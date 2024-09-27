
import axiosInterceptor from "./axiosInterceptor";

export default async function deleteAlmoxarifado(token, id, updateListAlmoxarifados, navigate) {

  // @ts-ignore
  const apiURL = import.meta.env.VITE_API_ALMOXARIFADO;

  const axios = axiosInterceptor(navigate);

  try {
    await axios.delete(

      `${apiURL}/excluir/${id}`,
      {headers: { Authorization: `Bearer ${token}` }}

    )
    .then(res => {

      if(res.data.status == 200) updateListAlmoxarifados();

      else console.log("Erro ", res.data.message);

    });
  }
  catch(error) {

    console.log(error);

  }

}
