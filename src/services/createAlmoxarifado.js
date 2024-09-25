import axios from "axios";

export default async function createAlmoxarifado(data, token, updateListAlmoxarifados) {
  try {
    await axios.post(

      'https://compsysweb.pdvfiscal.com.br/api/v1/almoxarifado/criar',
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
