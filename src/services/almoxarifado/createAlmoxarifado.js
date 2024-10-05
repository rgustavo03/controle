// api usada em Modal

import axiosInterceptor from "../axiosInterceptor";


export default async function createAlmoxarifado(data, token, updateListAlmoxarifados, navigate) {

  // @ts-ignore
  const apiURL = import.meta.env.VITE_API_ALMOXARIFADO;

  const axios = axiosInterceptor(navigate);

  try {
    await axios.post(

      `${apiURL}/criar`,
      {
        empresaId: data.empresaId, 
        descricao: data.descricao, 
        tipo: data.tipo 
      },
      {headers: { Authorization: `Bearer ${token}` }}

    )
    .then(res => {

      console.log(res.data.message);

      updateListAlmoxarifados();

    });
  }
  catch(error) {

    console.log(error);

  }
}
