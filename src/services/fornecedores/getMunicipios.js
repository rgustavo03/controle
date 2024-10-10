import axios from "axios";


export async function getMunicipios(uf) {


  try {
    await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
    )
    .then(res => {

      console.log(res.data);
      //return response.data

    })
    .catch(error => {

      console.log(error);

    });
  }
  catch (error) {

    console.log(error);

  }


}