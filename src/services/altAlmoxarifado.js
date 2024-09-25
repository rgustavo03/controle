import axios from "axios";

export default async function altAlmoxarifado(id, descricao, tipo, token, updateListAlmoxarifados) {

  try {
    await axios.put(
      'https://compsysweb.pdvfiscal.com.br/api/v1/almoxarifado/alterar',
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
  }
  catch(error) {
    console.log(error);
  }

}