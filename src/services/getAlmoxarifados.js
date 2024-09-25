import axios from "axios";

export default async function getAlmoxarifados(token, handleSetList) {

  try {
    await axios.get(

      'https://compsysweb.pdvfiscal.com.br/api/v1/almoxarifado/listar',
      {headers: { Authorization: `Bearer ${token}` }}

    )
    .then(res => {

      if(res.data.status == 200) handleSetList(res.data.data); // sucesso conexão
      else console.log(res.data.message); // erro conexão

    });
  }
  catch(error) {

    console.log(error);

  }

}