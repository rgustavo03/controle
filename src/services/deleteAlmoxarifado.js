import axios from "axios";

export default async function deleteAlmoxarifado(token, id) {

  try {
    await axios.delete(

      `https://compsysweb.pdvfiscal.com.br/api/v1/almoxarifado/excluir/${id}`,
      {headers: { Authorization: `Bearer ${token}` }}

    )
    .then(res => {

      if(res.data.status == 200) console.log(res.data.message);

      else console.log("Erro");

    });
  }
  catch(error) {

    console.log(error);

  }

}
