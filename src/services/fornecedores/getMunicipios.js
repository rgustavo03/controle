import axios from "axios";


export async function getMunicipios(uf, saveMunicipios) {

  const listMunicipios = [];

  try {
    await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
    )
    .then(res => {

      // Salvando em listMunicipios
      res.data.map(m => {
        listMunicipios.push(
          { key: m.id, label: m.nome, value: m.nome }
        );
      });

      saveMunicipios(listMunicipios);

    })
    .catch(error => {

      console.log(error);

    });
  }
  catch (error) {

    console.log(error);

  }


}